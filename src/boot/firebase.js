import Firebase from 'firebase/app'
import 'firebase/database'
// import 'firebase/messaging'
import firebaseConfig from '../../firebase.conf'

export default ({ Vue }) => {
  // Initialize Firebase from settings
  Firebase.initializeApp(firebaseConfig)

  Vue.prototype.$firebase = Firebase
  Vue.prototype.$db = Firebase.database()
}
