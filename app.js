const express = require('express'),
path = require('path'),
//favicon = require('serve-favicon'),
bodyParser = require('body-parser'),
cors = require('cors'),
businessRoute = require('./routes/business.route');

mongoose = require('mongoose'),
config = require('./DB');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ungureanu.claudiu.alexandru@gmail.com:Botosani1989!1@cluster0-t0frr.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
const port = process.env.PORT || 8080;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});
