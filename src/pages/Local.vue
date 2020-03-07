<template>
  <q-page padding class="q-pa-md row justify-center">
    <q-pull-to-refresh @refresh="refresh">
      <q-card bordered class="my-card">
        <div class="row items-center no-wrap">
          <!-- <img src="~assets/fachada.jpg" style="width:100%"> -->
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.283997866478!2d-38.43648029729584!3d-12.98329801949046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161baedd2510df%3A0xb5e0531726e16b9f!2sComunidade%20Crist%C3%A3%20Renovada!5e0!3m2!1spt-BR!2sbr!4v1569177542500!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <q-list bordered separator>
          <q-item>
            <q-item-section avatar>
              <q-icon color="grey" name="room" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>ENDEREÇO</q-item-label>
              <q-item-label>R. Antônio da Silva Coelho, 632 - Jardim - Armação, Salvador - BA, 41750-040</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="grey" name="phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>TELEFONE</q-item-label>
              <q-item-label><a href="tel:33700576" style="text-decoration: none; color: inherit;">(71) 3370-0576</a></q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="grey" name="mail" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>E-MAIL</q-item-label>
              <q-item-label><a href="mailto:ccrsalvador@hotmail.com" style="text-decoration: none; color: inherit;">ccrsalvador@hotmail.com</a></q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="grey" name="access_time" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>CULTO AOS DOMINGOS</q-item-label>
              <q-item-label>Escola Bíblica às 09h</q-item-label>
              <q-item-label>Culto às 10h</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-pull-to-refresh>
  </q-page>
</template>
<style scoped>
.my-card{
  width: '100%';
  max-width: 700px;
}
</style>
<script>
export default {
  name: 'Local',
  data () {
    return {
    }
  },

  methods: {
    refresh (done) {
      window.location.reload(true)
      done()
    }
  }
}
</script>
