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
        $(".warning").css(dp, "none");
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
        $(".warning").css(dp, "none");
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