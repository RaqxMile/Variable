document.getElementById("loginButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add your login logic here
    if (username === "Raqx" && password === "7412548mile") {
        document.getElementById("message").innerHTML = "Login successful!Welcome Back";
        
        // Redirect to main.html
        window.location.href = "main.html";
    } else {
        document.getElementById("message").innerHTML = "Login failed. Please try again.";
    }
});

function Iforgot(){
  document.getElementById("WhatIForgot?").innerHTML="KeeP(R)+Go 1.609";
                                }
