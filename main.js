// =================
// Global Variables
// =================

var now = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = weekday[now.getDay()];
var dayOfWeek = now.getDay();

var hours = now.getHours();

// =================
// Functions
// =================

function checkDay() {
  dayDiv.innerHTML = 'It\'s ' + today
}

function checkTime() {
  
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  document.getElementById('timeDiv').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  setTimeout(checkTime, 1000);
}

function addZero(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function checkOpen() {

  if ((dayOfWeek == 0) && hours >= 9 && hours < 14) {
    openDiv.innerHTML = 'Hooray, we\'re open!'
  } 

  else if ((dayOfWeek == 0) && hours >= 9 && hours == 14) {
    openDiv.innerHTML = 'Hurry, we\'re almost closing!'
  } 
  
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hours >= 8 && hours < 15) {
    openDiv.innerHTML = 'Hooray, we\'re open!'
  } 

  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hours == 15) {
    openDiv.innerHTML = 'Hurry, we\'re almost closing!'
  } 
  
  else {
    openDiv.innerHTML = 'Sorry, we\'re closed!'
  }
}

function changeClosingtime() {
  document.getElementById( "button" ).style.display = "none" ;
  openDiv.innerHTML = 'Sorry, we\'re closed!'

  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var timehour = hours + ":" + minutes + ":" + seconds;
  
  

  if (day == 2) {
    document.getElementById("closingTime1").innerHTML = timehour;
    document.getElementById("disappear").innerHTML = "<br />" + "";
    document.getElementById("openClose").innerHTML = "CLOSED";
  }
  else {
    document.getElementById("closingTime0").innerHTML = timehour;
    document.getElementById("disappear").innerHTML = "<br />" + "";
  }
}