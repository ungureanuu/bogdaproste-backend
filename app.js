const express = require('express'),

path = require('path'),
//favicon = require('serve-favicon'),
bodyParser = require('body-parser'),
cors = require('cors'),
businessRoute = require('./routes/business.route');

const mongoose = require('mongoose'),
config = require('./DB');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);

const router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});

const port = process.env.PORT || 8080;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});
