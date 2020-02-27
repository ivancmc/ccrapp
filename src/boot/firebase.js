import Firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/messaging'
import firebaseConfig from '../../firebase.conf'

export default ({ Vue }) => {
  // Initialize Firebase from settings
  Firebase.initializeApp(firebaseConfig)

  Vue.prototype.$firebase = Firebase
  Vue.prototype.$db = Firebase.database()

  // Retrieve Firebase Messaging object.
  const messaging = Firebase.messaging()
  // Add the public key generated from the console here.
  messaging.usePublicVapidKey('BIAPU5iqltfSvNtdVzH7Tlr6TS2zqdLEQoHlFc7qmbjgThEUQjiqnbfi7mzrxZ0NirdFvVZUEk04vWPLTOh274I')

  function handleTokenRefresh () {
    return messaging.getToken().then((token) => {
      Firebase.database().ref('tokens_notification').orderByValue().equalTo(token).once('value', (snapshot) => {
        if (!snapshot.exists()) {
          console.log('Salvando token no database...')
          Firebase.database().ref('tokens_notification').push(token)
        } else {
          console.log('Token existente.')
        }
      })
      console.log(token)
    })
  }

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
      handleTokenRefresh()
    } else {
      console.log('Unable to get permission to notify.')
    }
  })

  messaging.onTokenRefresh(() => {
    handleTokenRefresh()
  })

  messaging.onMessage((payload) => {
    var obj = payload.notification
    var notification = new Notification(obj.title, {
      body: obj.body,
      icon: obj.icon
    })
    return notification
  })
  Vue.prototype.$msg = messaging
}
