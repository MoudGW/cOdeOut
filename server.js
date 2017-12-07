var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var path =require('path');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("public"));
// Routes

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
//app.use(express.static(path.join(__dirname, 'public')));
app.get('/handlebars',function(req,res){
         res.render('index',
         {
          users:[{name:'Moud',photo:'https://avatars0.githubusercontent.com/u/29299046?s=400&u=dc18e7ac83775c5c5a978964b668f84c6aa342b0&v=4'},{name:'Moud',photo:'https://avatars0.githubusercontent.com/u/29299046?s=400&u=dc18e7ac83775c5c5a978964b668f84c6aa342b0&v=4'}]
         });
    }); 
// =============================================================
require("./routes/userroutes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT,'10.199.18.17', function() {
    console.log("App listening on PORT " + PORT);
  });
});