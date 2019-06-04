var now = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var checkTime = function() {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById('timeDiv');
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  //add AM or PM
  var suffix = hour >= 12 ? "PM" : "AM";

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes
  };

  if (seconds < 10) {
    seconds = "0" + seconds
  };

  if (dayOfWeek == 1 ) {
    dayDiv.innerHTML = 'It\'s ' + today
    timeDiv.innerHTML =  hour + ':' + minutes + ':' + seconds + ' ' + suffix;
    openDiv.innerHTML = 'Sorry, we\'re closed'
    timeDiv.className = 'closed';
  } 

  else if ((dayOfWeek == 0) && hour >= 9 && hour <= 15) {
    dayDiv.innerHTML = 'It\'s ' + today
    timeDiv.innerHTML =  hour + ':' + minutes + ':' + seconds + ' ' + suffix;
    openDiv.innerHTML = 'Hooray, we\'re open!'
    timeDiv.className = 'open';
  } 
  
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hour >= 8 && hour <= 16) {
    dayDiv.innerHTML = 'It\'s ' + today
    timeDiv.innerHTML =  hour + ':' + minutes + ':' + seconds + ' ' + suffix;
    openDiv.innerHTML = 'Hooray, we\'re open!'
    timeDiv.className = 'open';
  } 
  
  else {
    if (hour == 0 || hour > 12) {
    }
    dayDiv.innerHTML = 'It\'s ' + today
    timeDiv.innerHTML =  hour + ':' + minutes + ':' + seconds + ' ' + suffix;
    openDiv.innerHTML = 'Sorry, we\'re closed!'
    timeDiv.className = 'closed';
  }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 1000);
checkTime();