$(document).ready(function () {


    $("#Submit").on("click", function () {
        topMatches();
    })





    function topMatches() {

        // database.ref().on("child_added", function (childSnapshot) {
        //     var getData = childSnapshot.val();

        //     for (var i in getData) {

        //         console.log(getData[i].name)
        //         console.log(getData[i].name)
        //     };
        // });


        $.get("/api/users", function (data) {
            // console.log();
            var user = JSON.parse(localStorage.getItem('uid'));
            console.log(user); 
            console.log(data);           

            // user[0].providerData.uid

            var bestMatch;
            var bestMatchDifference = 1000;


            for (var i = 0; i < data.length; i++) {

                var potentialMatch = data[i];
                // console.log(potentialMatch.name);
                var totalDifference = 0;

                // Skip over the current users data in the database and continue the loop
                if (user === potentialMatch.uid) continue;

                // This loops through the scores results in the database
                for (var f = 0; f < potentialMatch.scores[f]; f++) {

                    // This finds the absolute number diffrence in the scores of the database compared to the current users scores
                    totalDifference += Math.abs(parseInt(newUser.scores[f]) - parseInt(potentialMatch.scores[f]));

                }


                if (totalDifference < bestMatchDifference) {

                    bestMatch = potentialMatch;
                    bestMatchDifference = totalDifference;

                }

            }

            console.log(data);
            console.log(bestMatchDifference);                        
            console.log(bestMatch.name);

                        $("#matchName").text(bestMatch.name);
	    		        $('#matchImg').attr("src", bestMatch.photo);

                        // Show the modal with the best match 
                        $("#resultsModal").modal('toggle');

        });
    };







});