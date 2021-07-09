//Location switcher
function switchLocation(e) {
    var switchValue = document.getElementById("switch")
    if (switchValue.value === 'on') {
        switchValue.value = 'off'
        document.body.style.backgroundImage = "url('images/earth.png')";
        document.getElementById("earth").style = "display: block;";
        document.getElementById("mars").style = "display: none;";
        document.getElementById("earthClock").style = "background: rgba(19, 228, 255,0.3) url(images/ios_clock.svg) no-repeat center;background-size: 88%;";
    } else {
        switchValue.value = 'on'
        document.body.style.backgroundImage = "url('images/mars.png')";
        document.getElementById("earth").style = "display: none;";
        document.getElementById("mars").style = "display: block;";
        document.getElementById("marsClock").style = "background: rgba(255, 226, 19,0.3) url(images/ios_clock.svg) no-repeat center;background-size: 88%;";
    }
}

//Clock function
var currentDate = new Date();

var date = addZero(currentDate.getDate());
var year = currentDate.getFullYear();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthNames[currentDate.getMonth()];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayNames[currentDate.getDay()];

//Display in HTML
document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;


//Time function
function initClock() {

    var clock = document.getElementById('clock');
    var time = new Date();

    var hours = addZero(time.getHours());
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());

    //Display in HTML
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;

}

setInterval(initClock, 1000);

function addZero(number) {

    if (number < 10) {
        number = "0" + number;
    }
    return number;

}