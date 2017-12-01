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
    //console.log(req.body);

    db.user.create({
      uid: parseInt(req.body.user[0].uid),
      name: req.body.user[0].displayName
    })
    .then(function(dbuser) {
      res.json(db.user);
    });
    });
}