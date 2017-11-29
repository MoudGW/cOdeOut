$(function () {
    // Initialize Firebase

    var config = {
        apiKey: "AIzaSyCwUkcv76d83PbAa3NaCflYCOaIoECN8NY",
        authDomain: "gw-coding-buds.firebaseapp.com",
        databaseURL: "https://gw-coding-buds.firebaseio.com",
        projectId: "gw-coding-buds",
        storageBucket: ""
    };
    firebase.initializeApp(config);

    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: 'data.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ]
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    var providerData;
    initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var providerData = user.providerData;
               $.post('/api/user',{user:providerData},function(){
                console.log('sent');
              });
            user.getIdToken().then(function(accessToken) {
              console.log(JSON.stringify({
                providerData: providerData
              }, null, '  '));
            });
          } else {
            // User is signed out.
            console.log("You are not signed in");
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp();
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