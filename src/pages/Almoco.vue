<template>
  <q-page class="q-pa-sm flex-center">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="showData">
        <div class="frame">
          <iframe id="frame_almoco" src="https://tiny.cc/ReservarAlmoco" width="100%" height="auto" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
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
      showData: false
    }
  },

  methods: {
    showLoading () {
      this.visible = true
      this.showData = false
      setTimeout(() => {
        this.visible = false
        this.showData = true
      }, 2500)
      setTimeout(() => {
        this.$el.querySelector('iframe').style.height = '-webkit-fill-available'
        this.$el.querySelector('iframe').style.width = '-webkit-fill-available'
        // this.$el.querySelector('.page-footer').style.display = 'none'
        // this.$el.querySelector('.intro-avatar')[0].style.display = 'none'
        // this.$el.getElementsByClassName('intro-avatar').style.display = 'none'
        // this.$el.querySelector('iframe').document.getElementsByClassName('intro-avatar').style.display = 'none'
        // if (this.$el.querySelector("a[href*='elfsight']")) {
        //   this.$el.querySelector("a[href*='elfsight']").style.display = 'none'
        // } else {
        //   this.$q.notify({
        //     message: 'Problema de rede. Verifique sua conexão com a internet.',
        //     color: 'negative',
        //     position: 'center'
        //   })
        // }
      }, 3000)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
