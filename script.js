
var LookDown1, LookDown, EyeClose, username, password, EyeClose1, showPassword;
/*Action to validate form input*/
function submitForm() {
    password = document.forms["myForm"]["Mypassword"].value;
    username = document.forms["myForm"]["userName"].value;
    LookDown = document.getElementById("down");
    LookDown1 = document.getElementById("down1");
    var ErrorMessage = document.getElementById("message");
    ErrorMessage.innerHTML = "";
    var ErrorMessage1 = document.getElementById("message1");
    ErrorMessage1.innerHTML = "";
    var passwordType = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (password.match(passwordType) && username !== "") {
        return true;
    }
    else if (username == "" && password == "") {
        ErrorMessage1.innerHTML = "Username cannot be blank";
        ErrorMessage.innerHTML = "password cannot be blank";
        LookDown.style.transform = "translateX(-5px) translateY(1px)";
        LookDown1.style.transform = "translateX(-5px) translateY(1px)";
        return false;
    }
    else if (username == "") {
        ErrorMessage1.innerHTML = "Username cannot be blank";
        LookDown.style.transform = "translateX(-5px) translateY(1px)";
        LookDown1.style.transform = "translateX(-5px) translateY(1px)";
        return false;
    }
    else if (password == "") {
        ErrorMessage.innerHTML = "password cannot be blank";
        LookDown.style.transform = "translateX(-5px) translateY(1px)";
        LookDown1.style.transform = "translateX(-5px) translateY(1px)";
        return false;
    }

    else {
        ErrorMessage.innerHTML = "input a correct password format";
        LookDown.style.transform = "translateX(-5px) translateY(1px)";
        LookDown1.style.transform = "translateX(-5px) translateY(1px)";
        return false;
    }
}




/*Allows panda to look at users input*/
function lookDown() {
    EyeClose = document.getElementById("close")
    EyeClose1 = document.getElementById("close1");
    LookDown = document.getElementById("down");
    LookDown1 = document.getElementById("down1");
    LookDown.style.transform = "translateX(-5px) translateY(5px)";
    LookDown1.style.transform = "translateX(-5px) translateY(5px)";
    EyeClose.style.backgroundColor = "white";
    EyeClose1.style.backgroundColor = "white";

}
/*Allows panda to close eyes at users input*/
function closeEye() {

    EyeClose = document.getElementById("close")
    EyeClose1 = document.getElementById("close1");

    EyeClose.style.backgroundColor = "black";
    EyeClose1.style.backgroundColor = "black";
}

/*Allows panda to open eyes at users input*/
function eyeOpen() {
    EyeClose = document.getElementById("close")
    EyeClose1 = document.getElementById("close1");
    LookDown = document.getElementById("down");
    LookDown1 = document.getElementById("down1");
    LookDown.style.transform = "translateX(-5px) translateY(1px)";
    LookDown1.style.transform = "translateX(-5px) translateY(1px)";
    EyeClose.style.backgroundColor = "white";
    EyeClose1.style.backgroundColor = "white";
}
/*panda reverts back to default if event target is not among conditions*/
window.onmouseover = function (event) {
    username = document.getElementById("userName");
    password = document.getElementById("Mypassword");
    var showPassword = document.getElementById("showPassword");
    if (event.target != password && event.target != username && event.target != showPassword) {
        EyeClose.style.backgroundColor = "black";
        EyeClose1.style.backgroundColor = "black";
        LookDown.style.transform = "translateX(-5px) translateY(5px)";
        LookDown1.style.transform = "translateX(-5px) translateY(5px)";

    }

}
/**
 * Allows panda to close eyes at users password input
 * Allows panda to open eyes at users password input
 * turn on and off passoword visibility */
function display() {
    var getPassword = document.getElementById("Mypassword");
    var showPassword = document.getElementById("showPassword");

    if (getPassword.type === "password") {

        getPassword.type = "text";
        lookDown();

    }
    else {
        getPassword.type = "password";
        closeEye();
    };
    showPassword.classList.toggle("fa-eye");


}
