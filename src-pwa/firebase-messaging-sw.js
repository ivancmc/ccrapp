firebase.initializeApp({
  messagingSenderId: '737588678740'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Mensagem de segundo plano recebida. ', payload);
  // Customize notification here
  var obj = payload.notification;
  var notificationTitle = obj.title;
  var notificationOptions = {
    body: obj.body,
    icon: obj.icon
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});