function CheckCred() 
{
    //This let's me use the user inputs as variables in order to check them
    var FirstName = document.getElementById("First").value;
    var LastName = document.getElementById("Last").value;
    var Password = document.getElementById("Pass").value;
    var combo = FirstName+LastName;
    if (combo.length > 20|| combo.length < 4)
    {
        document.getElementById("UserInput").innerHTML="Name Must contain More Than 4 Characters But Less Than 20"
    }
    else if(Password < 100 || Password > 999)
    {
        document.getElementById("UserInput").innerHTML="Password Was Too Short Or Too Long"
    }
    else 
    {
        //There was supposed to be an alert here but I couldn't manage to make it work
        location.replace("UAT_SpaceProgram.html")
    }
}