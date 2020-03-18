<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="column flex-center">
          {{$route.meta.title}}
        </q-toolbar-title>

        <q-btn flat round dense id="notifications_central">
          <q-icon name="notifications_active" />
        </q-btn>
        <q-btn flat round dense to="/login">
          <q-icon name="person" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"

      :width="220"
      :breakpoint="500"
    >
      <q-list v-for="(menuItem, chave) in menuList" :key="chave">
        <q-item tag="a" :to='menuItem.link' v-ripple exact>
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
       <q-separator />
      </q-list>
    </q-drawer>

    <!-- <q-footer elevated>
      <q-tabs
        align="justify"
        indicator-color="primary"
        v-model="tab"
      >
        <q-route-tab name="chat" icon="forum" to="/chat" />
        <q-route-tab name="home" icon="home" to="/" />
        <q-route-tab name="user" icon="person" to="/login" />
      </q-tabs>
    </q-footer> -->

    <q-page-container>
      <!-- Notificações -->
      <div class="elfsight-app-20e26ec9-4e8b-40a7-835e-843dde958158"></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style>
.q-toolbar__title {
  margin-right: -34px;
}
.eapp-popup-content-blocks-container-component {
    padding: 15px !important;
}
</style>
<script>
import { openURL } from 'quasar'

const menuList = [
  {
    icon: 'r_home',
    label: 'Início',
    link: '/'
  },
  {
    icon: 'r_account_balance',
    label: 'Local de culto',
    link: '/local'
  },
  {
    icon: 'r_home_work',
    label: 'Pequenos grupos',
    link: '/grupos'
  },
  {
    icon: 'r_event',
    label: 'Eventos',
    link: '/eventos'
  },
  {
    icon: 'r_restaurant',
    label: 'Almoço',
    link: '/almoco'
  },
  {
    icon: 'r_subscriptions',
    label: 'Vídeos',
    link: '/videos'
  },
  {
    icon: 'r_settings_voice',
    label: 'Podcast',
    link: '/podcast'
  },
  {
    icon: 'r_photo',
    label: 'Fotos',
    link: '/fotos'
  },
  {
    icon: 'r_group',
    label: 'Aconselhamento',
    link: '/aconselhamento'
  }
]

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      menuList,
      miniState: true
    }
  },
  methods: {
    openURL
  }
}
</script>
