import Firebase from 'firebase/app'
import 'firebase/database'
// import 'firebase/messaging'
import firebaseConfig from '../../firebase.conf'

export default ({ Vue }) => {
  // Força atualização quando há modificação
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.update()
      }
    })
  }

  // Initialize Firebase from settings
  Firebase.initializeApp(firebaseConfig)

  Vue.prototype.$firebase = Firebase
  Vue.prototype.$db = Firebase.database()
}
