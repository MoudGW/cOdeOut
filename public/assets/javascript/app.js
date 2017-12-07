$(function () {
    // Initialize Firebase
    $.get('/auth', function(data) {
         function  Initialize (){
        data.auth().onAuthStateChanged(function(user) {
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
    });

      $("#signOut").on( "click", function() {
        firebase.auth().signOut().then(function() {
            console.log("Sign Out Successful!")
          }).catch(function(error) {
              console.log("Error")
            // An error happened.
          });
      });
});