const { Router } = require('express');
const router = Router();
var admin = require("firebase-admin");


var serviceAccount = require("../../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://validacion-d842b.firebaseio.com"
});

var db = admin.database();

router.get('/', (req, res)=>{

    db.ref('Users').child("info").push('Ecample');

    console.log('Index Works');
    res.render('index', {user:"Luis"});
});

module.exports = router;