const readlineSync = require('readline-sync');

var age = readlineSync.question("Good evening, how old are you");
if (age >= 18){
    console.log("You seem fine, have a nice evening");
} else {
    console.log("sorry no entry availible");
};