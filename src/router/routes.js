
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          title: 'CCR App'
        }
      }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('pages/user/Login.vue'),
        meta: {
          title: 'Acesso'
        }
      },
      {
        path: '/reset_pwd',
        component: () => import('pages/user/ResetPwd.vue'),
        meta: {
          title: 'Nova senha'
        }
      },
      {
        path: '/profile',
        component: () => import('pages/user/Profile.vue'),
        meta: {
          title: 'Perfil',
          authRequired: true
        }
      },
      {
        path: '/users',
        component: () => import('pages/user/Users.vue'),
        meta: {
          title: 'Usuários',
          authRequired: true
        }
      }
    ]
  },
  {
    path: '/local',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Local.vue'),
        meta: {
          title: 'Local'
        }
      }
    ]
  },
  {
    path: '/sem_almoco',
    component: () => import('pages/Sem_almoco.vue')
  },
  {
    path: '/groups',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Groups.vue'),
        meta: {
          title: 'Pequenos grupos'
        }
      }
    ]
  },
  {
    path: '/videos',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Videos.vue'),
        meta: {
          title: 'Vídeos'
        }
      }
    ]
  },
  {
    path: '/photos',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Photos.vue'),
        meta: {
          title: 'Fotos'
        }
      }
    ]
  },
  {
    path: '/aconselhamento',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Aconselhamento.vue'),
        meta: {
          title: 'Aconselhamento'
        }
      }
    ]
  },
  {
    path: '/almoco',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Almoco.vue'),
        meta: {
          title: 'Almoço'
        }
      }
    ]
  },
  {
    path: '/eventos',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'eventos',
        component: () => import('pages/Eventos.vue'),
        meta: {
          title: 'Eventos'
        }
      }
    ]
  },
  {
    path: '/podcast',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'podcast',
        component: () => import('pages/Podcast.vue'),
        meta: {
          title: 'Podcast'
        }
      }
    ]
  },
  {
    path: '/notificar',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'notificar',
        component: () => import('pages/Notificar.vue'),
        meta: {
          title: 'Notificar',
          authRequired: true
        }
      }
    ]
  }
  // {
  //   path: '/calendar*',
  //   name: 'calendar',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('pages/Eventos.vue'),
  //       meta: {
  //         title: 'Eventos'
  //       }
  //     }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
