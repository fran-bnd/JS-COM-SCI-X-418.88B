"use strict";

var $ = function(id) { return document.getElementById(id); };

var validatePhone = function() {
    var phone = $("phone").value;
    // var pattern = /^\d{3}-\d{3}-\d{4}$/;                          // 999-999-9999
    // var pattern = /^\d{3}-\d{3}-\d{4}$|^\d{1}-\d{3}-\d{3}-\d{4}$/;                       // optional "1-" prefix: 1-999-999-9999
    // var pattern = /^\d{3}[-.]\d{3}[-.]\d{4}$|^\d{1}[-.]\d{3}[-.]\d{3}[-.]\d{4}$/;        // added optional dashes or periods
    // var pattern = /^(1-)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;                    // added optional parentheses and blanks 

    var pattern = /^[+]?(1\-|1\s|1\.|\d{1}\-|\d{1}\s|\d{1}\.)?((\(\d{3}\))|\d{3})(\-|\s|\.)?(\d{3})(\-|\s|\.)?(\d{4})$/g;    // full version acception (541) 754-3010 domestic, +1-541-754-3010 international, 1 541 754.3010 in the US, 001-541-754-3010 other countries

    var isValid = pattern.test(phone);
    
    $("message").firstChild.nodeValue = (isValid) ? "Valid phone number" : "Invalid phone number";
};

window.onload = function() {
    $("validate").onclick = validatePhone;
    $("phone").value = "123-456-7890";  // set default phone number
};


/*
In the JavaScript file, note that three functions are supplied: 
The $ function. 
The validatePhone function that contains the validation code. 
And an onload event handler that attaches the validatePhone function to the click event of the Validate button.

Change the regular expression pattern in the pattern variable so the phone number can contain an optional "1-" prefix. 
The best way to do this is to copy the pattern variable to a new line and then comment out the original. This way, you can refer to the original pattern as you adjust it.

When the validation in step 4 is working correctly, change the new pattern so that the phone number can also contain either dashes or periods. 
Again, it’s best to make a copy so you can refer to what came before.

When the validation is step 5 is working correctly, change the new pattern so the phone number can have optional parentheses around the area code. 
To accommodate this change, you’ll want to allow blank spaces instead of dashes or periods after the optional “1” and after the area code.
*/