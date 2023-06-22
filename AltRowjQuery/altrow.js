"use strict";

window.onload = function() {
    $(document).ready(function(){
        $('#important').altrow();
    }); //end ready
};

/*
In the HTML file, note the script tags for the jQuery library and the plugin file (jquery.altrow.js).

In the altrow.js file, the code onload event calls the plugin for the table element. 

Run the application and see how the row styles are applied to the table.
*/