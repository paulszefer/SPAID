/* login tab */
var lt = $("#logintab");

/* register tab */
var rt = $("#registertab");

/* login tab selected */
var lts = false;

/* register tab selected */
var rts = false;

/* login form */
var lf = $("#loginform");

/* register form */
var rf = $("#registerform");

/* css background color property */
var bc = "background-color";

/* selected color */
var sc = "white";

/* unselected color */
var uc = "#A2B6B8";

/* css display property */
var dp = "display";

/* inline-block */
var ib = "inline-block";

lt.click(
    function() {
        if (!lts) {
            lt.css(bc, sc);
            rt.css(bc, uc);
            lf.css(dp, ib);
            rf.css(dp, "none");
        } else {
            lt.css(bc, uc);
            rt.css(bc, uc);
            lf.css(dp, "none");
        }
        lts = !lts;
        rts = false;
    }
)

rt.click(
    function() {
        if (!rts) {
            rt.css(bc, sc);
            lt.css(bc, uc);
            rf.css(dp, ib);
            lf.css(dp, "none");
        } else {
            rt.css(bc, uc);
            lt.css(bc, uc);
            rf.css(dp, "none");
        }
        rts = !rts;
        lts = false;
    }
)

lt.hover(
    function() {
        lt.css(bc, sc);
    },
    function() {
        if (!lts) {
            lt.css(bc, uc);
        }
    }
)

rt.hover(
    function() {
        rt.css(bc, sc);
    },
    function() {
        if (!rts) {
            rt.css(bc, uc);
        }
    }
)

/*
var logintab = document.getElementById("logintab");
var regtab = document.getElementById("registertab");

var loginform = document.getElementById("loginform");
var regform = document.getElementById("registerform");

var loginselected = false;
var regselected = false;

logintab.onclick = function() {
    if (!loginselected) {
        changeBackgroundColor(logintab, selectedColor);
        changeBackgroundColor(regtab, unselectedColor);
        changeDisplay(loginform, "inline-block");
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
        changeDisplay(regform, "inline-block");
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
*/