<template>
  <q-page class="q-pa-sm flex-center" padding>
    <div
      style="min-width: 342px; margin-bottom: 24px;"
      v-if="usuarios">
      <div style="width: 100%;">
        <q-markup-table dense separator="cell">
          <thead>
            <tr class="bg-grey text-white">
              <th class="text-center text-black">Nome</th>
              <th class="text-center text-black">Contato</th>
              <th class="text-center text-black">Nascimento</th>
              <th class="text-center text-black">Adm</th>
              <th class="text-center text-black">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario of usuarios" :key="usuario['.key']">
              <td class="text-center">{{ usuario.nome + ' ' + usuario.sobrenome }}</td>
              <td class="text-center">{{ usuario.contato }}</td>
              <td class="text-center">{{ usuario.nascimento }}</td>
              <td class="text-center">
                <q-toggle
                  v-model="usuario.admin"
                  checked-icon="how_to_reg"
                  color="green"
                  unchecked-icon="clear"
                  @input="make_adm(usuario.id, usuario.admin)"
                  ref="toggle_adm"
                />
              </td>
              <td class="text-center"><q-btn dense @click="excluir_perfil(usuario.id)" flat icon="delete_forever" /></td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="blue-8" class="shadow-5" />
    </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      user: this.$firebase.auth().currentUser,
      usuarios: null
    }
  },

  created () {
    this.$db.ref('perfis').orderByPriority().on('value', (snapshot) => {
      this.usuarios = snapshot.val()
    })
  },

  methods: {
    make_adm (id, adm) {
      if (id !== this.user.uid) {
        this.$db.ref('perfis').orderByChild('id').equalTo(id).once('child_added', (snapshot) => {
          this.$db.ref('perfis').child(snapshot.key).update({
            admin: adm
          })
        })
        this.$q.notify({
          message: 'Usuário atualizado com sucesso!',
          color: 'positive',
          position: 'center',
          icon: 'verified_user'
        })
      } else {
        this.$q.notify({
          message: 'Você não pode fazer isso!',
          color: 'negative',
          position: 'center',
          icon: 'error'
        })
        this.$db.ref('perfis').orderByChild('nome').on('value', (snapshot) => {
          this.usuarios = snapshot.val()
        })
      }
    },

    excluir_perfil (id) {
      if (id !== this.user.uid) {
        this.$db.ref('perfis').orderByChild('id').equalTo(id).once('child_added', (snapshot) => {
          this.$db.ref('perfis').child(snapshot.key).remove()
        })
        this.$q.notify({
          message: 'Usuário excluído!',
          color: 'positive',
          position: 'center',
          icon: 'person_add_disabled'
        })
      } else {
        this.$q.notify({
          message: 'Você não pode fazer isso!',
          color: 'negative',
          position: 'center',
          icon: 'error'
        })
      }
      this.$db.ref('perfis').orderByChild('nome').on('value', (snapshot) => {
        this.usuarios = snapshot.val()
      })
    }
  }
}
</script>
