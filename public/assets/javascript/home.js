$(document).ready(function () {
   var user=JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
   $('#Photo').attr('src',user[0].photoUrl);
   $('#name').html(user[0].displayName);
/*    var socket = io();
     socket.emit('name',{
     name:user[0].displayName
   });*/

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
       if(state=='offline')
       {
        var html="<div class='col-sm-4 text-center classy'><img class='photos offline' src="+img+"/><<div class='centred'>"+state+"</div></div>"
       }
       else{
         var html="<div id='"+name+"' class='col-sm-4 text-center online'><img class='photos' src="+img+"><div class='centred'>"+state+"</div></div>";
       }
       $('#users').append(html);
       }
        $('.online').on( "click", function() {
          console.log($(this).attr("id"));
            socket.emit('mate',{
            mate:$(this).attr("id")
         });
      socket.on('new user', function(id){
       swal(id,{
       buttons: ["next time", "yes"],
      });
       });
        });
    });},3000);
  });