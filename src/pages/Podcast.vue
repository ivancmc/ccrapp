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
</style>
<script>
export default {
  name: 'podcast',
  data () {
    return {
      visible: false,
      showData: false,
      showErro: false,
      pdc1_visivel: true
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
        if (that.$el.querySelector('[class^="elfsight"]').childElementCount !== 0) {
          clearInterval(interval)
          that.visible = false
          that.showData = true

          if (that.$el.querySelector('div.podcast1').lastChild) {
            if (that.$el.querySelector('div.podcast1').lastChild.childElementCount === 0) {
              that.pdc1_visivel = false
            }
          }
          if (that.$el.querySelector("a[href*='elfsight']")) {
            that.$el.querySelector("a[href*='elfsight']").style.display = 'none'
          }
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
