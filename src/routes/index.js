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

router.post('/api/users', (req, res)=>{
  /*
    db.ref('Users').child("info").push('Ecample');

    console.log('Index Works');
    res.render('index', {user:"Luis"});*/
    res.json(req.body);
});

router.get('/api/titles', (req, res)=>{

  db.ref('titles').once('value', (snapshot)=>{
    var titles = snapshot.val();           
    res.status(200).json(titles);
  });
    /*
    let titles = [
      {
        "tipo":"Titulo",
        "titulo": "## TÍTULO I",
        "descripcion": "### GENERALIDADES",
        "id": "123456",
        "capitulos" : [
          {
            "id":"11222345",
            "tipo":"Capitulo",
            "titulo":"### CAPÍTULO I",
            "descripcion": "### REQUISITOS PARA EJERCER LA INGENIERÍA, SUS PROFESIONES AFINES Y SUS PROFESIONES AUXILIARES.",
            "articulos" : [
              {
                "id":"44564451",
                "tipo":"Articulo",
                "titulo": "### ARTÍCULO 1o.",
                "descripcion": "### Descripcion articulo ejemplo \n Más descripción ~~texto tachado~~",
                "literales" : [
                  {
                    "id":"7879445",
                    "titulo" : "**a)**",
                    "descripcion": "Descripcion literal a",
                    "notas":[
                      "**nota1 literal a**",
                      "**nota2 literal a**"
                    ],
    
                    "keywords":[]
                  }
                ],
                "paragrafos" : [
                  {
                    "id":"74216458",
                    "titulo" : "### Parágrafo 1",
                    "descripcion": "Descripcion ejm",
                    "notas":[
                      "### ~~nota1 paragrafo~~",
                      "### ~~nota2 paragrafo~~"
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
                ,
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
              },
              {
                "tipo": "imagen",
                "url" : "https://wallpapercave.com/wp/wp6476165.jpg"
              }
            ],    
            "keywords":[
              "Keyword1",
              "Keyword2"
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
    ]*/

    //res.json(titles);
});

router.post('/api/titles', (req, res)=>{
    db.ref('titles').set(req.body);
    res.json({server:"ok"});
});

router.get('/', (req, res)=>{
  res.send("Server works");
});


module.exports = router;