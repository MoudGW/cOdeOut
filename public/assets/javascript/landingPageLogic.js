$(document).ready(function () {

    var database = firebase.database();

    database.ref().on("child_added", function (childSnapshot) {

        // Snapshot of the current database
        var getData = childSnapshot.val();

        for (var i in getData) {
            
            console.log(getData[i].name)
        };


        // console.log(getData);




    });








});