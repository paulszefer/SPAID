$(".courselink").hover(
    function() {
        $(this).css("background-color", "#FFFFFF");
    },
    function() {
        $(this).css("background-color", "#EEE7E1");
    }
)

/* Term 1 Courses */
$("#comp1510link").click(
    function() {
        displayCourse("COMP 1510", "#comp1510description");
    }
)

$("#comp1536link").click(
    function() {
        displayCourse("COMP 1536", "#comp1536description");
    }
)

$("#comp1113link").click(
    function() {
        displayCourse("COMP 1113", "#comp1113description");
    }
)

$("#comp1111link").click(
    function() {
        displayCourse("COMP 1111", "#comp1111description");
    }
)

$("#comp1100link").click(
    function() {
        displayCourse("COMP 1100", "#comp1100description");
    }
)

$("#comm1116link").click(
    function() {
        displayCourse("COMM 1116", "#comm1116description");
    }
)

$("#busa2720link").click(
    function() {
        displayCourse("BUSA 2720", "#busa2720description");
    }
)

/* Term 2 Courses */
$("#comm2216link").click(
    function() {
        displayCourse("COMM 2216", "#comm2216description");
    }
)

$("#comp2121link").click(
    function() {
        displayCourse("COMP 2121", "#comp2121description");
    }
)

$("#comp2510link").click(
    function() {
        displayCourse("COMP 2510", "#comp2510description");
    }
)

$("#comp2526link").click(
    function() {
        displayCourse("COMP 2526", "#comp2526description");
    }
)

$("#comp2714link").click(
    function() {
        displayCourse("COMP 2714", "#comp2714description");
    }
)

$("#comp2721link").click(
    function() {
        displayCourse("COMP 2721", "#comp2721description");
    }
)

$("#comp2910link").click(
    function() {
        displayCourse("COMP 2910", "#comp2910description");
    }
)

/* Term 3 Courses */
$("#comp3512link").click(
    function() {
        displayCourse("COMP 3512", "#comp3512description");
    }
)

$("#comp3711link").click(
    function() {
        displayCourse("COMP 3711", "#comp3711description");
    }
)

$("#comp3721link").click(
    function() {
        displayCourse("COMP 3721", "#comp3721description");
    }
)

$("#comp3760link").click(
    function() {
        displayCourse("COMP 3760", "#comp3760description");
    }
)

$("#comp3900link").click(
    function() {
        displayCourse("COMP 3900", "#comp3900description");
    }
)

/* Term 4 Courses */
$("#blaw3600link").click(
    function() {
        displayCourse("BLAW 3600", "#blaw3600description");
    }
)

$("#comp4100link").click(
    function() {
        displayCourse("COMP 4100", "#comp4100description");
    }
)

$("#comp4735link").click(
    function() {
        displayCourse("COMP 4735", "#comp4735description");
    }
)

$("#comp4900link").click(
    function() {
        displayCourse("COMP 4900", "#comp4900description");
    }
)

$(".specialtylink").click(
    function() {
        displayCourse("Specialty", "#specialtydescription");
    }
)

function displayCourse(title, descID) {
    clearDescription();
    $("#coursetitle").html(title);
    $(descID).css("display", "block");
}

function clearDescription() {
    $(".coursedescription").css("display", "none");
}