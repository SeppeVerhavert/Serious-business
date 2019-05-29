
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