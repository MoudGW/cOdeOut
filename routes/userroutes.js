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
    })
    .then(function(dbuser) {
      res.json(db.user);
    });
    });
    app.post("/api/:uid", function(req, res) {

  db.user.update(
   {html: req.body[0]},
   {js: req.body[1]},
   {css: req.body[2]},
   {jquery: req.body[3]},
   {node: req.body[4]},
   {mysql: req.body[5]},
   {reactjs:  req.body[6]},
   {mongodb: req.body[7]},
  {where: {uid: req.params.uid} }).then(function([ rowsUpdate, [updatedBook] ]) {
   res.json(updatedBook)
 });
});    
   

}