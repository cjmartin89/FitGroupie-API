const admin = require('firebase-admin');
const serviceAccount = require('./fitgroupieSA.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();

//Time Setting Adjustment for Firestore
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

module.exports.admin = admin;