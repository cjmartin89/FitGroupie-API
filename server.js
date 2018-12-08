const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const admin = require('./admin');
const db = admin.admin.firestore();

app.route('/activities')
    .get(function (req, res) {
        var data = [];
        db.collection('activities').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              data.push(doc.data())
            }), res.send(JSON.stringify(data));
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });
    })
    .post(function (req, res){
        console.log('Posting Activities');
    })

    app.route('/activityLevels')
    .get(function (req, res) {
        var data = [];
        db.collection('activityLevels').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              data.push(doc.data())
            }), res.send(JSON.stringify(data));
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });
    })
    .post(function (req, res){
        console.log('Posting Activities');
    })

    app.route('/activityTypes')
    .get(function (req, res) {
        var data = [];
        db.collection('activityTypes').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              data.push(doc.data())
            }), res.send(JSON.stringify(data));
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });
    })
    .post(function (req, res){
        console.log('Posting Activities');
    })

    app.route('/messages')
    .get(function (req, res) {
        var data = [];
        db.collection('messages').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              data.push(doc.data())
            }), res.send(JSON.stringify(data));
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });
    })
    .post(function (req, res){
        console.log('Posting Activities');
    })

    app.route('/users')
    .get(function (req, res) {
        var data = [];
        db.collection('users').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              data.push(doc.data())
            }), res.send(JSON.stringify(data));
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });
    })
    .post(function (req, res){
        console.log('Posting Activities');
    })

// Start Server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});