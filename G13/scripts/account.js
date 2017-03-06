var logintab = document.getElementById("logintab");
var regtab = document.getElementById("registertab");

var loginform = document.getElementById("loginform");
var regform = document.getElementById("registerform");

var selectedColor = "white";
var unselectedColor = "#A2B6B8";

var loginselected = false;
var regselected = false;

logintab.onclick = function() {
    if (!loginselected) {
        changeBackgroundColor(logintab, selectedColor);
        changeBackgroundColor(regtab, unselectedColor);
        changeDisplay(loginform, "block");
        changeDisplay(regform, "none");
    } else {
        changeBackgroundColor(regtab, unselectedColor);
        changeBackgroundColor(logintab, unselectedColor);
        changeDisplay(loginform, "none");
    }
    loginselected = !loginselected;
    regselected = false;
}

regtab.onclick = function() {
    if (!regselected) {
        changeBackgroundColor(logintab, unselectedColor);
        changeBackgroundColor(regtab, selectedColor);
        changeDisplay(loginform, "none");
        changeDisplay(regform, "block");
    } else {
        changeBackgroundColor(logintab, unselectedColor);
        changeBackgroundColor(regtab, unselectedColor);
        changeDisplay(regform, "none");
    }
    loginselected = false;
    regselected = !regselected;
}

function changeDisplay(obj, val) {
    obj.style.display = val;
}