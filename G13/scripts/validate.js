$("#loginformelement").submit(
    function() {
        validUsername = validateUsername($("#loginusername").val());
        validPassword = validatePassword($("#loginpassword").val());
        $("#loginusernamewarning").css("display", (!validUsername ? "block" : "none"));
        $("#loginpasswordwarning").css("display", (!validPassword ? "block" : "none"));
        return validUsername && validPassword;
    }
)

$("#registerformelement").submit(
    function() {
        validUsername = validateUsername($("#registerusername").val());
        validPassword = validatePassword($("#registerpassword").val());
        $("#registerusernamewarning").css("display", (!validUsername ? "block" : "none"));
        $("#registerpasswordwarning").css("display", (!validPassword ? "block" : "none"));
        return validUsername && validPassword;
    }
)

function validateUsername(str) {
    var pattern = /[\W_]/g;

    /* Condition 1: is defined */
    var c1 = (str !== undefined);
    /* Condition 2: at least 1 character */
    var c2 = (str.length >= 1);
    /* Condition 3: at most 32 characters */
    var c3 = (str.length <= 32);
    /* Condition 4: no non-alphanumeric characters */
    var c4 = !pattern.test(str);
    
    var result = c1 && c2 && c3 && c4;
    return result;
}

function validatePassword(str) {
    var pattern = /[\W_]/g;

    /* Condition 1: is defined */
    var c1 = (str !== undefined);
    /* Condition 2: at least 8 characters */
    var c2 = (str.length >= 8);
    /* Condition 3: at most 32 characters */
    var c3 = (str.length <= 32);
    /* Condition 4: no non-alphanumeric characters */
    var c4 = !pattern.test(str);
    
    var result = c1 && c2 && c3 && c4;
    return result;
}

$("#postthreadformelement").submit(
    function() {
        validTitle = validateTitle($("#postthreadtitle").val());
        validDescription = validateDescription($("#postthreaddescription").val());
        $("#postthreadtitlewarning").css("display", (!validTitle ? "block" : "none"));
        $("#postthreaddescriptionwarning").css("display", (!validDescription ? "block" : "none"));
        if (validTitle && validDescription) {
            $("#postthreadform").css("display", "none");
        }
        return validTitle && validDescription;
    }
)

$("#postreplyformelement").submit(
    function() {
        validDescription = validateDescription($("#postreplydescription").val());
        $("#postreplydescriptionwarning").css("display", (!validDescription ? "block" : "none"));
        if (validDescription) {
            $("#postreplyform").css("display", "none");
        }
        return validDescription;
    }
)

function validateTitle(str) {
    var trimmed = str.replace(/\s/g, "");
    var pattern = /[^\w\.\,\!\?\s]/g;

    /* Condition 1: is defined */
    var c1 = (str !== undefined);
    /* Condition 2: at least 1 non-whitespace character */
    var c2 = (trimmed.length >= 1);
    /* Condition 3: at most 32 characters */
    var c3 = (str.length <= 32);
    /* Condition 4: no invalid characters */
    var c4 = !pattern.test(str);
    
    var result = c1 && c2 && c3 && c4;
    return result;
}

function validateDescription(str) {
    var trimmed = str.replace(/\s/g, "");
    var pattern = /[^\w\.\,\!\?\s\t\n\r]/g;

    /* Condition 1: is defined */
    var c1 = (str !== undefined);
    /* Condition 2: at least 1 non-whitespace character */
    var c2 = (trimmed.length >= 1);
    /* Condition 3: at most 512 characters */
    var c3 = (str.length <= 512);
    /* Condition 4: no invalid characters */
    var c4 = !pattern.test(str);
    
    var result = c1 && c2 && c3 && c4;
    return result;
}