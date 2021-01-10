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

router.get('/api/titles', (req, res)=>{
    let titles = [
      {
        "tipo":"Titulo",
        "titulo": "Título I",
        "descripcion": "GENERALIDADES",
        "id": "123456",
        "capitulos" : [
          {
    
            "tipo":"Capitulo",
            "articulos" : [
              {
                "tipo":"Articulo",
                "titulo": "Titulo de artículo ejemplo",
                "paragrafos" : [
                  {
                    "numero" : 1,
                    "descripcion": "Descripcion ejm",
                    "notas":[
                      "nota1",
                      "nota2"
                    ],
    
                    "keywords":[
                      "Keyword1",
                      "Keyword2"
                    ]
                  }
                ],
                "multimedia" : [
                  {
                    "tipo": "video",
                    "url" : "www.videejemplo.com"
                  }
                ]
    
              }
            ]
          }
        ]
        ,
        "multimedia" : [
          {
            "tipo": "video",
            "url" : "www.videejemplo.com"
          },
          {
            "tipo": "imagen",
            "url" : "https://wallpapercave.com/wp/wp6476165.jpg"
          }
        ]
      }
    ]
    res.json(titles);
});

router.get('/', (req, res)=>{
  res.send("Server works");
});


module.exports = router;