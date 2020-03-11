<template>
  <q-dialog persistent v-model="alert">
    <q-card>
      <q-card-section align="center" class="bg-positive text-white">
        <div class="text-h6">Reserva realizada!</div>
      </q-card-section>

      <q-card-section class="">
        Te esperamos domingo!<br/><br/>
        Se desejar fazer alguma alteração entre em contato com Vitória Cardoso.
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Estarei lá!" color="primary" v-close-popup to="/com_almoco" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<style>
</style>
<script>
export default {
  name: 'Almoco_Ok',
  data () {
    return {
      alert: true
    }
  }
}
</script>
