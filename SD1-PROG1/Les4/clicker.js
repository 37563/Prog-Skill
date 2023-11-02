let score = 0;

var randomVar = require('readline-sync');

function main() {
    console.log(`score: ${score}`);
    const userInput = randomVar.question("Wil je klikken?");

    if (userInput === "ja" || userInput === "") {
        score++;
        main();
    } else {
        console.log(`Game over, je score is ${score} punten`);
    }
}

main();