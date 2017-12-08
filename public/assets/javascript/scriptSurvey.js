/* 
#####################################################################
++++++++++++++++++++++++ List of stuff to do ++++++++++++++++++++++++ 

######################################################################
*/

//Run these functions once the page loads
$( document ).ready(function() {

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Global variables
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//This is the array we will use to store our trivia objects.
var triviaArray = [];

// Set the start of the array. We will also use this to keep track of our place is the array.
// Set it to minus so we can go to the first objext (0) in the array when we begin
var j = 0;

//button trackers
var buttonClicked;

//comparison variables
var triviaAnswer; 

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Objects
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// These are our questions and options. This is dynamic, we can add as many as we want here as long as we update the "triviaArray" array.  
var triviaObj1 = {

	question: "What language are you least familiar with?",
	options: ["Javascript", "MySQL", "Node.js", "JSON"],

}

var triviaObj2 = {

	question: "What language are you most comfortable with?",
	options: ["Node.js", "Javascript", "JSON", "MySQL"],

}	

var triviaObj3 = {

	question: "Have you completed the GW Bootcamp before?",
	options: ["Yes","No"],
}


//Holds all of our questions. When we remove or create new qustions/objects this needs to be updated.
triviaArray = [triviaObj1, triviaObj2, triviaObj3]; 

//This array will store the users answers in the form of a numeric value
answersArray = [];


//++++++++++++++++++++++++++++++++++++++
// On-Click Events 
//++++++++++++++++++++++++++++++++++++++

$("#startButton").on("click", function() {

	// pass the array of triviaObjects to the triviaGenerator
	triviaGenerator(triviaArray);

	//Hide start button afterward pressed, we won't need it anymore
	$("#startButton").hide();
	$( "#welcomeBanner2" ).html("");
	$( "#descriptionBanner1" ).html("");
});

// handles the user button clicks
$("body").on("click", ".optionButton", function () {

	buttonClicked = $(this).attr("data-id");
	//if user clicks on an option button, run the following
	if ($(this).parent().attr('id') === "optionsContainer") {

		//console log results
		console.log("button clicked:", buttonClicked);

	//push the answer of the user to an array for manipulation later on
	answersArray.push(buttonClicked);

		//console log  results
		console.log(answersArray);

	nextTrivia();
	
	}

});


//======================================
// Functions
//======================================

    function nextTrivia() {

		//move to the next trivia object.
		triviaGenerator(triviaArray);
    }


//We will use this function to generate our array.
function triviaGenerator (arr) {

	var arrayOfTrivias = arr;

		//console log J value
		console.log("j index value", j);

	//Go up one in the array (go to the next object in the array)
	if (j < arrayOfTrivias.length) {

	//Don't go beyond the end of the array, if we are at the end, go back to the beginning.

		//assign the trivia's answer to a global variable so we can do a comparrison against the users answer
		triviaAnswer = arrayOfTrivias[j].answer;


		//Print the trivia's question to the page ================================
		//Insert the question for the trivia we are on
		var triviaQuestion = arrayOfTrivias[j].question;
		$("#questionContainer").html( "<h2>" + triviaQuestion + "</h2>");
		
		//Makes the code easier to manipulate and read.
		var optionsArray = arrayOfTrivias[j].options;

		//Gives the button thier values, which we will pass/push to an array later. 
		var indexCounter = 0;

		// Loop through the options array for this trivia and print//append them as buttons to the screen.
		$("#optionsContainer").text("");
		for (var i = 0; i < optionsArray.length; i++) {

			  $("#optionsContainer").append("<button data-id=" + indexCounter + " class='optionButton btn btn-default btn-block'>" + "<h2>" + optionsArray[i] + "</h2> </button>");

			  //Add to the counter
			  ++indexCounter;
		}

		++j

	} else {

		//we have reached the end of our array
		console.log("at the end");

		//clear the trivias/surveys 
		$('#dynamicDiv').children().text("");


	}

}

});