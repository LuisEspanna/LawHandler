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
    ]

    res.json(titles);*/
});

router.post('/api/titles', (req, res)=>{
    db.ref('titles').set(req.body);
    res.json({server:"ok"});
});

router.get('/', (req, res)=>{
  res.send("Server works");
});


module.exports = router;