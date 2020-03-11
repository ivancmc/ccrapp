<template>
  <q-page class="q-pa-sm flex-center">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="showData">
        <div v-show="!showErro" class="frame">
          <iframe id="frame_almoco" src="https://tiny.cc/AlmocoCCRSSA" width="100%" height="auto" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
        </div>
        <div v-show="showErro" class="fixed-center text-center">
          <p>
            <img
              src="~assets/sad.svg"
              style="width:30vw;max-width:150px;"
            >
          </p>
          <p class="text-faded">Infelizmente não foi possível carregar o conteúdo. Tente novamente.</p>
          <q-btn
            color="primary"
            @click="$router.go()"
          >Recarregar</q-btn>
        </div>
      </div>
    </transition>
    <q-inner-loading :showing="visible">
      <q-spinner-tail size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>
<style scoped>
div.frame{
  width: 100%;
  height: 100%;
}
div.frame iframe{
  width: 100%;
  height: auto;
}
</style>
<script>
export default {
  name: 'Almoco',
  data () {
    return {
      visible: false,
      showData: false,
      showErro: false,
      user: this.$firebase.auth().currentUser
    }
  },

  methods: {
    showLoading () {
      var that = this
      that.visible = true
      that.showData = false

      let interval = 0
      let tempo = 0
      interval = setInterval(function () {
        if (that.$el.querySelector('iframe').contentWindow.frames.length !== 0) {
          clearInterval(interval)
          that.visible = false
          that.showData = true

          that.$el.querySelector('iframe').style.height = '-webkit-fill-available'
          that.$el.querySelector('iframe').style.width = '-webkit-fill-available'

          window.localStorage.setItem('username', that.user ? that.user.displayName : '')
        } else {
          tempo = tempo + 0.5
        }
        if (tempo === 10) {
          clearInterval(interval)
          that.$q.notify({
            message: 'Problema de rede. Verifique sua conexão com a internet.',
            color: 'negative',
            position: 'center'
          })
          that.visible = false
          that.showData = true
          that.showErro = true
        }
      }, 500)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
