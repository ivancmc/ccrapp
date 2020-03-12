<template>
    <q-page class="q-pa-md flex-center">
      <q-card
        class="q-pa-md"
        inline
        color="white"
        v-if="!user"
      >
        <div class="float-left" v-show="false">
          <q-toggle
            v-model="notifications"
            unchecked-icon="notifications_off"
            checked-icon="notifications_active"
            color="blue-8"
            @input="receber_notificacoes()"
            ref="toggle_ntf"
          />
        </div>
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
          @keyup.enter="entrar"
          lazy-rules
          :rules="[val => val && val.length > 0 || 'Por favor digite seu e-mail', val => val.includes('@') && val.includes('.') || 'Digite um e-mail válido']"
          clearable
          />
          <q-input
          v-model="senha"
          type="password"
          label="Senha *"
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
        </q-form>
      </q-card>
      <q-card
        class="card-sign-in q-pa-md"
        inline
        color="white"
        v-else
      >
        <div class="float-left" v-show="false">
          <q-toggle
            v-model="notifications"
            unchecked-icon="notifications_off"
            checked-icon="notifications_active"
            color="blue-8"
            @input="receber_notificacoes()"
            ref="toggle_ntf"
          />
        </div>
        <q-card-section
          class="q-pa-md"
          style="margin:auto; width:max-content"
        >
          <!-- <q-icon name="assignment_ind" style="font-size: 10em;" /> -->
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
      <q-page-sticky position="bottom-right" :offset="[18, 18]" v-if="admin">
        <q-fab
          icon="settings"
          color="grey-7"
          direction="up">
          <q-fab-action external-label label-position="left" color="grey-7" to="/users" icon="group" label="Usuários" />
          <!-- <q-fab-action external-label label-position="left" color="grey-7" to="/notificar" icon="chat" label="Notificar" /> -->
        </q-fab>
      </q-page-sticky>
    </q-page>
</template>

<style scoped>
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
      perfil: {
        nome: '',
        contato: '',
        nascimento: ''
      },
      admin: false,
      notifications: false
    }
  },

  created () {
    if (this.user) {
      this.getProfile(this.user.uid)
    }
    if (window.localStorage.getItem('notification-permission') === 'granted') {
      this.notifications = true
    }
  },

  methods: {
    registrar () {
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
            message: 'Ops.. algo deu errado: ' + this.$q.lang.auth[this.codigo],
            color: 'negative',
            position: 'center',
            icon: 'error'
          })
          this['loading2'] = false
          console.log(this.codigo)
          console.log(err.message)
        }
      )
    },

    getProfile (uid) {
      this.$db.ref('perfis').orderByChild('id').equalTo(uid).once('child_added', (snapshot) => {
        this.perfil = snapshot.val()
        this.admin = snapshot.val().admin
      })
    },

    entrar () {
      this['loading1'] = true
      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
        (user) => {
          let name = '. Por favor, preencha seu perfil.'
          if (user.user.displayName) {
            let _name = user.user.displayName.split(' ')
            name = ' ' + _name[0] + '!'
          }
          this.$q.notify({
            message: 'Seja bem-vindo' + name,
            color: 'positive',
            position: 'center',
            icon: 'assignment_turned_in'
          })
          if (!user.user.displayName) {
            this.$router.replace('/profile')
          } else {
            this.$router.replace('/')
          }
        },
        (err) => {
          this.codigo = err.code.split('/')[1].replace(/-/g, '_')
          this.$q.notify({
            message: 'Ops.. algo deu errado: ' + this.$q.lang.auth[this.codigo],
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
    resetar_senha () {
      this.$router.replace('/reset_pwd')
    },
    sair () {
      this.$firebase.auth().signOut().then(
        () => {
          this.$q.notify({
            message: 'Até mais ' + this.perfil.nome,
            color: 'blue-8',
            position: 'center',
            icon: 'pan_tool'
          })
          window.localStorage.setItem('username', '')
          this.$router.replace('/')
        }
      )
    },

    handleTokenRefresh () {
      return this.$msg.getToken().then((token) => {
        this.$db.ref('tokens_notification').orderByValue().equalTo(token).once('value', (snapshot) => {
          if (!snapshot.exists()) {
            console.log('Salvando token no database...')
            this.$db.ref('tokens_notification').push(token)
          } else {
            console.log('Já existe.')
          }
        })
        console.log(token)
      })
    },

    receber_notificacoes () {
      if (this.$refs.toggle_ntf.value) {
        // Desativar notificacoes
        this.$msg.getToken().then((token) => {
          console.log(token)
          window.localStorage.setItem('notification-permission', 'denied')
          this.$db.ref('tokens_notification').orderByValue().equalTo(token).once('value', (snapshot) => {
            let key = Object.keys(snapshot.val())[0]
            this.$db.ref('tokens_notification').child(key).remove()
            console.log('token removido')
          })
        })
        this.notifications = false
        this.$q.notify({
          message: 'Notificações desabilitadas.',
          color: 'negative',
          position: 'center',
          icon: 'chat'
        })
      } else {
        // Ativar notificacoes
        console.log(Notification.permission)
        if (Notification.permission === 'granted') {
          window.localStorage.setItem('notification-permission', 'granted')
          this.handleTokenRefresh()
          this.notifications = true
          this.$q.notify({
            message: 'Notificações habilitadas.',
            color: 'positive',
            position: 'center',
            icon: 'chat'
          })
        } else if (Notification.permission === 'denied') {
          alert('Você deve limpar a configuração de notificações do App para poder habilitar novamente.')
          this.notifications = false
        } else if (Notification.permission === 'default') {
          Notification.requestPermission().then((choice) => {
            if (choice === 'granted') {
              window.localStorage.setItem('notification-permission', 'granted')
              this.handleTokenRefresh()
              this.notifications = true
              this.$q.notify({
                message: 'Notificações habilitadas.',
                color: 'positive',
                position: 'center',
                icon: 'chat'
              })
            } else {
              window.localStorage.setItem('notification-permission', 'denied')
              this.notifications = false
            }
          })
        }
      }
    }
  }
}
</script>
