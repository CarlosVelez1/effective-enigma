function countDown() 
{
    var currTime = 10;
    var i=10;
   { for (i=10;i>-1;i--)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000*i);
    }
    setTimeout(function() { alert("Countdown Has Reached The Halfway Point"); }, 5001);
}
//With these functions the buttons at the moment can be interchanged
//between one another to disabled or enabled
function Start()
{
    document.getElementById("Play").disabled = true;
    document.getElementById("Stop").disabled = false;
}
function Pause()
{
    document.getElementById("Play").disabled = false;
    document.getElementById("Stop").disabled = true;
}
