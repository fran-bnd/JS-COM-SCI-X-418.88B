"use strict";

var storage = {
    keyContacts: "contacts_1",
    getContacts: function() {       
        // get string from local storage 
        var storageString = localStorage.getItem(this.keyContacts) || null;
        
        // convert string to JavaScript object and return, or return empty array if string is null
        if (storageString !== null) {
            return JSON.parse(storageString);
        } else {
            return [];
        }
    },
    setContacts: function(value) {
        // convert JavaScript object to string  
        var storageString = JSON.stringify(value);
        // store string in local storage  
        localStorage.setItem(this.keyContacts, storageString);
    },
    clearContacts: function() {
        localStorage.setItem(this.keyContacts, "");
    }
};

/*
In the contact_list.js file, note that it uses a storage object and Contact objects to add and display contacts.

In the library_storage.js file, the getContacts method converts a string to a JavaScript object and returns it, or returns an empty array if the string is null.

In the library_storage.js file, the setContacts method converts a JavaScript object to a string.
*/