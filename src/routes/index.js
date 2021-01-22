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
var cachedVisitors = undefined;

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
  cachedVisitors = undefined;
  console.log(req.body);

  res.json({server:"ok"});
});

router.get('/api/visitors', (req, res)=>{
  if(cachedVisitors === undefined){
    db.ref('Visitors').once('value', (snapshot)=>{
      var visitors = snapshot.val();    
      res.status(200).json(visitors);
    });
  }else{
    console.log("Visitors cached");  
    res.status(200).json(cachedVisitors);
  }
  /*
  db.ref('Visitors').once('value', (snapshot)=>{
    var visitors = snapshot.val();    
    res.status(200).json(visitors);
  });*/
  //const cachedVisitors = {"-MRYBCeMUMpY3JLSBOt8":{"date":1611203139577,"profession":"Ingeniería"},"-MRYKRbGNplQvY3Ei7iq":{"date":1611205560134,"profession":"Ingeniería"},"-MRYL142Pz3C6k57XAo2":{"date":1611205713598,"profession":"Ingeniería"},"-MRYjZWaKqjn6uDxiGk8":{"date":1611212408261,"profession":"Derecho"},"-MR_n3ZMOtKyreWF6N2c":{"date":1611246879960,"profession":"Otro"},"-MRaGtilopg5rkasr4ON":{"date":1611254962084,"profession":"Enseñanza"},"-MRaIBylaDSyAKNMm-AP":{"date":1611255303383,"profession":"Salud"},"-MRaut73y2Ko6rIYzz1V":{"date":1611265708517,"profession":"Salud"}}
  //res.status(200).json(cachedVisitors);
});

router.get('/', (req, res)=>{
  res.send("Server works");
});


module.exports = router;