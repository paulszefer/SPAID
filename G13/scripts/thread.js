var threadlist = document.getElementsByClassName("rowthread");
var threadcontentlist = document.getElementsByClassName("threadcontent");

$(".rowthread").click(function() {
    $(".threadcontent").css("display", "none");
    $(this).find(".threadcontent").css("display", "block");
})