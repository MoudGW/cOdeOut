initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var providerData = user.providerData;
        console.log(providerData);
        localStorage.setItem('uid',providerData[0].uid);
        $.get('/user/' + providerData[0].uid, function (data) {
          if (data.exist == 'true') {
            console.log('user does exist');
            setTimeout(function () {
              location.href = 'data.html';
            }, 2000);
          } else {
            console.log('user does not exist');
            $.post('/api/user', {
              user: providerData
            }, function () {});
            setTimeout(function () {
              location.href = 'survey.html';
            }, 2000);
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