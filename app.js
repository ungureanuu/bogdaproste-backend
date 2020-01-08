const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/business.route');

const MongoClient = require('mongodb').MongoClient;
const CONNECTION_URL = "mongodb+srv://ungureanu:Botosani1989@cluster0-t0frr.mongodb.net/vetOnline?retryWrites=true";
const DATABASE_NAME = "vetOnline";

const app = express();

const mongoose = require('mongoose');
const config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useMongoClient: true }).then(
    (client) => {
      console.log('Connected to database');
    },
    err => { console.log('Can not connect to the database' + err) }
);



// uncomment after placing favicong in public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static('./'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);


const port = process.env.PORT || 8080;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});
