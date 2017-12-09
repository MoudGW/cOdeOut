 $(document).ready(function () {
   var user=JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
   var uid=JSON.parse(localStorage.getItem('uid'));
   $('#Photo').attr('src',user[0].photoUrl);
   $('#name').html(user[0].displayName);
   setTimeout(function(){
      $('#loading').remove();
      $('#Submit').css('opacity',1);
      firebase.database().ref('/status').on("value", function (snapshot) {
      $('#users').html('');
      var data=snapshot.val();
      console.log(data);
      for(var i in data)
      {
      console.log(data[i]); 
      var img=data[i].photo;
      var name;
      if(data[i].name==undefined)
       {name='Unknown';
       }else
       {
       name=data[i].name;
       }
       var state=data[i].state;
       if (uid!=data[i].uid)
       {
       if(state=='offline')
       {
        var html="<div class='col-sm-4 text-center classy'><img class='photos offline' src="+img+"/><div class='centred'>"+state+"</div></div>"
       }
       else{
         var html="<div class='col-sm-4 text-center'><div class='col-sm-4 text-center'><img class='photos' src="+img+
         "/><div class='centred'>"+state+"</div></div><button id='Submit' type='button' class='btn btn-success'>Connect</button></div>";
       }
       $('#users').append(html);
       }
       }
    });},3000);
  });