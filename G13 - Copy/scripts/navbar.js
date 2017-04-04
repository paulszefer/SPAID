var navcol = document.getElementById("navbarcollapsed");
var menu = document.getElementById("navbarmenu");
var academics = document.getElementById("navbaracademics");
var resources = document.getElementById("navbarresources");
var stories = document.getElementById("navbarstories");
var forum = document.getElementById("navbarforum");
var aboutus = document.getElementById("navbaraboutus");

var col = document.getElementsByClassName("navcollapsed");

navcol.onmouseover = function() {
    changeDisplayArray(col, "block");
}

navcol.onmouseout = function() {
    changeDisplayArray(col, "none");
    menu.style.display = "block";
}
    
menu.onmouseover = function() {
    changeBackgroundColor(menu, "#2C727F");
}

menu.onmouseout = function() {
    changeBackgroundColor(menu, "#1C616F");
}
    
academics.onmouseover = function() {
    changeBackgroundColor(academics, "#2C727F");
}

academics.onmouseout = function() {
    changeBackgroundColor(academics, "#1C616F");
}
    
resources.onmouseover = function() {
    changeBackgroundColor(resources, "#2C727F");
}

resources.onmouseout = function() {
    changeBackgroundColor(resources, "#1C616F");
}
    
stories.onmouseover = function() {
    changeBackgroundColor(stories, "#2C727F");
}

stories.onmouseout = function() {
    changeBackgroundColor(stories, "#1C616F");
}
    
forum.onmouseover = function() {
    changeBackgroundColor(forum, "#2C727F");
}

forum.onmouseout = function() {
    changeBackgroundColor(forum, "#1C616F");
}
    
aboutus.onmouseover = function() {
    changeBackgroundColor(aboutus, "#2C727F");
}

aboutus.onmouseout = function() {
    changeBackgroundColor(aboutus, "#1C616F");
}

function changeBackgroundColor(obj, val) {
    obj.style.backgroundColor = val;
}

function changeDisplayArray(obj, val) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.display = val;
    }
}