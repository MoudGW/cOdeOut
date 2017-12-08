initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function (accessToken) {
                // console.log(JSON.stringify({
                //     displayName: displayName,
                //     email: email,
                //     emailVerified: emailVerified,
                //     phoneNumber: phoneNumber,
                //     photoURL: photoURL,
                //     uid: uid,
                //     accessToken: accessToken,
                //     providerData: providerData
                // }, null, '  '));
            });

            // Create a reference to this user's specific status node.
            // This is where we will store data about being online/offline.
            var userStatusDatabaseRef = firebase.database().ref(`/status/${uid}`);

            // We'll create two constants which we will write to 
            // the Realtime database when this device is offline
            // or online.
            var isOfflineForDatabase = {
                state: "offline",
                photo: photoURL,
                name: displayName,
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };

            var isOnlineForDatabase = {
                state: "online",
                photo: photoURL,
                name: displayName,
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };

            // Create a reference to the special ".info/connected" path in 
            // Realtime Database. This path returns `true` when connected
            // and `false` when disconnected.
            firebase.database().ref(".info/connected").on("value", function (snapshot) {
                // If we're not currently connected, don't do anything.
                if (snapshot.val() == false) {
                    return;
                };

                // If we are currently connected, then use the 'onDisconnect()' 
                // method to add a set which will only trigger once this 
                // client has disconnected by closing the app, 
                // losing internet, or any other means.
                userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
                    // The promise returned from .onDisconnect().set() will
                    // resolve as soon as the server acknowledges the onDisconnect() 
                    // request, NOT once we've actually disconnected:
                    // https://firebase.google.com/docs/reference/js/firebase.database.OnDisconnect

                    // We can now safely set ourselves as "online" knowing that the
                    // server will mark us as offline once we lose connection.
                    userStatusDatabaseRef.set(isOnlineForDatabase);
                });
            });

        } else {
            // User is signed out.
            location.href = "index.html"
        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp()
});