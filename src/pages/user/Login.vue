<template>
    <q-page>
      <div class="q-pa-md q-gutter-md row justify-center">
        <q-card
          class="q-pa-md q-mb-lg"
          inline
          color="white"
          style="min-width: 342px"
        >
          <div class="float-right">
            <q-btn color="grey-7" round flat icon="o_live_help">
              <q-menu anchor="bottom left" self="top middle" auto-close>
                <q-list style="width: max-content">
                  <q-item clickable @click="resetar_senha">
                    <q-item-section>Esqueci minha senha</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <q-card-section class="q-pa-md" style="margin:auto; width:max-content">
            <q-icon name="assignment_ind" style="font-size: 5em;" />
          </q-card-section>
          <q-form>
            <q-input
            v-model="email"
            label="E-mail *"
            ref="input_email"
            @keyup.enter="entrar"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor digite seu e-mail', val => val.includes('@') && val.includes('.') || 'Digite um e-mail válido']"
            clearable
            />
            <q-input
            v-model="senha"
            type="password"
            label="Senha *"
            ref="input_senha"
            @keyup.enter="entrar"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Digite uma senha'
            ]"
            clearable
            />
            <q-card-actions
              align="center"
              class="q-mt-lg"
            >
                <q-btn label="Entrar" @click="entrar" color="secondary" :loading="loading1">
                  <template v-slot:loading>
                    <q-spinner-facebook />
                  </template>
                </q-btn>
                <q-btn label="Criar conta" @click="registrar" color="primary" flat class="q-ml-sm" :loading="loading2">
                  <template v-slot:loading>
                    <q-spinner-facebook />
                  </template>
                </q-btn>
            </q-card-actions>
            <div class="form-group" style="max-width: fit-content">
              <p class="ride-line"><span>ou</span></p>
              <q-btn class="fit q-mb-sm" color="white" text-color="grey-7" no-caps @click="entrar_google()">
                <q-icon left name="img:statics/google.png" />
                Fazer login com Google
                <q-space />
              </q-btn>
              <q-btn class="fit" color="white" text-color="grey-7" no-caps @click="entrar_facebook()">
                <q-icon left name="img:statics/facebook.png" />
                Fazer login com Facebook
                <q-space />
              </q-btn>
            </div>
          </q-form>
        </q-card>
        <q-card
          class="q-pa-sm q-mb-lg"
          inline
          color="white"
          style="min-width: 342px; height: fit-content;"
        >
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
            <div style="max-width: 300px; height: fit-content; margin-top: 12px;" v-if="$q.platform.is.ios">
              <q-separator />
              <br />
              <p>Infelizmente as notificações ainda não funcionam neste dispositivo, mas no ícone <q-icon name="notifications_active" /> aqui em cima você verá todas elas!</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
</template>

<style scoped>
.onesignal-customlink-container {
  text-align: center;
}
.form-group {
    margin-bottom: 24px;
}

.form-group a {
    text-decoration: none;
}

.ride-line {
    position: relative;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 32px;
}

.ride-line:before {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 12px;
    background-color: #ededf4;
}

.ride-line span {
    background-color: #fff;
    padding-left: 12px;
    padding-right: 12px;
    display: inline-block;
    line-height: 24px;
    position: relative;
    z-index: 1;
    color: #747487;
}
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      senha: '',
      loading1: false,
      loading2: false,
      codigo: '',
      user: this.$firebase.auth().currentUser,
      notifications: false,
      error_auth: {
        invalid_email: 'O endereço de email está mal formatado.',
        user_not_found: 'Não há registro de usuário correspondente. O usuário pode ter sido excluído.',
        wrong_password: 'Senha inválida.',
        weak_password: 'A senha deve conter no mínimo 6 caracteres.',
        email_already_in_use: 'Este email já está em uso por outra conta.',
        account_exists_with_different_credential: 'Já existe uma conta com o mesmo email, mas com método de login diferente.',
        popup_closed_by_user: 'A janela foi fechada antes de terminar a operação.',
        cancelled_popup_request: 'A operação foi cancelada.',
        network_request_failed: 'Um erro de rede ocorreu. Tente novamente.'
      }
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
    registrar () {
      this.$refs.input_email.validate()
      this.$refs.input_senha.validate()
      this['loading2'] = true
      this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
          this.$q.notify({
            message: 'Sua conta foi criada com sucesso!',
            color: 'positive',
            position: 'center',
            icon: 'how_to_reg'
          })
          this.$router.replace('/')
        },
        (err) => {
          this.codigo = err.code.split('/')[1].replace(/-/g, '_')
          this.$q.notify({
            message: this.error_auth[this.codigo],
            color: 'negative',
            position: 'center',
            icon: 'error'
          })
          this['loading2'] = false
          // console.log(this.codigo)
          // console.log(err.message)
        }
      )
      this.$refs.input_email.resetValidation()
      this.$refs.input_senha.resetValidation()
    },

    entrar () {
      this.$refs.input_email.validate()
      this.$refs.input_senha.validate()
      this['loading1'] = true
      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
        (result) => {
          let name = '. Por favor, preencha seu perfil.'
          if (result.user.displayName) {
            let _name = result.user.displayName.split(' ')
            name = ' ' + _name[0] + '!'
          }
          this.$q.notify({
            message: 'Seja bem-vindo(a)' + name,
            color: 'positive',
            position: 'center',
            icon: 'assignment_turned_in'
          })
          if (!result.user.displayName) {
            this.$router.replace('/profile')
          } else {
            this.$router.replace('/')
          }
        },
        (err) => {
          this.codigo = err.code.split('/')[1].replace(/-/g, '_')
          this.$q.notify({
            message: this.error_auth[this.codigo],
            color: 'negative',
            position: 'center',
            icon: 'assignment_late'
          })
          this['loading1'] = false
          // console.log(this.codigo)
          // console.log(err.message)
        }
      )
      this.$refs.input_email.resetValidation()
      this.$refs.input_senha.resetValidation()
    },

    resetar_senha () {
      this.$router.replace('/reset_pwd')
    },

    entrar_google () {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.firebase_auth(provider)
    },

    entrar_facebook () {
      var provider = new this.$firebase.auth.FacebookAuthProvider()
      this.firebase_auth(provider)
    },

    firebase_auth (provider) {
      this.$firebase.auth().signInWithPopup(provider).then(
        (result) => {
          var name = '. Por favor, preencha seu perfil.'
          if (result.user.displayName) {
            var _name = result.user.displayName.split(' ')
            name = ' ' + _name[0] + '!'
          }
          this.$q.notify({
            message: 'Seja bem-vindo(a)' + name,
            color: 'positive',
            position: 'center',
            icon: 'assignment_turned_in'
          })
          if (!result.user.displayName) {
            this.$router.replace('/profile')
          } else {
            var that = this
            this.$db.ref('perfis').orderByChild('id').equalTo(result.user.uid).once('value', (snapshot) => {
              if (!snapshot.exists()) {
                let _newprofile = that.$db.ref('perfis').push()
                _newprofile.setWithPriority({
                  id: result.user.uid,
                  nome: _name[0],
                  sobrenome: _name[1],
                  contato: '',
                  nascimento: '',
                  admin: false
                }, _name[0])
              }
            })
            this.$router.replace('/')
          }
        },
        (err) => {
          this.codigo = err.code.split('/')[1].replace(/-/g, '_')
          this.$q.notify({
            message: this.error_auth[this.codigo],
            color: 'negative',
            position: 'center',
            icon: 'assignment_late'
          })
          this['loading1'] = false
          console.log(this.codigo)
          console.log(err.message)
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
