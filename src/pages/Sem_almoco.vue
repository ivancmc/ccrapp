<template>
  <div class="cardapio fixed-center text-center">
    <img src="~assets/cardapio_indisponivel.png">
  </div>
</template>
<style>
div.cardapio{
  /*margin: 15px 0;*/
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 0;
  /*padding-bottom: 56.25%;*/
}
div.cardapio img{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
<script>
export default {
  name: 'SemAlmoco'
}
</script>
