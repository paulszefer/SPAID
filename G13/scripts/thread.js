$(".rowthread").click(
    function() {
        var selected = ($(this).find(".threadcontent").css("display") == "block");
        
        $(".threadcontent").css("display", "none");
        $(".threadauthor").css("display", "none");
        $(".threadreply").css("display", "none");
        
        if (!selected) {
            $(this).css("background-color", "#FFFFFF");
            $(this).find(".threadauthor").css("display", "block");
            $(this).find(".threadcontent").css("display", "block");
            $(this).find(".threadreply").css("display", "block");
            selected = !selected;
        }
    }
)

$(".rowthread").hover(
    function() {
        var selected = ($(this).find(".threadcontent").css("display") == "block");
        
        if (!selected) {
            $(this).css("background-color", "#AAFFAA");
        }
    },
    function() {
        $(this).css("background-color", "#FFFFFF");
    }
)