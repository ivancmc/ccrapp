<template>
  <q-page padding>
    <div class="frames">
      <iframe src="https://anchor.fm/ccr-salvador/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="blue-8" class="shadow-5" />
    </q-page-scroller>
  </q-page>
</template>
<style>
div.frames{
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
}
</style>
<script>
export default {
  // name: 'PageName',
}
</script>
