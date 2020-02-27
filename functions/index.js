const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// admin.initializeApp(functions.config().firebase);

exports.sendNotifications = functions.database.ref('/notification/{notificationId}').onCreate((snapshot, context) => {

  // Setup notification
  const NOTIFICATION_SNAPSHOT = snapshot;
  const payload = {
    notification: {
      title: NOTIFICATION_SNAPSHOT.val().title,
      body: NOTIFICATION_SNAPSHOT.val().body,
      icon: '../statics/notification-img.png',
      click_action: `https://ccrapp.web.app/#/` + NOTIFICATION_SNAPSHOT.val().click_action
    }
  }
  console.log(payload)

  // Clean invalid tokens
  function cleanInvalidTokens(tokensWithKey, results) {

    const invalidTokens = [];

    results.forEach((result, i) => {
      if ( !result.error ) return;

      console.error('Failure sending notification to', tokensWithKey[i].token, result.error);
      
      switch(result.error.code) {
        case "messaging/invalid-registration-token":
        case "messaging/registration-token-not-registered":
          invalidTokens.push( admin.database().ref('/tokens_notification').child(tokensWithKey[i].key).remove() );
          break;
        default:
          break;
      }
    });

    return Promise.all(invalidTokens);
  }


  return admin.database().ref('/tokens_notification').once('value').then((data) => {
    
    if ( !data.val() ) return 0;

    const snapshotTk = data.val();
    const tokensWithKey = [];
    const tokens = [];

    for (let key in snapshotTk) {
      tokens.push(snapshotTk[key])
      tokensWithKey.push({
        token: snapshotTk[key],
        key: key
      })
    }

    return admin.messaging().sendToDevice(tokens, payload)
      .then((response) => cleanInvalidTokens(tokensWithKey, response.results))
      .then(() => admin.database().ref('/notification').child(NOTIFICATION_SNAPSHOT.key).remove())
  });
});