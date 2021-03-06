var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var path =require('path');
var server = require('http').createServer(app);  
var socket = require('socket.io');
// Sets up the Express App
var connection=[];
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
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 var io=socket(server);
   io.on('connection', function(client) {  
    client.on('name',function(data){
      users[data.name]=client.id;
        console.log(users);
    });
     client.on('mate',function(data){

        if(users[data.mate]!=undefined)
        {
         io.to(users[data.mate]).emit('new user', 'New Mate want to connect with you');    
        }
    });
});
   });