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

// =================
// checkDay
// =================

function checkDay() {
  dayDiv.innerHTML = 'It\'s ' + today
}

// =================
// checkTime
// =================

function checkTime() {
  
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  document.getElementById('timeDiv').innerHTML = hours + ":" + minutes + ":" + seconds;
  setTimeout(checkTime, 1000);
}

function addZero(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

// =================
// checkOpen
// =================

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

// =================
// changeClosingtime
// =================

function changeClosingtime() {
  document.getElementById( "button" ).style.display = "none" ;
  openDiv.innerHTML = 'Sorry, we\'re closed!'
  
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  minutes = addZero(minutes);

  var timehour = hours + ":" + minutes;

  if (dayOfWeek == 2) {
    var y = document.getElementById("time2Div");
    y.innerHTML = "today";
  }

  if (dayOfWeek == 3) {
    var y = document.getElementById("time3Div");
    y.innerHTML = timehour;
  }

  if (dayOfWeek == 4) {
    var y = document.getElementById("time4Div");
    y.innerHTML = timehour;
  }

  if (dayOfWeek == 5) {
    var y = document.getElementById("time5Div");
    y.innerHTML = timehour;
  }

  if (dayOfWeek == 6) {
    var y = document.getElementById("time6Div");
    y.innerHTML = timehour;
  }

  if (dayOfWeek == 7) {
    var y = document.getElementById("time7Div");
    y.innerHTML = timehour;
  }
}