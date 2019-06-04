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
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var suffix = hours >= 12 ? "PM" : "AM";

if (minutes < 10) {
  minutes = "0" + minutes
};

if (seconds < 10) {
  seconds = "0" + seconds
};

// =================
// Functions
// =================

function checkDay() {
  dayDiv.innerHTML = 'It\'s ' + today
}

function checkTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = addZero(m);
  s = addZero(s);
  document.getElementById('timeDiv').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(checkTime, 1000);
}
function addZero(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function checkOpen() {

  if ((dayOfWeek == 0) && hours >= 9 && hours <= 15) {
    openDiv.innerHTML = 'Hooray, we\'re open!'
  } 
  
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hours >= 8 && hours <= 16) {
    openDiv.innerHTML = 'Hooray, we\'re open!'
  } 
  
  else {
    openDiv.innerHTML = 'Sorry, we\'re closed!'
  }
};