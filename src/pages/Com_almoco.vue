<template>
  <div v-show="showData">
    <div class="elfsight-app-4bbbce4a-4164-49c6-a426-c155db9e8006 almoco1" v-show="alm1_visivel"></div>
    <div class="almoco2" v-show="!alm1_visivel"></div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Com_almoco',
  data () {
    return {
      visible: false,
      showData: false,
      alm1_visivel: true,
      desc: [],
      precos: [],
      radios: [],
      regex: ''
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
        if (this.$el.querySelector('div.almoco1').lastChild) {
          if (this.$el.querySelector('div.almoco1').lastChild.childElementCount === 0) {
            this.alm1_visivel = false
          }
        }
      }, 1000)
      setTimeout(() => {
        if (this.$el.querySelector("a[href*='elfsight']")) {
          this.$el.querySelector("a[href*='elfsight']").style.display = 'none'

          this.desc = this.$el.querySelectorAll('[class=eapps-form-element-description]')

          for (var i in this.desc) {
            if (this.desc[i].innerText) {
              this.precos[i] = this.desc[i].innerText.match(/\d+/)[0]
            }
          }

          window.localStorage.setItem('precos', JSON.stringify(this.precos))

          for (i = 1; i <= this.precos.length; i++) {
            this.regex = '[name$="-' + i + '"]'
            if (this.$el.querySelectorAll(this.regex).length !== 0) {
              this.radios[i] = this.$el.querySelectorAll(this.regex)
            }
          }

          for (i = 1; i <= this.precos.length; i++) {
            for (var j = 0; j < this.radios[i].length; j++) {
              this.radios[i][j].setAttribute('onclick', 'total(' + this.precos.length + ')')
            }
          }
        } else {
          this.$q.notify({
            message: 'Problema de rede. Verifique sua conexão com a internet.',
            color: 'negative',
            position: 'center'
          })
        }
      }, 3500)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
