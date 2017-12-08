 $(document).ready(function () {
var answerArray = [];
var user=JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
$('#Photo').attr('src',user[0].photoUrl);
$('#name').html(user[0].displayName);
       if(user[0].displayName=='')
       {
        $('#name').html('Unknown');
       }else
       {
        $('#name').html(user[0].displayName);
       }
  function getRadioValues() {
      var allStars = document.getElementsByName("star");
       for (var i = 0; i < allStars.length; i++) {
         if (allStars[i].checked) {
        // return inputs[i].value;
          console.log("star id: "+ allStars[i].id , "Checked! " + "value: " + allStars[i].value);
          answerArray.push(parseInt(allStars[i].value));
         }
     }
   }
 $("#Submit").click(function() {
  getRadioValues();
  if (answerArray.length<8){
        answerArray=[];
        alertify.error("YOU HAVE TO FILL ALL SURVEY");
  }else{
     var name=user[0].displayName.replace(/ /g,'&');
      $.post('/user/'+name, {
          user:answerArray
            },  function(req, res) {
               location.href='home.html';
            });   
    }
}); 
  });