//BASIC SETUP
var express = require('express');
var app = express();

const bodyParser = require('body-parser');

//SETTING UP app FOR USING EXPRESS
var app = express();

//EJS SETUP
app.set('view engine', 'ejs');


//MIDDLEWARES
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://mridul:mridul@cluster0.e24jp.mongodb.net/hack36?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("We are connected to MongoDB");
});


//EXPRESS STATIC FILES
app.use(express.static('public'));

//Importing Routes
const indexRoutes = require("./routes/index");
const submitRoutes = require("./routes/submit");


//Middlewares
app.use(indexRoutes);
app.use(submitRoutes);


//LISTENING TO PORT
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is on FIRE !!!! " + 3000);
});
