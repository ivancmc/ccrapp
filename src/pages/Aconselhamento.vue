<template>
  <q-page>
    <q-pull-to-refresh @refresh="refresh">
      <div class="q-pa-md q-gutter-md row justify-center">
        <div
          class=""
          style="min-width: 342px"
          v-if="user && admin"
          >
          <q-card
            class="q-pa-md q-mb-lg"
            inline
            color="white"
          >
            <q-card-section class='text-center'>
              <div class="text-subtitle2">Agenda do Pastor</div>
            </q-card-section>

            <q-separator />
            <div>
              <q-form
                @submit="disponibilizar"
                @reset="limparForm1"
                class="q-gutter-sm q-pa-sm"
              >
                <q-input
                  ref="input_dia"
                  label='Data'
                  outlined
                  v-model="date"
                  lazy-rules
                  :rules="[val => !!val || 'Defina uma data.']"
                  mask="##/##/####">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date
                          title="Data"
                          v-model="date"
                          @input="() => {
                            $refs.qDateProxy.hide()
                            $refs.input_dia.blur()
                          }"
                          mask="DD/MM/YYYY"
                          minimal
                        />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-select
                    ref="select_hour"
                    outlined
                    v-model="hours"
                    multiple
                    :options="horarios"
                    label="Horários"
                    separator
                    lazy-rules
                    :rules="[val => val && val.length > 0 || 'Defina um horário.']"
                  >
                  <template v-slot:option="scope">
                    <q-item
                      v-bind="scope.itemProps"
                      v-on="scope.itemEvents"
                    >
                      <q-item-section side>
                        <q-checkbox v-model="hours" :val="scope.opt" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label v-html="scope.opt" ></q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
                <q-checkbox v-model="extra" label="Fila de espera" />
                <div>
                  <q-btn label="Disponibilizar" type="submit" color="primary"/>
                  <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </div>
            <br />
            <div style="width: 100%;">
              <q-markup-table dense separator="cell" v-if="agenda">
                <thead>
                  <tr class="bg-grey text-white">
                    <th class="text-center text-black">Data</th>
                    <th class="text-center text-black">Horários</th>
                    <th class="text-center text-black">Extras</th>
                    <th class="text-center text-black">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="disponib of agenda" :key="disponib['.key']">
                    <td class="text-center">{{ dia_mes_ano(disponib.data) }}</td>
                    <td class="text-center">{{ disponib.horarios }}</td>
                    <td class="text-center">{{ disponib.extra ? "Sim" : "Não" }}</td>
                    <td class="text-center"><q-btn dense @click="remove_disponib(disponib.data)" flat icon="delete_forever" /></td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
          </q-card>
        </div>
        <div class="" style="min-width: 342px">
          <q-card
            class="q-pa-md q-mb-lg"
            inline
            color="white"
          >
            <q-card-section class='text-center'>
              <div class="text-subtitle2">Agendamento</div>
            </q-card-section>

            <q-separator />
            <div>
              <q-form
                @submit="agendar"
                @reset="limparForm2"
                class="q-gutter-sm q-pa-sm"
              >
                <q-input
                v-model="nome"
                ref="input_nome"
                label="Nome *"
                :rules="[val => val && val.length > 0 || 'Por favor digite seu nome']"
                lazy-rules
                clearable
                />
                <q-select
                    outlined
                    label="Data"
                    ref="input_data"
                    v-model="data"
                    :options="datas_disponiveis"
                    separator
                    @input="() => {
                      mostra_horarios(data)
                      $refs.input_data.blur()
                    }"
                    :rules="[val => !!val || 'Defina uma data.']"
                    lazy-rules
                  />
                <q-select
                    outlined
                    label="Horário"
                    ref="input_hora"
                    v-model="hora"
                    :options="horarios_disponiveis"
                    separator
                    :rules="[val => !!val || 'Defina um horário.']"
                    lazy-rules
                    v-if="this.hora_disponivel == true"
                  />
                <div>
                  <q-btn label="Agendar" type="submit" color="primary"/>
                  <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </div>
            <br />
            <div style="width: 100%;">
              <q-markup-table dense separator="cell" v-if="aconselhamentos_marcados">
                <thead>
                  <tr class="bg-grey text-white">
                    <th class="text-center text-black">Data</th>
                    <th class="text-center text-black">Horário</th>
                    <th class="text-center text-black">Nome</th>
                    <th class="text-center text-black" v-if="uid">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="agendado of aconselhamentos_marcados" :key="agendado['.key']">
                    <td class="text-center">{{ dia_mes_ano(agendado.data) }}</td>
                    <td class="text-center">{{ agendado.horario }}</td>
                    <td class="text-center">{{ agendado.nome }}</td>
                    <td class="text-center" v-if="uid">
                      <q-btn dense @click="desmarcar(agendado.order)" flat icon="delete_forever" v-if="admin || (uid === agendado.uid)"/>
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
            <div style="width: 100%;" v-if="admin">
              <q-toggle
                v-model="mostrar_historico"
                label="Mostrar histórico"
              />
              <q-markup-table dense separator="cell" v-show="mostrar_historico" v-if="historico">
                <thead>
                  <tr class="bg-grey text-white">
                    <th class="text-center text-black">Data</th>
                    <th class="text-center text-black">Horário</th>
                    <th class="text-center text-black">Nome</th>
                    <th class="text-center text-black">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="agendado of historico" :key="agendado['.key']">
                    <td class="text-center">{{ dia_mes_ano(agendado.data) }}</td>
                    <td class="text-center">{{ agendado.horario }}</td>
                    <td class="text-center">{{ agendado.nome }}</td>
                    <td class="text-center"><q-btn dense @click="desmarcar(agendado.order)" flat icon="delete_forever"/></td>
                  </tr>
                </tbody>
              </q-markup-table>
              <p v-else v-show="mostrar_historico">Não há histórico.</p>
            </div>
          </q-card>
        </div>

        <div
          style="min-width: 342px; margin-bottom: 24px;"
          v-if="aconselhamentos_extras">
          <q-card
            class="q-pa-md q-mb-lg"
            inline
            color="white"
          >
            <q-card-section class='text-center'>
              <div class="text-subtitle2">Lista de espera</div>
            </q-card-section>

            <q-separator />
            <div style="width: 100%;">
              <q-markup-table dense separator="cell">
                <thead>
                  <tr class="bg-grey text-white">
                    <th class="text-center text-black">Data</th>
                    <th class="text-center text-black">Ordem</th>
                    <th class="text-center text-black">Nome</th>
                    <th class="text-center text-black" v-if="uid">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="agendado of aconselhamentos_extras" :key="agendado['.key']">
                    <td class="text-center">{{ dia_mes_ano(agendado.data) }}</td>
                    <td class="text-center">{{ agendado.ordem_espera }}</td>
                    <td class="text-center">{{ agendado.nome }}</td>
                    <td class="text-center" v-if="uid">
                      <q-btn dense @click="sairDaFila(agendado.order)" flat icon="delete_forever" v-if="admin || (uid === agendado.uid)" />
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
          </q-card>
        </div>
      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[5, 5]">
        <q-btn fab icon="keyboard_arrow_up" color="blue-8" class="shadow-5" />
      </q-page-scroller>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>

