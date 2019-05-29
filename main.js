function checkDate() {
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
    document.getElementById("ShowDay").innerHTML = n;
}

function checkTime() {
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

function checkOpen() {
   
    if (n == Monday) {
        document.getElementById("ShowOpen").innerHTML = "Sorry, we are closed.";
    } else if (n == Sunday && currentHours > 9 && currentHours < 15) {
        document.getElementById("ShowOpen").innerHTML = "We are open!";
    } else if (currentHours > 8 && currentHours < 16){
        document.getElementById("ShowOpen").innerHTML = "We are open!";
    } else {
        document.getElementById("ShowOpen").innerHTML = "Sorry, we are closed.";
    }
    }
