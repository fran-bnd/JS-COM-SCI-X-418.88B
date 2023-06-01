"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    
    // Convert values to a 12 hour clock and determine the AM/PM value
    let ampm = currentHour >= 12 ? 'PM' : 'AM';
    if (currentHour > 12) {
        currentHour = currentHour - 12;
    }
    
    // Display the values with two digits in the span tags
    $("hours").textContent = padSingleDigit(currentHour);
    $("minutes").textContent = padSingleDigit(currentMinute);
    $("seconds").textContent = padSingleDigit(currentSecond); 
    $("ampm").textContent = ampm; 
};

var padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};

window.onload = function() {
    // Set initial clock display 
    displayCurrentTime();
    // Set interval timer to display new time every second (1000 miliseconds)
    let timer;
    timer = setInterval(displayCurrentTime, 1000);
};

/*
In the JavaScript file, note that four functions are supplied. The $ function. The start of a displayCurrentTime function. 
The padSingleDigit function that adds a leading zero to single digits. And the start of an onload event handler.

In the displayCurrentTime function, code uses the Date object to determine the current hour, minute, and second. 
Converting these values to a 12 hour clock, determines the AM/PM value, and displays these values in the appropriate span tags.

In the onload event handler, a timer calls the displayCurrentTime function at 1 second intervals. 
The current time shows as soon as the page loads.
*/