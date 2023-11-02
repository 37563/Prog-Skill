const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerName = "Squall";
let playerHealth = 21;
let monsterName = "Slime";
let monsterHealth = 10; // Set the monster's initial HP

function askQuestion() {
  rl.question('What will you do? (Fight or run?) ', function(antw) {
    if (antw === "Fight") {
      console.log('----------------------------------------------------------------');
      console.log(playerName + ' has ' + playerHealth + ' HP');
      console.log(playerName + ' swings his sword and does 3 DMG');

      // Update the monster's health
      monsterHealth -= 3;
      console.log(monsterName + ' has ' + monsterHealth + ' HP');
      if (monsterHealth <= 0) {
        console.log(playerName + ' defeated ' + monsterName + '!');
        rl.close(); // End the game
      } else {
        console.log(monsterName + ' ATKS and does 5 DMG');

        // Update the player's health
        playerHealth -= 5;
        console.log(playerName + ' has ' + playerHealth + ' HP');

        if (playerHealth <= 0) {
          console.log(playerName + ' has been defeated by ' + monsterName + '!');
          rl.close(); // End the game
        } else {
          askQuestion(); // Ask the next question
        }
      }
    } else if (antw === "run") {
      console.log(playerName + ' runs away from ' + monsterName);
      rl.close(); // End the game
    } else {
      console.log('Invalid choice. Please choose "Fight" or "run".');
      askQuestion(); // Ask the question again
    }
  });
}

askQuestion();
