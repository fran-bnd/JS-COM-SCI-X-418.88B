"use strict";

var transList = [];

var getTransaction = function(index) {
    if (index == null) {
        return transList.length;
    } else {
        return transList[index];
    }
};

var addTransaction = function (type, amount, date) {
   
    var amountDisplay = "";
    if ( type == "deposit"){
        amountDisplay = amount;
    } else {
        amountDisplay = "("+amount+")";
    }

    // add object to array of transList
    transList.push({ "type": type, "amount": amount, "amountDisplay": amountDisplay, "dateDisplay": date });

};

var calculateBalance = function (type, amount, total) {
    
    if ( type == "deposit"){
        return (total + parseInt(amount));
    } else {
        return (total - amount);
    }
};

/*
In the balance.js file, note that four functions are supplied. The $ function. The updateDisplay and add functions that contain the code for the application. 
And an onload event handler that attaches the add function to the click event of the Add Transaction button and calls the updateDisplay function.

In the library_balance.js file, note that an empty array and the start of three functions are supplied.

Review the updateDisplay function in the balance.js file. Note that it calls the getTransaction function of the library file twice. 
In the first call, no argument is passed and the total number of transactions is returned. 
In the second call, the value of the loop’s index is passed and a specific transaction is returned. 
Now, code the getTransaction function in the library file.

Note that the updateDisplay function also calls the calculateBalance function of the library file. 
This code passes the values it receives from the getTransaction function, and the current balance is returned. 
Now, code the calculateBalance function in the library file.

Review the add function in the balance.js file. Note that it calls the addTransaction function of the library file, passes it values entered by the user, and doesn’t receive any value in return. 
Also note that this function can accept variable numbers of arguments, depending on whether the user entered a value for the date. Now, code the addTransaction function in the library file. 
Assume that it will use today’s date if it isn’t passed a date.
*/