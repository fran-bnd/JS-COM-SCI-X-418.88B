"use strict";

(function($) {
    $.fn.altrow = function() {
      //geting all "tr" child elements
      var rows = this.find('tr');
  
      //adding "header" class to rows with "th" elements
      rows.filter(function() {
        return $(this).find('th').length > 0;
      }).addClass('header');
  
      //adding "even" and "odd" classes to the rest of the rows
      rows.each(function(index) {
        if (index > 0) {
          $(this).addClass(index % 2 === 0 ? 'even' : 'odd');
        }
      });
  
      return this;
    };
  })(jQuery);

/*
In the jquery.altrow.js file, a plugin uses the getElementsByTagName method to get all of an element’s “tr” child elements. 

It checks whether a row contains “th” elements to see if it’s a header row.

Then, applies a class named “header” to the header row, 
and classes named “even” and “odd” on an alternating basis to the rest of the rows. 
*/
