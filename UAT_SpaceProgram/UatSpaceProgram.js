// thank you for giving the code I was really racking my head trying to figure out how to make a working timer;
document.write(id = timer ,"filler"); 
function countDown() {
    var currTime = 3;
    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);
    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);
    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);
    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);
    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = "GO! ";
        currTime = currTime - 1;
        alert(" And the race has begun");
    }, 5000);
}