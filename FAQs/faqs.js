"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag
    var h2List = document.getElementsByTagName("h2"); // get all h2 elements

/* Add code to the toggle function in your faqs.js file so only one answer can be displayed at a time. 
To do that, create an array of the h2 elements. 
Then, use a for loop to go through the h2 elements in the array and remove the class attribute for all h2 elements that aren’t the one that has been clicked. 
You also need to remove the class attributes for all of the div siblings of the h2 elements that weren’t clicked.
*/

    // looping h2 elements to remove class attribute from any elements that weren't clicked
    for (var i = 0; i < h2List.length; i++) {
        if (h2List[i] !== h2) {
            h2List[i].removeAttribute("class");

            // remove "open" class from corresponding div sibling
            var siblingDiv = h2List[i].nextElementSibling;
            if (siblingDiv.hasAttribute("class")) { 
                siblingDiv.removeAttribute("class");
            }
        }
    }

    // toggle plus and minus image in h2 element by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } 
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
        h2Elements[i].onclick = toggle;    
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};


