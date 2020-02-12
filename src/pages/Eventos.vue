<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="showData">
        <div class="elfsight-app-316124ef-897a-4be0-9724-b9acb9c671bb event1" v-show="evt1_visivel"></div>
        <div class="elfsight-app-a36a56df-7d17-49ef-a2ba-6903628f473b event2" v-show="!evt1_visivel"></div>
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
  name: 'Eventos',
  data () {
    return {
      visible: false,
      showData: false,
      evt1_visivel: true
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
        if (this.$el.querySelector('div.event1').lastChild) {
          if (this.$el.querySelector('div.event1').lastChild.childElementCount === 0) {
            this.evt1_visivel = false
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
