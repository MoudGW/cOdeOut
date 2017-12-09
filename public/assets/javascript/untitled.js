$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyALS2P5oH-vyZOO7Jf4duZAfMv1viJvvis",
    authDomain: "project2-c4411.firebaseapp.com",
    databaseURL: "https://project2-c4411.firebaseio.com",
    projectId: "project2-c4411",
    storageBucket: "project2-c4411.appspot.com",
    messagingSenderId: "456064974433"
  };
firebase.initializeApp(config);
var data = firebase.database();
data.ref()
});