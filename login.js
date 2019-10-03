var submit = document.getElementById('login-button');

function checkCredentials(){
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    console.log('in method');
    if (name == "admin" && pass == "Admin123"){
        window.location.replace("/motorist.html");
        console.log("Access Granted");
    }
};
submit.addEventListener("click", checkCredentials());
