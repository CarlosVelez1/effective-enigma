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
    }
    if(i==0){
        alert("Another Successful Launch")
    }
