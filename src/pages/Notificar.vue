<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-md row justify-center">
      <div
        class=""
        style="min-width: 342px"
        >
        <q-card
          class="q-pa-md q-mb-lg"
          inline
          color="white"
        >
          <q-card-section class='text-center'>
            <div class="text-subtitle2">Notificação</div>
          </q-card-section>
          <div>
            <q-form
              @submit="notificar"
              class="q-gutter-sm q-pa-sm"
            >
              <q-input
                ref='input_titulo'
                placeholder='Título'
                outlined
                clearable
                v-model="titulo"
                :rules="[val => !!val || 'Título obrigatório.']"
                lazy-rules>
              </q-input>
              <q-input
                placeholder='Descrição'
                outlined
                clearable
                autogrow
                v-model="descricao">
              </q-input>
              <q-input
                placeholder='Link destino'
                outlined
                clearable
                v-model="destino">
              </q-input>
              <q-card-actions
                align="center"
                class="q-mt-lg"
              >
                <q-btn label="Notificar!" type="submit" color="primary"/>
              </q-card-actions>
            </q-form>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Notificar',
  data () {
    return {
      user: this.$firebase.auth().currentUser,
      admin: false,
      titulo: '',
      descricao: '',
      destino: ''
    }
  },
  created () {
    if (this.user) {
      this.$db.ref('perfis').orderByChild('id').equalTo(this.user.uid).once('child_added', (snapshot) => {
        this.admin = snapshot.val().admin
      })
    }
  },

  methods: {
    notificar () {
      this.$db.ref('notification').push({
        title: this.titulo,
        body: this.descricao,
        click_action: this.destino
      })
      this.$q.notify({
        color: 'positive',
        textColor: 'white',
        position: 'center',
        message: 'Notificação enviada!'
      })
      this.titulo = ''
      this.descricao = ''
      this.destino = ''
      this.$refs.input_titulo.resetValidation()
    }
  }
}
</script>
