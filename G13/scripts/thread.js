$(".rowthread").click(
    function() {
        var selected = ($(this).find(".threadcontent").css("display") == "block");
        
        $(".threadcontent").css("display", "none");
        $(".threadauthor").css("display", "none");
        
        if (!selected) {
            $(this).find(".threadcontent").css("display", "block");
            $(this).find(".threadauthor").css("display", "block");
            selected = !selected;
        }
    }
)

$(".rowthread").hover(
    function() {
        $(this).css("background-color", "#AAFFAA");
    },
    function() {
        $(this).css("background-color", "#FFFFFF");
    }
)