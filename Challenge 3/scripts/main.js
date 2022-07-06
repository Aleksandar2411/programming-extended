
function getSuggestion() {
  //Select city
  var select = document.getElementById("select");
  var index = select.selectedIndex;
  var cityId = select.options[index].value;
  var url1 = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=90e60912bd182a7376c51572407574da"
  var result = httpGet(url1);
  var obj = eval("(" + result + ")");
  var coord = obj.city.coord;
  var weather = obj.list[0].weather[0].main;

  //Weather and coordinates
  console.log("weather:" + weather)
  console.log("list1:" + obj.list[0])
  console.log(coord)
  var param = "lat=" + coord.lat + "&lng=" + coord.lon;
  var coord_show = coord.lat + "," + coord.lon;

  //Time(zone)
  var url2 = "http://api.geonames.org/timezoneJSON?" + param + "&username=javthon"
  var result2 = httpGet(url2)
  console.log(result2)
  var obj2 = eval("(" + result2 + ")");
  var localTime = obj2.time;

  document.getElementById("location").value = coord_show
  document.getElementById("time").value = localTime
  document.getElementById("weather").value = weather

  var time = localTime.substring(11, 13)

  console.log("time:" + time)

  var output = ""
  var land = true;

  // Display landing advice
  if (parseInt(time) >= 8 && parseInt(time) <= 20) {
    output += "It is daytime now (secure)"
  } else {
    output += "It is night now (vulnerable)"
    land = false;
  }
  if (weather === "Clear") {
    output += ", weather condition is optimal"
  } else {
    output += ", weather condition is unsatisfatory"
    land = false;
  }
  if (land) {
    output += ", safe landing spot"
  } else {
    output += ", dangerous landing spot"
  }

  document.getElementById("advice").value = output
}

//API
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); 
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
