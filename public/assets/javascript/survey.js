 $(document).ready(function () {
var user=JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
var uid=JSON.parse(localStorage.getItem('uid'));
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
      $.post('/update/'+uid, {
          user:answerArray
            },  function(req, res) {
                console.log(req);
               answerArray = [];
                setTimeout(function () {
              location.href='home.html';
            }, 500);
              
            });   
    }
}); 
  });