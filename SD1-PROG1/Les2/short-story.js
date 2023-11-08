const readlineSync = require('readline-sync');

var age = readlineSync.question("Good evening, how old are you? ");
if (age >= 18) {
    var hasID = readlineSync.keyInYNStrict("Do you have an ID? (Y/N): ");

    if (hasID) {
        console.log("You seem fine, have a nice evening.");
    } else {
        console.log("Sorry, no entry available without an ID.");
    }
} else {
    console.log("Sorry, no entry available.");
}