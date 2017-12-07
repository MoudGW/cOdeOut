var db = require("../models");
var firebase=require('../firebase/firebase.js');
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
   app.get("/api/users/", function(req, res) {
    db.user.findAll({})
    .then(function(dbuser) {
      res.json(dbuser);
    });
    });
   //---------
   app.get('/auth',function(req,res){
    console.log('blabla');
    firebase();
   });
    app.get('/user/:uid', function(req, res) {
      var uid = req.params.uid;
    db.user.findAll({
    where: {
    uid: uid}
    }).then(function(dbuser) {
      var length=dbuser.length;
      if(length==0)
      {
        res.json(dbuser);
      }
      else{
        res.json({'exist':'true'}); 
       }
    });
    });
    //-----
    app.post("/api/user", function(req, res) {

    db.user.create({
      uid: parseInt(req.body.user[0].uid),
      name: req.body.user[0].displayName,
      photo: req.body.user[0].url
    })
    .then(function(dbuser) {
      res.json(db.user);
    });
    });
    

}