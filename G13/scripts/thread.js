$(".rowthread").click(
    function() {
        var rowselected = ($(this).find(".threadcontent").css("display") == "block");
        var postreplyactive = isPostReplyActive();
        var postthreadactive = isPostThreadActive();
            
        if (!postreplyactive) {
            $(".threadcontent").css("display", "none");
            $(".threadauthor").css("display", "none");
            $(".postreplybutton").css("display", "none");
            $(".replywrapper").css("display", "none");
        }
        
        if (!(rowselected || postreplyactive)) {
            $(this).css("background-color", "#FFFFFF");
            $(this).find(".threadauthor").css("display", "block");
            $(this).find(".threadcontent").css("display", "block");
            if (!postthreadactive) {
                $(this).find(".postreplybutton").css("display", "block");
            }
            
            if ($(this).find($(".replywrapper")).children().length != 0) {
                $(this).find(".replywrapper").css("display", "block");
            }
            rowselected = !rowselected;
        }
    }
)

$(".rowthread").hover(
    function() {
        var rowselected = ($(this).find(".threadcontent").css("display") == "block");
        var postreplyactive = isPostReplyActive();
        
        if (!rowselected && !postreplyactive) {
            $(this).css("background-color", "#E0EEEE");
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
        $(".postreplybutton").css("display", "none");
    }
)

$("#postthreadbutton").hover(
    function() {
        if (!isPostThreadActive() && !isPostReplyActive()) {
            $(this).attr("src", "../images/postThreadHover.png")
        }
    },
    function() {
        $(this).attr("src", "../images/postThread.png")
    }
)

$(".postreplybutton").click(
    function() {
        var postthreadactive = isPostThreadActive();
        if (!postthreadactive) {
            $("#postreplyform").css("display", "block");
            document.getElementById("threadidreply").value = this.parentElement.parentElement.children[0].innerHTML;
        }
        $(".postreplybutton").css("display", "none");
    }
)

$(".postreplybutton").hover(
    function() {
        if (!isPostThreadActive() && !isPostReplyActive()) {
            $(this).attr("src", "../images/postReplyHover.png")
        }
    },
    function() {
        $(this).attr("src", "../images/postReply.png")
    }
)

$("#submitthread").click(
    function() {
        
    }
)
 
$("#submitreply").click(
    function() {
        
    }
)    

$(".cancel").click(
    function() {
        var rows = document.getElementsByClassName("rowthread");
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].getElementsByClassName("threadcontent")[0].style.display === "block") {
                rows[i].getElementsByClassName("postreplybutton")[0].style.display = "block";
            }
        }
        $("#postthreadform").css("display", "none");
        $("#postreplyform").css("display", "none");
        $(".warning").css("display", "none");
    }
)

function hidePost(id) {
    $(id).css("display", "none");
}

function isPostThreadActive() {
    return $("#postthreadform").css("display") == "block";
}

function isPostReplyActive() {
    return $("#postreplyform").css("display") == "block";
}