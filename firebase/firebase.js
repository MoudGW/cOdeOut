var firebase =require('firebase');

module.exports =function(){var config = {
        apiKey: "AIzaSyCwUkcv76d83PbAa3NaCflYCOaIoECN8NY",
        authDomain: "gw-coding-buds.firebaseapp.com",
        databaseURL: "https://gw-coding-buds.firebaseio.com",
        projectId: "gw-coding-buds",
        storageBucket: ""
    };
    firebase.initializeApp(config);
   // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
 function  Initialize (){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var providerData = user.providerData;
            $.get('/user/'+providerData[0].uid, function(data) {
              if(data.exist=='true'){
               console.log('user does exist');
              }else{
             $.post('/api/user',{user:providerData},function(){
            });
              }
               });
          } else {
            // User is signed out.
            console.log("You are not signed in");
          }
        }, function(error) {
          console.log(error);
        });
  }
  $("#firebaseui-auth-container").on( "click", function() {
     Initialize ();
     setTimeout(function(){location.href='loading.html'; }, 100);
  });
}