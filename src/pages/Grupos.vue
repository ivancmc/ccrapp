<template>
  <q-page padding>
    <q-pull-to-refresh @refresh="refresh" icon="autorenew">
      <div class="q-pa-xs">
        <q-list bordered>
          <q-expansion-item group="groups" label="Segunda-feira" header-class="bg-light-blue-4 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">GRUPO CAMINHO DAS ÁRVORES</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="my-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9367034692383!2d-38.45854613573!3d-12.98803903997868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b13f44f1a23%3A0x2a874f6a881b0c8b!2sCondom%C3%ADnio%20de%20Constru%C3%A7%C3%A3o%20Residencial%20Cidade%20de%20Hannove!5e0!3m2!1spt-BR!2sbr!4v1569329987049!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="room" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>ENDEREÇO</q-item-label>
                      <q-item-label>Rua do Benjoim, nº 30, Edf. Cidade de Hannover, Apto. 402</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>COORDENAÇÃO</q-item-label>
                      <q-item-label>Beto e Fabi</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="access_time" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>HORÁRIO</q-item-label>
                      <q-item-label>20H</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="groups" label="Terça-feira" header-class="bg-blue-8 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">NÃO TEM</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="groups" label="Quarta-feira" header-class="bg-light-blue-4 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">GRUPO LOTEAMENTO AQUARIUS</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="my-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.7315599287986!2d-38.45396041870117!3d-12.989013671875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b121bc1c693%3A0x21b1f7abeffc5eab!2sAlameda%20dos%20Sombreiros%2C%20157%20-%20Pituba%2C%20Salvador%20-%20BA%2C%2041820-420!5e0!3m2!1spt-BR!2sbr!4v1569411928680!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="room" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>ENDEREÇO</q-item-label>
                      <q-item-label>Alameda dos Sombreiros, nº 157, Edf. Saint Martin, Apto. 902</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>COORDENAÇÃO</q-item-label>
                      <q-item-label>Júnior e Gabi</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="access_time" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>HORÁRIO</q-item-label>
                      <q-item-label>20H</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="groups" label="Quinta-feira" header-class="bg-blue-8 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">GRUPO PIATÃ</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="my-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.34638850687!2d-38.389115485795664!3d-12.949672862876227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71619e3d9423331%3A0x3e8ee4d0fe6a3cb8!2sCondominio%20Veredas%20Piata!5e0!3m2!1spt-BR!2sbr!4v1569184633166!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="room" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>ENDEREÇO</q-item-label>
                      <q-item-label>Av. Orlando Gomes, Cond. Veredas Piatã, Casa 125, Rua dos Flamingos, Piatã. Referência: Ao lado do clube Costa Verde</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>COORDENAÇÃO</q-item-label>
                      <q-item-label>Marcelo e Lia</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="access_time" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>HORÁRIO</q-item-label>
                      <q-item-label>20H</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="groups" label="Sexta-feira" header-class="bg-light-blue-4 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">GRUPO ARMAÇÃO</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="my-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.283997866478!2d-38.43648029729584!3d-12.98329801949046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161baedd2510df%3A0xb5e0531726e16b9f!2sComunidade%20Crist%C3%A3%20Renovada!5e0!3m2!1spt-BR!2sbr!4v1569177542500!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </q-item>
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
                      <q-icon color="grey" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>COORDENAÇÃO</q-item-label>
                      <q-item-label>Pedro e Érica</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="access_time" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>HORÁRIO</q-item-label>
                      <q-item-label>19:30H</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">GRUPO ESTRADA DO COCO</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="my-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1033879063734!2d-38.33645908579637!3d-12.901073061890342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7163e1061d1be2d%3A0xd947c70250a449a2!2sSupremo%20Family%20Club!5e0!3m2!1spt-BR!2sbr!4v1569332723759!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="room" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>ENDEREÇO</q-item-label>
                      <q-item-label>Av. Santos Dumont, nº 1893, Cond. Supremo Family Club, Torre Primor, Apto. 502, Lauro de Freitas</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>COORDENAÇÃO</q-item-label>
                      <q-item-label>Filipe e Mel, Patric e Bia</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="access_time" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>HORÁRIO</q-item-label>
                      <q-item-label>20H</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="groups" label="Sábado" header-class="bg-blue-8 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">NÃO TEM</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="groups" label="Domingo" header-class="bg-light-blue-4 text-white" expand-icon-class="text-white">
            <q-card>
              <q-card-section class="my-card">
                <q-list separator>
                  <q-item>
                    <q-item-section>
                      <q-item-label header overline style="text-align: center">GRUPO FEIRA</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="my-card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0904126090372!2d-38.91743928580715!3d-12.24215724889768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439f01269925b%3A0x38066ce42c559e8a!2sGran%20Ville%20Residence!5e0!3m2!1spt-BR!2sbr!4v1572045243120!5m2!1spt-BR!2sbr" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="room" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>ENDEREÇO</q-item-label>
                      <q-item-label>Travessa Chácara Mirineu - Bairro Sim, Cond. Gran Ville Residence, Casa 78, Feira de Santana - BA</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="people" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>COORDENAÇÃO</q-item-label>
                      <q-item-label>Pr. Samuel</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="grey" name="access_time" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label overline>HORÁRIO</q-item-label>
                      <q-item-label>19H</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="blue-8" class="shadow-5" />
      </q-page-scroller>
    </q-pull-to-refresh>
  </q-page>
</template>
<style scoped>
.my-card{
  padding: 0;
}
</style>
<script>
export default {
  name: 'grupos',
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
