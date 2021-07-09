//Slider
var slider = document.getElementById("throttleLevel");
var output = document.getElementById("output");
output.innerHTML = slider.value;


slider.oninput = function () {
    //Slider value
    output.innerHTML = this.value;

    //Speed value
    var throttlePercentage = slider.value * 0.01;
    var maxSpeed = 3500;
    var currentSpeed = throttlePercentage * maxSpeed;
    document.getElementById("currentSpeed").innerHTML = Math.floor(currentSpeed);

    //G-Force value
    var maxForce = 5;
    var currentForce = throttlePercentage * maxForce;
    document.getElementById("currentGForce").innerHTML = (currentForce).toFixed(2);

    //Ship's Gravity
    document.getElementById("shipGravity").innerHTML = (currentForce).toFixed(2);

    //Atmosphere message
    if (currentForce < 1) {
        document.getElementById("atmosphere_message").innerHTML = "The current pressure is too low.";
    } else if (currentForce > 4) {
        document.getElementById("atmosphere_message").innerHTML = "The current pressure is too high.";
    } else {
        document.getElementById("atmosphere_message").innerHTML = "The current pressure is optimal.";
    }
}


//Fuel bar
var bar = document.getElementById("fuelBar");
var width = 100;

function fuelBar() {
    bar.style.width = width + "%";
    width = width - 1 / 2;
    document.getElementById("fuel").innerHTML = (width).toFixed(2);
}

//Traveled distance
var count = 324400000;
var number = 324400000;
var distance = setInterval(function () {
    document.getElementById('distance_left').innerHTML = --count;
    if (count === number) {
        clearInterval(distance)
    }
}, 500);


//Food
function omNoms() {
    document.getElementById("food_left").innerHTML = "There is " + Math.floor(Math.random() * 1001) + " kg of food left.";
}

//Water
function slupSlurp() {
    document.getElementById("water_left").innerHTML = "There is " + Math.floor(Math.random() * 1001) + " L of food left.";
}

//Weight converter
function weightConverter() {
    var earthKg = parseFloat(document.getElementById("weight").value);
    var marsKg = earthKg * 0.53;
    document.getElementById("weight_mars").innerHTML = Math.floor(marsKg) + " kg";
}