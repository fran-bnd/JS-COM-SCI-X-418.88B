var $ = function (id) { return document.getElementById(id); };

var getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayofMonth = function(currentMonth) {

};

window.onload = function () {
    
};

/*
In the HTML file, note the span element within the h1 element that will display the month name and year. Note also the table element that contains one row. To build the calendar, you need to add rows to this table after the row that it already contains.
In the CSS file, note the rule set for the td elements of the table. The rules in this set will format the calendar as shown above.
In the JavaScript file, note that four functions are supplied. The $ function. A getMonthText function that accepts the number for a month and returns the month name in text. The start of a getLastDayofMonth function. And the start of the onload event handler.
Write the code for the getLastDayofMonth function. It should use the number passed in the currentMonth parameter to calculate and return the last day of the current month. See figure 7-11 of our text for ideas on how to code this.
In the onload event handler, write the code that loops through the days of the month to create the rows for the calendar.
Remember to deal with the blank dates that can occur at the beginning of the first week and the end of the last week of the month.
Use a tr element for each new row and td elements within the rows for the days of the months.
To display the rows, add them to the innerHTML property of the calendar table, but remember that the new rows have to go after the row that’s in the HTML.
In the onload event handler, write the code that gets and displays the name of the current month and the current year above the month table.
*/