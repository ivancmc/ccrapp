<template>
  <q-page padding>
    <div>
      <q-form
        @submit="atualizarPerfil()"
        class="q-gutter-sm q-pa-sm"
      >
        <q-input
        v-model="perfil.nome"
        ref="input_nome"
        label="Nome *"
        :rules="[val => val && val.length > 0 || 'Por favor digite seu nome']"
        lazy-rules
        clearable
        />
        <q-input
        v-model="perfil.sobrenome"
        ref="input_sobrenome"
        label="Sobrenome *"
        hint="Apenas um sobrenome"
        :rules="[val => val && val.length > 0 || 'Por favor digite seu sobrenome']"
        lazy-rules
        clearable
        />
        <q-input
        v-model="perfil.contato"
        label="Contato"
        mask="(##) #####-####"
        hint="WhatsApp ou celular"
        clearable
        />
        <q-input
        v-model="perfil.nascimento"
        label="Data de nascimento"
        mask="##/##/####"
        clearable
        />
        <q-input
        v-model="user.email"
        ref="input_email"
        label="E-mail"
        readonly
        />
        <div>
          <q-btn label="Atualizar" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      user: this.$firebase.auth().currentUser,
      perfil: {
        nome: '',
        sobrenome: '',
        contato: '',
        nascimento: ''
      }
    }
  },

  created () {
    if (this.user) {
      this.$db.ref('perfis').orderByChild('id').equalTo(this.user.uid).once('child_added', (snapshot) => {
        this.perfil = snapshot.val()
      })
    }
  },

  methods: {
    atualizarPerfil () {
      var that = this
      this.$db.ref('perfis').orderByChild('id').equalTo(that.user.uid).once('value', (snapshot) => {
        if (snapshot.exists()) {
          that.$db.ref('perfis').orderByChild('id').equalTo(that.user.uid).once('child_added', (snap) => {
            that.$db.ref('perfis').child(snap.key).update({
              nome: that.perfil.nome,
              sobrenome: that.perfil.sobrenome,
              contato: that.perfil.contato,
              nascimento: that.perfil.nascimento
            })
          })
        } else {
          let _newprofile = that.$db.ref('perfis').push()
          _newprofile.setWithPriority({
            id: that.user.uid,
            nome: that.perfil.nome,
            sobrenome: that.perfil.sobrenome,
            contato: that.perfil.contato,
            nascimento: that.perfil.nascimento,
            admin: false
          }, that.perfil.nome)
        }
      })
      this.user.updateProfile({
        displayName: this.perfil.nome + ' ' + this.perfil.sobrenome
      }).then(
        (u) => {
          this.$q.notify({
            message: 'Perfil atualizado com sucesso!',
            color: 'positive',
            position: 'center',
            icon: 'how_to_reg'
          })
          this.$router.replace('/')
        },
        (err) => {
          this.$q.notify({
            message: 'Ops.. algo deu errado. Tente novamente',
            color: 'negative',
            position: 'center',
            icon: 'error'
          })
          console.log(err.message)
        }
      )
    }
  }
}
</script>
