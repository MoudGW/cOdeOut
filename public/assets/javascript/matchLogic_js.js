$(document).ready(function () {

    $("#Submit").on("click", function () {
        topMatches();
    });
    function topMatches() {
        $.get("/api/users/", function (data) {
            var user = JSON.parse(localStorage.getItem('uid'));
            console.log(data);           
            var bestMatch;
            var bestMatchDifference = 1000;
            for (var i = 0; i < data.length; i++) {

                var potentialMatch = data[i];
                var totalDifference = 0;
                if (user === potentialMatch.uid) continue;
                for (var f = 0; f < potentialMatch.scores[f]; f++) {

                    // This finds the absolute number diffrence in the scores of the database compared to the current users scores
                    totalDifference += Math.abs(parseInt(newUser.scores[f]) - parseInt(potentialMatch.scores[f]));

                }


                if (totalDifference < bestMatchDifference) {
                    bestMatch = potentialMatch;
                    bestMatchDifference = totalDifference;
                }}
                        $("#matchName").text(bestMatch.name);
	    		        $('#matchImg').attr("src", bestMatch.photo);
                        $("#resultsModal").modal('toggle');
                    });

        }

});