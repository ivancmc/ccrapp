<template>
  <q-page padding class="text-center">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div>
        <ul class="juicer-feed" data-feed-id="ivcardoso" data-filter="instagram" data-after="updateFilters()"></ul>
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
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="blue-8" class="shadow-5" />
    </q-page-scroller>
  </q-page>
</template>
<style>
.j-loading {
  border-color: white;
}

.j-loading:before {
  background-color: white;
}

.juicer-feed.modern li.feed-item{
  border-width: 1px !important;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
</style>
<script>
export default {
  name: 'Fotos',
  data () {
    return {
      visible: false,
      showErro: false
    }
  },

  methods: {
    showLoading () {
      var that = this
      that.visible = true

      let interval = 0
      let tempo = 0
      interval = setInterval(function () {
        if (that.$el.querySelector('div.j-poster')) {
          clearInterval(interval)
          that.visible = false
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
