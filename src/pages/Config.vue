<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md row justify-center">
      <div
        class=""
        style="min-width: 342px"
        >
        <q-card
          class="q-pa-sm q-mb-lg"
          inline
          color="white"
          style="min-width: 342px; height: fit-content;"
        >
          <!-- <div class='onesignal-customlink-container float-right' style="margin-top: 3px;" v-if="!$q.platform.is.ios"></div> -->
          <q-card-section class="text-left" style="padding: 8px;">
            <div class="text-subtitle2" style="display: inline">Notificações</div>
            <div class="float-right" style="margin-top: -10px;" v-if="!$q.platform.is.ios">
              <q-toggle
                v-model="notifications"
                unchecked-icon="notifications_off"
                checked-icon="notifications_active"
                color="blue-8"
                @input="receber_notificacoes()"
                ref="toggle_ntf"
              />
            </div>
          </q-card-section>
          <div v-if="$q.platform.is.ios">
            <q-separator />
            <br />
            <p>Infelizmente as notificações ainda não funcionam neste dispositivo, mas no ícone <q-icon name="notifications_active" /> aqui em cima você verá todas elas!</p>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Config',
  data () {
    return {
      notifications: false
    }
  },
  mounted () {
    var that = this
    var OneSignal = window.OneSignal
    OneSignal.push(function () {
      OneSignal.isPushNotificationsEnabled().then((isEnabled) => {
        if (isEnabled) {
          that.notifications = true
        }
      })
    })
  },

  methods: {
    receber_notificacoes () {
      var that = this
      var OneSignal = window.OneSignal
      if (that.$refs.toggle_ntf.value) {
        // Desativar notificacoes
        OneSignal.setSubscription(false)
        that.notifications = false
        that.$q.notify({
          message: 'Notificações desabilitadas.',
          color: 'negative',
          position: 'center',
          icon: 'chat'
        })
      } else {
        // Ativar notificacoes
        OneSignal.push(function () {
          var isPushSupported = OneSignal.isPushNotificationsSupported()
          if (isPushSupported) {
            // Push notifications are supported
            OneSignal.push(['getNotificationPermission', function (permission) {
              if (permission === 'granted') {
                OneSignal.push(function () {
                  OneSignal.isPushNotificationsEnabled().then((isEnabled) => {
                    if (!isEnabled) {
                      OneSignal.setSubscription(true)
                      that.notifications = true
                      that.$q.notify({
                        message: 'Notificações habilitadas.',
                        color: 'positive',
                        position: 'center',
                        icon: 'chat'
                      })
                    } else {
                      that.notifications = true
                    }
                  })
                })
              } else if (permission === 'denied') {
                alert('Você deve limpar a configuração de notificações do App para poder habilitar novamente.')
                that.notifications = false
              } else if (permission === 'default') {
                OneSignal.push(function () {
                  OneSignal.showSlidedownPrompt({ force: true })
                })
                OneSignal.push(function () {
                  OneSignal.on('popoverAllowClick', function () {
                    setTimeout(function () {
                      if (Notification.permission === 'granted') {
                        OneSignal.setSubscription(true)
                        that.notifications = true
                        that.$q.notify({
                          message: 'Notificações habilitadas.',
                          color: 'positive',
                          position: 'center',
                          icon: 'chat'
                        })
                      } else {
                        that.notifications = false
                      }
                    }, 5000)
                  })
                })
                OneSignal.push(function () {
                  OneSignal.on('popoverCancelClick', function () {
                    that.notifications = false
                  })
                })
              }
            }])
          } else {
            // Push notifications are not supported
            that.$q.notify({
              message: 'Infelizmente as notificações ainda não funcionam no iPhone, mas no ícone 🔔 aqui em cima você verá todas elas!',
              color: 'negative',
              position: 'center',
              icon: 'chat',
              html: true
            })
          }
        })
      }
    }
  }
}
</script>
