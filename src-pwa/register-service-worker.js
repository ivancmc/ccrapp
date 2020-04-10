import { register } from 'register-service-worker'
import { Notify } from 'quasar'

// function forceUpdate () {
//   // Força atualização quando há modificação
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.getRegistrations().then(function (registrations) {
//       for (let registration of registrations) {
//         if (registration.waiting) {
//           registration.update()
//         }
//       }
//     })
//   }
// }

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

// register(process.env.SERVICE_WORKER_FILE, {
// register('firebase-messaging-sw.js', {
register('/OneSignalSDKWorker.js', {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready () {
    console.log('App is being served from cache by a service worker.')
  },

  registered (registration) {
    console.log('Service worker has been registered.')
  },

  cached (registration) {
    console.log('Content has been cached for offline use.')
  },

  updatefound (registration) {
    console.log('New content is downloading.')
  },

  updated (registration) {
    console.log('New content is available; please refresh.')
    Notify.create({
      position: 'top',
      message: 'Nova versão do App disponível.',
      closeBtn: 'Atualizar',
      timeout: 10000,
      progress: true,
      onDismiss () {
        // forceUpdate()
        location.reload(true)
      }
    })
  },

  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },

  error (err) {
    console.error('Error during service worker registration:', err)
    alert('Navegador incompatível.')
    alert(err)
  }
})
