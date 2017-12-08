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
  res.json(req.body);
      /*
    var name=req.params.name.replace(/&/g,' ');
    db.user.update(
    {html: req.body.user[0]},
    {js: req.body.user[1]},
    {css: req.body.user[2]},
    {jquery: req.body.user[3]},
    {node: req.body.user[4]},
    {mysql: req.body.user[5]},
    {reactjs:  req.body.user[6]},
    {where: {name: name} }).then(function(dbuser) {
      res.json(db.user);
    });*/
});    
   

}