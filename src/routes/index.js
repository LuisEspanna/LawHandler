const { Router } = require('express');
const router = Router();
var admin = require("firebase-admin");
const {getUsers} = require("../controllers/api");


var serviceAccount = require("../../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lawhandler-71202-default-rtdb.firebaseio.com/"
});

var db = admin.database();

router.get('/api/', (req, res)=>{

  /*
    db.ref('Users').child("info").push('Ecample');

    console.log('Index Works');
    res.render('index', {user:"Luis"});*/
    getUsers(req, res, admin);
});

router.get('/', (req, res)=>{
  res.send("Server works");
});


module.exports = router;