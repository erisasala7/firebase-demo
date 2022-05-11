const messaging = firebase.messaging();
messaging
    .requestPermission()
    .then(function() {
        MsgElem.innerHTML = "Notification permission granted."
        console.log("Notification permission granted.");

        // get the token in the form of promise
        return messaging.getToken()
    })
    .then(function(token) {
        // print the token on the HTML page
        TokenElem.innerHTML = "Device token is : <br>" + token
    })
    .catch(function(err) {
        ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
        console.log("Unable to get permission to notify.", err);
    });