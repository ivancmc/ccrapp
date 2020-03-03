<template>
  <q-page class="q-pa-sm flex-center">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="showData">
        <div class="frame">
          <iframe id="frame_almoco" src="https://tiny.cc/AlmocoCCRSSA" width="100%" height="auto" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
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
      }, 3000)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
