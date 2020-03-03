<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="showData">
        <div class="elfsight-app-602a2528-884e-4ad1-9830-9cd645660c16 podcast1" v-show="pdc1_visivel"></div>
        <div class="elfsight-app-19004bf5-054f-419d-8f7f-fe94bd8afaff podcast2" v-show="!pdc1_visivel"></div>
      </div>
    </transition>
    <q-inner-loading :showing="visible">
      <q-spinner-tail size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'podcast',
  data () {
    return {
      visible: false,
      showData: false,
      pdc1_visivel: true
    }
  },

  methods: {
    showLoading () {
      this.visible = true
      this.showData = false
      setTimeout(() => {
        this.visible = false
        this.showData = true
      }, 2000)
      setTimeout(() => {
        if (this.$el.querySelector('div.podcast1').lastChild) {
          if (this.$el.querySelector('div.podcast1').lastChild.childElementCount === 0) {
            this.pdc1_visivel = false
          }
        }
      }, 1000)
      setTimeout(() => {
        if (this.$el.querySelector("a[href*='elfsight']")) {
          this.$el.querySelector("a[href*='elfsight']").style.display = 'none'
        } else {
          this.$q.notify({
            message: 'Problema de rede. Verifique sua conexão com a internet.',
            color: 'negative',
            position: 'center'
          })
        }
      }, 7000)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
