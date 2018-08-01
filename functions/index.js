let functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addNotifications = functions.https.onRequest((request, response) => {
  // for post method send data as json
  if(request.method !== 'POST') {
    return response.status(400).send('Please send a POST request');
  }

  const timestamp = new Date().getTime();
  const data = request.body;

  // data obtained using POST
  const notification = {
    title: data.title,
    description: data.description,
    date: timestamp,
    topic: [data.topic],
  };

  return admin.database().ref('/notifications').push(notification).then((snapshot) => {
    return response.status(200).send(snapshot.ref.toString());
  });
});

exports.sendNotifications = functions.database.ref('/notifications/{pushId}')
  .onCreate((snapshot, context) => {
    var data = snapshot.val();
    var payload = {
      notification: {
        title: data.title,
        body: data.description,
      }
    };

  return admin.messaging().sendToTopic(data.topic[0], payload);
});
