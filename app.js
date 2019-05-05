const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/business.route');

const MongoClient = require('mongodb').MongoClient;
const CONNECTION_URL = "mongodb+srv://ungureanu:Botosani1989@cluster0-t0frr.mongodb.net/bogdaproste?retryWrites=true";
const DATABASE_NAME = "bogdaproste";

const app = express();

// var database, collection;
// app.listen(3000, () => {
//     MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
//         if(error) {
//             throw error;
//         }
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("_users");
//         console.log("Connected to `" + database + "`!");
//     });
// });

const mongoose = require('mongoose');
const config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    (client) => {
      console.log('Connected to database');
    },
    err => { console.log('Can not connect to the database' + err) }
);



// uncomment after placing favicong in public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);


const port = process.env.PORT || 8080;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});
