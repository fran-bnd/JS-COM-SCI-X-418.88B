var $ = function(id) {
    return document.getElementById(id);
};

var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
	var entry = $("cents").value;         // get user entry
	var cents = parseInt(entry);          // parse entry
	
	//4. Modify the make_change.js code that gets the user's entry that checks to make sure that it is a valid number between 0 and 99. 
	// If it isn't, display an alert dialog box for the error. If it is valid, call the function named makeChange and pass it the user's entry.
    
	if (0 <= entry && entry <= 99){
		makeChange(cents);
		$("cents").focus();
	} else {
		alert('Input error. Try again with a valid number between 0 and 99.');
		$("cents").value =	"";
	}
};

var makeChange = function(cents) {
	//5. Complete coding to calculate and display the number of dimes, nickels, and pennies.
	let centsLeft = cents;
	var quarters = parseInt(centsLeft / 25);  // get number of quarters

	centsLeft -= quarters * 25;
	var dimes = parseInt(centsLeft / 10);   // get number of dimes

	centsLeft -= dimes * 10;
	var nickels = parseInt(centsLeft / 5);  // get number of nickels
	
	centsLeft -= nickels * 5;
	var pennies = parseInt(centsLeft / 1);  // get number of pennies
	
	// display the results of the calculations
	$("quarters").value = quarters;
	$("dimes").value = dimes;
	$("nickels").value = nickels;
	$("pennies").value = pennies;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
	$("cents").focus();
};
