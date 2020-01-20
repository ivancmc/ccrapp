<template>
  <q-page padding class='text-center'>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
    <div v-show="showData">
      <!-- <span class="text-h6">Mais recentes</span>
      <div class="frames">
        <iframe class="latestVideoEmbed" cid="UCYE8vJ0W24fwLm4ai3HQygw" width="560" height="315" frameborder="0" allowfullscreen>
        </iframe>
      </div>
      <div class="frames">
        <iframe class="latestVideoEmbed" vnum='1' cid="UCYE8vJ0W24fwLm4ai3HQygw" width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="frames">
        <iframe class="latestVideoEmbed" vnum='2' cid="UCYE8vJ0W24fwLm4ai3HQygw" width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </div> -->
      <ul class="juicer-feed" data-feed-id="ivcardoso" data-filter="youtube" data-after="updateFilters()"></ul>
      <!-- <div class="q-pa-md">
        <q-btn type="a" href="https://www.youtube.com/channel/UCYE8vJ0W24fwLm4ai3HQygw" target="_blank" label="Nosso canal" push color="blue-8" />
      </div> -->
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
/*div.frames{
  margin: 15px 0;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
div.frames iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}*/
</style>
<script>
import jQuery from 'jquery'
let $ = jQuery

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
    },

    loadVideo (iframe) {
      var reqURL = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=')
      $.getJSON(reqURL + iframe.getAttribute('cid'), function (data) {
        var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0)
        var link = data.items[videoNumber].link
        var id = link.substr(link.indexOf('=') + 1)
        iframe.setAttribute('src', 'https://youtube.com/embed/' + id + '?rel=0')
      })
    }
  },

  mounted: function () {
    this.showLoading()
    // var iframes = document.getElementsByClassName('latestVideoEmbed')
    // for (var i = 0, len = iframes.length; i < len; i++) {
    //   this.loadVideo(iframes[i])
    // }
  }
}
</script>
