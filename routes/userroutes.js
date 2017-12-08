var db = require("../models");

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
      name: req.body.user[0].displayName
    })
    .then(function(dbuser) {
      res.json(db.user);
    });
    });
    app.post("/user/:name", function(req, res) {
        var name=req.params.name.replace(/&/g,' ');

    var name=req.params.name.replace(/&/g,' ');
    db.user.update(
    {html: parseInt(req.body.user[0]),
    js: parseInt(req.body.user[1]),
    css: parseInt(req.body.user[2]),
    jquery: parseInt(req.body.user[3]),
    node: parseInt(req.body.user[4]),
    mysql: parseInt(req.body.user[5]),
    reactjs:  parseInt(req.body.user[6]),
    mongodb:  parseInt(req.body.user[7])},
    {where: {name: name} }).then(function(dbuser) {
      res.json(dbuser);
    });
});    
   

}