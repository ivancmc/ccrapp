<template>
    <q-page>
      <div class="q-pa-md q-gutter-md row justify-center">
        <q-card
          class="q-pa-md q-mb-lg"
          inline
          color="white"
          style="min-width: 342px"
        >
          <q-card-section class='text-center'>
            <q-img :src="user.photoURL + '?height=500'" style="border-radius: 50px; height: 100px; width: 100px; margin-bottom: 15px;" v-if="user.photoURL" />
            <div class="text-subtitle2">Meus dados</div>
          </q-card-section>

          <q-separator />
          <q-card-section
            class="q-pa-md"
            style="margin:auto; width:max-content"
          >
            <q-input
            v-model="user.displayName"
            label="Nome"
            readonly
            />
            <q-input
            v-model="user.email"
            label="E-mail"
            readonly
            />
            <q-input
            v-model="perfil.contato"
            label="Contato"
            readonly
            />
            <q-input
            v-model="perfil.nascimento"
            label="Data de nascimento"
            readonly
            />
          </q-card-section>
          <q-card-actions
            align="center"
            class="q-mt-lg"
          >
            <q-btn label="Perfil" to="/profile" color="primary"/>
            <q-btn label="Sair" @click="sair" color="primary"/>
          </q-card-actions>
        </q-card>
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
      <q-page-sticky position="bottom-right" :offset="[8, 8]" v-if="admin" >
        <q-fab
          icon="settings"
          color="grey-7"
          direction="up">
          <q-fab-action external-label label-position="left" color="grey-7" to="/users" icon="group" label="Usuários" v-if="admin" />
          <!-- <q-fab-action external-label label-position="left" color="grey-7" to="/config" icon="tune" label="Preferências" /> -->
        </q-fab>
      </q-page-sticky>
    </q-page>
</template>

<style scoped>
.onesignal-customlink-container {
  text-align: center;
}
</style>

<script>
export default {
  name: 'Usuário',
  data () {
    return {
      user: this.$firebase.auth().currentUser,
      perfil: {
        nome: '',
        contato: '',
        nascimento: ''
      },
      admin: false,
      notifications: false
    }
  },

  mounted () {
    var that = this
    this.$firebase.auth().onAuthStateChanged(function (usuario) {
      if (usuario) {
        that.user = usuario
      } else {
        that.user = null
      }
    })
    if (that.user) {
      that.getProfile(that.user.uid)
    }
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
    getProfile (uid) {
      this.$db.ref('perfis').orderByChild('id').equalTo(uid).once('child_added', (snapshot) => {
        this.perfil = snapshot.val()
        this.admin = snapshot.val().admin
      })
    },

    sair () {
      var name = ''
      if (this.user.displayName) {
        let _name = this.user.displayName.split(' ')
        name = _name[0]
      }
      this.$firebase.auth().signOut().then(
        () => {
          this.$q.notify({
            message: 'Até mais ' + name + '!',
            color: 'blue-8',
            position: 'center',
            icon: 'pan_tool'
          })
          window.localStorage.setItem('username', '')
          this.$router.replace('/')
        }
      )
    },

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
