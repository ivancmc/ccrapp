<template>
    <q-page class="q-pa-md flex-center">
        <q-card
          class="q-pa-md"
          inline
          color="white"
        >
          <q-card-section
            class="text-dark text-center"
          >
            <!-- <h4 style="margin-top: auto;">Esqueceu sua senha?</h4> -->
            <h5 style="margin-top: auto;">Entre com seu e-mail, solicite uma nova senha e acesse seu e-mail para seguir as instruções</h5>
          </q-card-section>
          <q-form>
            <q-input
            v-model="email"
            label="E-mail *"
            @keyup.enter="reset_senha"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor digite seu e-mail', val => val.includes('@') && val.includes('.') || 'Digite um e-mail válido']"
            />
            <q-card-actions
              align="center"
              class="q-mt-lg"
            >
                <q-btn label="Solicitar nova senha" @click="reset_senha" color="primary" flat class="q-ml-sm" :loading="loading">
                  <template v-slot:loading>
                    <q-spinner-facebook />
                  </template>
                </q-btn>
            </q-card-actions>
          </q-form>
        </q-card>
    </q-page>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Reset_Pwd',
  data () {
    return {
      email: '',
      loading: false,
      codigo: '',
      error_auth: {
        invalid_email: 'O endereço de email está mal formatado.',
        user_not_found: 'Não há registro de usuário correspondente. O usuário pode ter sido excluído.',
        wrong_password: 'Senha inválida.',
        weak_password: 'A senha deve conter no mínimo 6 caracteres.',
        email_already_in_use: 'Este email já está em uso por outra conta.'
      }
    }
  },
  methods: {
    reset_senha () {
      this.loading = true
      this.$firebase.auth().sendPasswordResetEmail(this.email).then(
        () => {
          this.$q.notify({
            message: 'E-mail enviado! Acesse seu e-mail para fazer uma nova senha.',
            color: 'accent',
            position: 'center'
          })
          this.$router.replace('/')
        },
        (err) => {
          this.codigo = err.code.split('/')[1].replace(/-/g, '_')
          this.$q.notify({
            message: this.error_auth[this.codigo],
            color: 'negative',
            position: 'center'
          })
          this.loading = false
        }
      )
    }
  }
}
</script>