export default {
  name: 'Aconselhamento',
  data () {
    return {
      user: this.$firebase.auth().currentUser,
      perfil: null,
      admin: false,
      uid: '',
      date: '',
      hours: [13, 14, 15, 16],
      horarios: [13, 14, 15, 16],
      extra: false,
      agenda: null,
      nome: '',
      data: '',
      hora: '',
      datas_disponiveis: [],
      horarios_disponiveis: [],
      hora_disponivel: true,
      aconselhamentos_marcados: null,
      aconselhamentos_extras: null,
      hoje: this.ano_mes_dia(new Date().toLocaleString('pt-BR', { timeZone: 'America/Bahia' }).slice(0, 10)),
      mostrar_historico: false,
      historico: null
    }
  },

  created () {
    if (this.user) {
      this.$db.ref('perfis').orderByChild('id').equalTo(this.user.uid).once('child_added', (snapshot) => {
        this.perfil = snapshot.val()
        this.admin = snapshot.val().admin
      })
      this.nome = this.user.displayName
      this.uid = this.user.uid
    }

    let _datas = []

    this.$db.ref('aconselhamentos_agenda').orderByPriority().startAt(this.hoje).on('value', (snapshot) => {
      this.agenda = snapshot.val()
      // Atualiza o select de datas disponíveis
      let that = this
      snapshot.forEach(function (item) {
        let _data = that.dia_mes_ano(item.val().data)
        if (!_datas.includes(_data)) {
          _datas.push(_data)
        }
      })
    })
    // Isso eh necessario pra funcionar direito o select de datas disponiveis
    this.$db.ref('aconselhamentos_agenda').orderByPriority().on('value', (snapshot) => {})
    // Atualiza o select de datas disponíveis
    this.datas_disponiveis = _datas
    if (this.datas_disponiveis.length === 0) {
      setTimeout(() => {
        this.$q.notify({
          message: 'Ainda não há datas disponíveis.',
          color: 'warning',
          position: 'center'
        })
      }, 1000)
    }

    this.$db.ref('aconselhamentos_marcados').orderByPriority().startAt(this.hoje).on('value', (snapshot) => {
      this.aconselhamentos_marcados = snapshot.val()
    })
    // Isso eh necessario pra funcionar direito o select de datas disponiveis
    this.$db.ref('aconselhamentos_marcados').orderByPriority().on('value', (snapshot) => {})

    // Mostra histórico para o admin
    let ontem = new Date()
    ontem.setDate(ontem.getDate() - 1)
    ontem = this.ano_mes_dia(ontem.toLocaleString('pt-BR', { timeZone: 'America/Bahia' }).slice(0, 10))
    this.$db.ref('aconselhamentos_marcados').orderByPriority().endAt(ontem).on('value', (snapshot) => {
      this.historico = snapshot.val()
    })

    this.$db.ref('aconselhamentos_extras').orderByPriority().startAt(this.hoje).on('value', (snapshot) => {
      this.aconselhamentos_extras = snapshot.val()
    })
    // Isso eh necessario pra funcionar direito
    this.$db.ref('aconselhamentos_extras').orderByPriority().on('value', (snapshot) => {})
  },

  methods: {
    ano_mes_dia (_date) {
      var dataSplit = _date.split('/')
      var dateConverted = dataSplit[2] + dataSplit[1] + dataSplit[0]
      return dateConverted
    },

    dia_mes_ano (_date) {
      if (_date) {
        var dia = _date.slice(-2)
        var mes = _date.slice(4, -2)
        var ano = _date.slice(0, 4)
        var dateConverted = dia + '/' + mes + '/' + ano
        return dateConverted
      }
    },

    disponibilizar () {
      this.$refs.input_dia.validate()
      var _date = this.ano_mes_dia(this.date)
      let compareData = _date.localeCompare(this.hoje)
      if (this.$refs.input_dia.hasError) {
        this.formHasError = true
      } else if (compareData < 0) {
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          icon: 'warning',
          position: 'bottom',
          message: 'Data anterior à data de hoje!'
        })
      } else {
        this.$db.ref('aconselhamentos_agenda').orderByChild('data').equalTo(_date).once('value', (snapshot) => {
          if (snapshot.exists()) {
            this.$q.notify({
              color: 'negative',
              textColor: 'white',
              icon: 'warning',
              position: 'bottom',
              message: 'Data já disponível!'
            })
          } else {
            let _newdate = this.$db.ref('aconselhamentos_agenda').push()
            _newdate.setWithPriority({
              data: _date,
              horarios: this.hours.sort(),
              extra: this.extra
            }, _date)
            this.$q.notify({
              color: 'positive',
              textColor: 'white',
              icon: 'event_available',
              position: 'bottom',
              message: 'Aconselhamento disponibilizado!'
            })
            this.limparForm1()
          }
        })
      }
    },

    limparForm1 () {
      this.date = ''
      this.hours = [13, 14, 15, 16]
      this.extra = false
      this.$refs.input_dia.resetValidation()
    },

    remove_disponib (data) {
      this.$db.ref('aconselhamentos_agenda').orderByChild('data').equalTo(data).once('child_added', (snapshot) => {
        this.$db.ref('aconselhamentos_agenda').child(snapshot.key).remove()
      })
      let _datas = []
      let _data = this.dia_mes_ano(data)
      this.datas_disponiveis.forEach(function (item) {
        if (item !== _data) {
          _datas.push(item)
        }
      })
      this.datas_disponiveis = _datas
      this.$q.notify({
        color: 'positive',
        textColor: 'white',
        icon: 'event_busy',
        position: 'bottom',
        message: 'Aconselhamento excluído!'
      })
    },

    mostra_horarios (dataSelecionada) {
      if (dataSelecionada) {
        this.hora_disponivel = true
        let _data = this.ano_mes_dia(dataSelecionada)
        this.hora = ''
        let temExtra = false
        let horariosAgenda = []
        let horariosAgendados = []
        this.horarios_disponiveis = []
        this.$db.ref('aconselhamentos_agenda').orderByChild('data').equalTo(_data).on('child_added', (snapshot) => {
          horariosAgenda = snapshot.val().horarios
          temExtra = snapshot.val().extra
        })
        this.$db.ref('aconselhamentos_marcados').orderByChild('data').equalTo(_data).on('child_added', (snapshot) => {
          horariosAgendados.push(snapshot.val().horario)
        })
        this.horarios_disponiveis = horariosAgenda.filter(x => {
          return JSON.stringify(horariosAgendados).indexOf(JSON.stringify(x)) < 0
        })
        if (this.horarios_disponiveis.length === 0) {
          this.hora_disponivel = false
          if (temExtra) {
            this.$q.notify({
              color: 'warning',
              textColor: 'white',
              icon: 'warning',
              position: 'bottom',
              message: 'Sem horário disponível para esta data. Se desejar entrar na fila de espera, prossiga com o agendamento..',
              multiLine: true,
              timeout: 10000,
              actions: [{ icon: 'close', color: 'white' }]
            })
          } else {
            this.$q.notify({
              color: 'negative',
              textColor: 'white',
              icon: 'warning',
              position: 'bottom',
              message: 'Sem horário disponível para esta data. Infelizmente neste dia não haverá fila de espera. Por favor escolha outra data.',
              multiLine: true,
              timeout: 10000,
              actions: [{ icon: 'close', color: 'white' }]
            })
            this.data = ''
          }
        }
      }
    },

    agendar () {
      if (this.admin) {
        this.limparForm1()
      }
      var _data = this.ano_mes_dia(this.data)
      var id = this.uid
      var name = this.nome
      var _hora = this.hora
      if (this.hora_disponivel) {
        // Isso eh necessario pra funcionar direito
        this.$db.ref('aconselhamentos_marcados').orderByChild('data').equalTo(_data).once('value', (snapshot) => {})
        let order = _data + _hora
        let _newdate = this.$db.ref('aconselhamentos_marcados').push()
        _newdate.setWithPriority({
          uid: id,
          nome: name,
          data: _data,
          horario: _hora,
          order: order
        }, order)
      } else {
        let ordemEspera = 1
        let timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Bahia' }).slice(-8).replace(/:/g, '')
        let order = this.hoje + timestamp
        let _newdate = this.$db.ref('aconselhamentos_extras').push()
        this.$db.ref('aconselhamentos_extras').orderByChild('data').limitToLast(1).equalTo(_data).on('child_added', (snapshot) => {
          if (snapshot.exists()) {
            ordemEspera = snapshot.val().ordem_espera + 1
          }
        })
        _newdate.setWithPriority({
          uid: id,
          nome: name,
          data: _data,
          ordem_espera: ordemEspera,
          order: order
        }, order)
      }
      this.$q.notify({
        color: 'positive',
        textColor: 'white',
        icon: 'event_available',
        position: 'bottom',
        message: 'Aconselhamento agendado!'
      })
      this.limparForm2()
    },

    limparForm2 () {
      if (this.user) {
        this.nome = this.user.displayName
      } else {
        this.nome = ''
      }
      this.data = ''
      this.hora = ''
      this.mostra_horarios(this.data)
      this.hora_disponivel = true
      this.$refs.input_nome.resetValidation()
      this.$refs.input_data.resetValidation()
      if (this.$refs.input_hora) {
        this.$refs.input_hora.resetValidation()
      }
    },

    desmarcar (order) {
      this.$db.ref('aconselhamentos_marcados').orderByChild('order').equalTo(order).once('child_added', (snapshot) => {
        this.$db.ref('aconselhamentos_marcados').child(snapshot.key).remove()
      })
    },

    sairDaFila (order) {
      var _data = ''
      var _ordemEspera = 1
      var itens = []
      this.$db.ref('aconselhamentos_extras').orderByChild('order').equalTo(order).once('child_added', (snapshot) => {
        _data = snapshot.val().data
        this.$db.ref('aconselhamentos_extras').child(snapshot.key).remove()
      })
      this.$db.ref('aconselhamentos_extras').orderByChild('data').equalTo(_data).on('child_added', (snapshot) => {
        itens.push(snapshot.key)
      })
      let that = this
      itens.forEach(function (item) {
        that.$db.ref('aconselhamentos_extras').child(item).update({ ordem_espera: _ordemEspera })
        _ordemEspera++
      })
    },

    refresh (done) {
      window.location.reload(true)
      done()
    }
  }
}
</script>
