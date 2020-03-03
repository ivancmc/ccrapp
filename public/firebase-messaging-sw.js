// This file is generated by firebase-messaging-extension

importScripts('https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.1/firebase-messaging.js');

importScripts('/service-worker.js?1583235956249')
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
  if (window.localStorage.getItem('notification-permission') === 'granted') {
    return self.registration.showNotification(notificationTitle, notificationOptions);
  }
});