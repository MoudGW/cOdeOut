initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var providerData = user.providerData;
        console.log(providerData);
        $.get('/user/' + providerData[0].uid, function (data) {
          if (data.exist == 'true') {
            console.log('user does exist');
            setTimeout(function () {
              location.href = 'landingpage.html';
            }, 2000);
          } else {
            console.log('user does not exist');
            setTimeout(function () {
              location.href = 'survey.html';
            }, 2000);
            $.post('/api/user', {
              user: providerData
            }, function () {});
          }
        });
      } else {
        console.log("You are not signed in");
        location.href = "index.html";        
      }
    }, function (error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function () {
    initApp();
  });