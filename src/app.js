const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
var cors = require('cors')
const app = express();
var body_parser = require('body-parser');

//setting
app.use(cors());
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname:'.hbs'
}));

app.set('view engine', '.hbs');

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(body_parser.urlencoded({extended:true}));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;