<template>
  <q-page class="q-pa-sm flex-center">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="showData">
        <!-- Banner principal -->
        <div class="elfsight-app-3b74b192-3f52-41ae-9ae1-5563df4d05fc banner1" v-show="bn1_visivel"></div>
        <div class="elfsight-app-7dab22a6-3b95-4750-82a2-25a5336e5cd0 banner2" v-show="!bn1_visivel"></div>
        <!-- Chat -->
        <div class="elfsight-app-ea37ab68-080d-4dd2-9484-9dcb8aa3890e whatsapp1" v-show="wp1_visivel"></div>
        <div class="elfsight-app-4c2052b2-06a5-49c7-b7f4-7e9840e98de1 whatsapp2" v-show="!wp1_visivel"></div>
        <!-- Se nada carregar -->
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
  name: 'Index',
  data () {
    return {
      visible: false,
      showData: false,
      showErro: false,
      bn1_visivel: true,
      wp1_visivel: true
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

          if (that.$el.querySelector('div.banner1').lastChild) {
            if (that.$el.querySelector('div.banner1').lastChild.childElementCount === 0) {
              that.bn1_visivel = false
            }
          }
          if (that.$el.querySelector('div.whatsapp1').lastChild) {
            if (that.$el.querySelector('div.whatsapp1').lastChild.childElementCount === 0) {
              that.wp1_visivel = false
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
