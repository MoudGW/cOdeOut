        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: 'loading.html',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ]
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);

        window.addEventListener('load', function () {
            $(".mdl-card").replaceWith("<h1>Loading...</h1>");
        });