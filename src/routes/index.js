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
var cachedTitles = undefined;

router.get('/api/', (req, res)=>{
    getUsers(req, res, admin);
});

router.post('/api/users/singin', (req, res)=>{
    db.ref('Users').once('value', (snapshot)=>{
        var users = snapshot.val();   
        console.log(users);
        db.ref('Users').push(req.body);        
        res.status(200).json({status:'ok'});
    });    
});

router.post('/api/login', (req, res) => {

  if(req.body.email && req.body.password){
   
    db.ref('Users').once('value', (snapshot) => {
      var users = snapshot.val();
      var found = false;
      var data = {};
  
      for (const key in users) {
        if (Object.hasOwnProperty.call(users, key)) {
          const user = users[key];
  
          if (user.email === req.body.email && user.password === req.body.password) {
            found = true;
            data={...user}
          }
        }
      }
      
      if(found)res.status(200).json({ status: 'ok', data });
      else res.status(200).json({ status: 'Error al iniciar sesión, email o contraseña incorrectos' });
    });
  }  
});

router.get('/api/titles', (req, res)=>{  
  if(cachedTitles === undefined){
    db.ref('titles').once('value', (snapshot)=>{
      var titles = snapshot.val();    
      cachedTitles = titles;    
      console.log("Data from firebase");   
      res.status(200).json(titles);
    });
  }else{
    console.log("Data cached");  
    res.status(200).json(cachedTitles);
  }
});

router.post('/api/titles', (req, res)=>{
    cachedTitles = undefined;
    db.ref('titles').set(req.body);
    res.json({server:"ok"});
});

router.post('/api/visitors', (req, res)=>{

  db.ref('Visitors').push(req.body);

  console.log(req.body);

  res.json({server:"ok"});
});

router.get('/api/visitors', (req, res)=>{
  db.ref('Visitors').once('value', (snapshot)=>{
    var visitors = snapshot.val();    
    res.status(200).json(visitors);
  });
});

router.get('/', (req, res)=>{
  res.send("Server works");
});


module.exports = router;