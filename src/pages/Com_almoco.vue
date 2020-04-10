<template>
  <div>
    <div class="elfsight-app-4bbbce4a-4164-49c6-a426-c155db9e8006 almoco1" v-show="alm1_visivel"></div>
    <div class="elfsight-app-d91764cc-cef1-4bcc-9651-b069d12ea093 almoco2" v-show="!alm1_visivel"></div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'Com_almoco',
  data () {
    return {
      alm1_visivel: true,
      desc: [],
      precos: [],
      radios: [],
      regex: ''
    }
  },

  methods: {
    showLoading () {
      var that = this

      let interval = 0
      let tempo = 0
      interval = setInterval(function () {
        if (that.$el.querySelector('[class^="elfsight"]').childElementCount !== 0) {
          clearInterval(interval)

          if (that.$el.querySelector('div.almoco1').firstChild) {
            if (that.$el.querySelector('div.almoco1').firstChild.childElementCount === 0) {
              that.alm1_visivel = false
            }
          }
          if (that.alm1_visivel) {
            that.$el.querySelector('div.almoco2').remove()
          } else {
            that.$el.querySelector('div.almoco1').remove()
          }
          if (that.$el.querySelector("a[href*='elfsight']")) {
            that.$el.querySelector("a[href*='elfsight']").style.display = 'none'
          }

          if (that.$el.querySelector('[placeholder^="Nome"]') && (window.localStorage.getItem('username'))) {
            that.$el.querySelector('[placeholder^="Nome"]').setAttribute('value', window.localStorage.getItem('username'))
          }

          that.desc = that.$el.querySelectorAll('[class=eapps-form-element-description]')

          for (var i in that.desc) {
            if (that.desc[i].innerText) {
              that.precos[i] = that.desc[i].innerText.match(/\d+/)[0]
            }
          }

          window.localStorage.setItem('precos', JSON.stringify(that.precos))

          if (that.precos) {
            for (i = 1; i <= that.precos.length; i++) {
              that.regex = '[name$="-' + i + '"]'
              if (that.$el.querySelectorAll(that.regex).length !== 0) {
                that.radios[i] = that.$el.querySelectorAll(that.regex)
              }
            }

            for (i = 1; i <= that.precos.length; i++) {
              for (var j = 0; j < that.radios[i].length; j++) {
                that.radios[i][j].setAttribute('onclick', 'total(' + that.precos.length + ')')
                that.radios[i][j].checked = false
              }
            }
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
        }
      }, 500)
    }
  },

  mounted: function () {
    this.showLoading()
  }
}
</script>
