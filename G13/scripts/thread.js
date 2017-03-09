$(".rowthread").click(
    function() {
        var rowselected = ($(this).find(".threadcontent").css("display") == "block");
        var postreplyactive = isPostReplyActive();
            
        if (!postreplyactive) {
            $(".threadcontent").css("display", "none");
            $(".threadauthor").css("display", "none");
            $(".threadreplybutton").css("display", "none");
        }
        
        if (!(rowselected || postreplyactive)) {
            $(this).css("background-color", "#FFFFFF");
            $(this).find(".threadauthor").css("display", "block");
            $(this).find(".threadcontent").css("display", "block");
            $(this).find(".threadreplybutton").css("display", "block");
            rowselected = !rowselected;
        }
    }
)

$(".rowthread").hover(
    function() {
        var rowselected = ($(this).find(".threadcontent").css("display") == "block");
        var postreplyactive = isPostReplyActive();
        
        if (!rowselected && !postreplyactive) {
            $(this).css("background-color", "#AAFFAA");
        }
    },
    function() {
        $(this).css("background-color", "#FFFFFF");
    }
)

$("#postthreadbutton").click(
    function() {
        var postreplyactive = isPostReplyActive();
        if (!postreplyactive) {
            $("#postthreadform").css("display", "block");
        }
    }
)

$(".threadreplybutton").click(
    function() {
        var postthreadactive = isPostThreadActive();
        if (!postthreadactive) {
            $("#postreplyform").css("display", "block");
        }
    }
)

$("#submitthread").click(
    function() {
        $("#postthreadform").css("display", "none");
    }
)
 
$("#submitreply").click(
    function() {
        $("#postreplyform").css("display", "none");
    }
)    

$(".cancel").click(
    function() {
        $("#postthreadform").css("display", "none");
        $("#postreplyform").css("display", "none");
    }
)

function hidePost(id) {
    $(id).css("display", "none");
}

function isPostReplyActive() {
    return $("#postreplyform").css("display") == "block";
}

function isPostThreadActive() {
    return $("#postthreadform").css("display") == "block";
}