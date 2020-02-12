<template>
  <q-page padding class='text-center'>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
    <div v-show="showData">
      <ul class="juicer-feed" data-feed-id="ivcardoso" data-filter="youtube" data-after="updateFilters()"></ul>
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
  border-color: #1976d2;
}

.j-loading:before {
  background-color: #4fc3f7;
}
</style>
<script>
export default {
  name: 'Videos',
  data () {
    return {
      visible: false,
      showData: true,
      json: null
    }
  },

  methods: {
    showLoading () {
      // this.visible = true
      // this.showData = false
      // setTimeout(() => {
      //   this.visible = false
      //   this.showData = true
      // }, 1000)
      setTimeout(() => {
        if (!(this.$el.querySelector('div.j-poster'))) {
          this.$q.notify({
            message: 'Problema de rede. Verifique sua conexão com a internet.',
            color: 'negative',
            position: 'center'
          })
        }
      }, 10000)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
