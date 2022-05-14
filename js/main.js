const authentification = firebase.auth();
const message = firebase.messaging();


var tokenList = [{
    token: "token",
    uid: "authentification.currentUser.uid"
}];

function subscribeFunction() {
    message.requestPermission()
        .then(() => message.getToken())
        .then((token) => {
            console.log(token)
            alert(token);
            tokenList.push({
                token: token,
                uid: authentification.currentUser.uid
            });
            console.log(tokenList)
        })
        .catch((e) => console.log(e));
    document.getElementById('sub_btn').setAttribute("hidden", "true");
    document.getElementById('unsub_btn').removeAttribute("hidden");
}

function unsubscribeFunction() {
    message.getToken()
        .then((token) => {

            var index = tokenList.indexOf(token);
            tokenList.splice(index, 1);
            console.log(tokenList)
        })
        .catch((e) => console.log(e));
    document.getElementById('unsub_btn').setAttribute("hidden", "true");
    document.getElementById('sub_btn').removeAttribute("hidden");
}
var notificaions = [];

function sendNotification(e) {
    e.preventDefault();

    //const notificationMessage = document.getElementById('notification-message').value;
    //if ( !notificationMessage ) return;
    var myArray = [
        "FM1",
        "FM2",
        "FM3",
    ];

    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();

    notificaions
        .push({
            fehlermeldung: randomItem,
            date: dateTime,
            time: time
        })
        .then(() => {
            //  document.getElementById('notification-message').value = "";
            console.log(notificaions);
        })
        .catch((error) => {
            console.log(error)
        });
}