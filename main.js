// ==================
// Global Viariables
// ==================

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var t = new Date ( );

var currentHours = t.getHours ( );
var currentMinutes = t.getMinutes ( );
var currentSeconds = t.getSeconds ( );

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

var t = ( currentHours < 12 ) ? "AM" : "PM";
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

var tstring = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + t;

// ==================
// Functions
// ==================

function checkDate() {
  document.getElementById("ShowDay").innerHTML = n;
}

function checkTime() {
  document.getElementById("clock").innerHTML = currentTimeString;
}