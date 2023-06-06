"use strict";

var Contact = function(first, last, org, phone, email) {
    if (arguments.length > 0) {
        this.firstName = first;
        this.lastName = last;
        this.organization = org;
        this.phone = phone;
        this.email = email;
    }
};

Contact.prototype.isValid = function() {
    // must have first and last name, and either phone number or email address
    var isValid = true; 
    if (this.firstName === "" || this.lastName === "") { isValid = false; }
    if (this.phone === "" && this.email === "") { isValid = false; }
    return isValid;
};

Contact.prototype.displayContact = function() {
    return this.firstName.concat(" ", this.lastName, ", ", 
        this.organization, "<br>Phone: ", this.phone, " <br>Email: ",
        this.email, "<hr>");
};

Contact.prototype.loadJsonObject = function(obj) {
    // json object from storage to populate properties
    if (typeof obj === "object") {
        if (obj.hasOwnProperty("f")) {
            this.firstName = obj.f;
        }
        if (obj.hasOwnProperty("l")) {
            this.lastName = obj.l;
        }
        if (obj.hasOwnProperty("o")) {
            this.organization = obj.o;
        }
        if (obj.hasOwnProperty("p")) {
            this.phone = obj.p;
        }
        if (obj.hasOwnProperty("e")) {
            this.email = obj.e;
        }
    }
};

Contact.prototype.toJSON = function() {
    // shorten property names for storage
    var json = {};
    if (typeof this.firstName !== "undefined") {
        json.f = this.firstName;
    }
    if (typeof this.lastName !== "undefined") {
        json.l = this.lastName;
    }
    if (typeof this.organization !== "undefined") {
        json.o = this.organization;
    }
    if (typeof this.phone !== "undefined") {
        json.p = this.phone;
    }
    if (typeof this.email !== "undefined") {
        json.e = this.email;
    }
    return json;
};

/*
Code to the toJSON method that shortens the property names (the JSON string above to see what the short names should be).

In the library_contact.js file, the loadJsonObject method uses the object with short names to populate the Contact object’s properties.

Notice that it allows to store a phone number with dashes, slashes, plus signs, etc., but it displays the phone numbers exactly as you enter them.
*/