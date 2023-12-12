document.getElementById("btn-login").onclick = function () {
    let txtUsername = document.getElementById("userName").value;
    let txtPassword = document.getElementById("pwd").value;

    if (txtUsername == "user" && txtPassword == "1234") {
        window.location.href = 'menu.html';
        
    } else  if (txtUsername == "user"){
        document.getElementById("log-status").innerHTML = "Invalid password!";
    }else{
        document.getElementById("log-status").innerHTML = "Invalid User Name!";
    }
};

