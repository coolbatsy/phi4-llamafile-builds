// prompt: write a simple JS text based game which directly runs in the terminal. 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerName = '';

function startGame() {
  console.log("Welcome to the Simple Text Adventure Game!");
  console.log("Please enter your name to start the adventure.");

  rl.question("What is your name? ", (name) => {
    playerName = name;
    console.log(`Hello, ${playerName}! Let's start your adventure...`);
    adventure();
  });
}

function adventure() {
  console.log("You find yourself at the entrance of a dark forest. Do you go in? (yes/no)");

  rl.question("Do you want to enter the forest? (yes/no)", (answer) => {
    if (answer.toLowerCase() === 'yes') {
      console.log("You bravely enter the dark forest. You hear strange noises and see mysterious creatures. Do you continue deeper or turn back? (continue/turn)");
      rl.question("Do you continue deeper or turn back? (continue/turn)", (decision) => {
        if (decision.toLowerCase() === 'continue') {
          console.log("You continue deeper into the forest and discover a hidden treasure chest. Do you open it? (yes/no)");
          rl.question("Do you open the treasure chest? (yes/no)", (openChest) => {
            if (openChest.toLowerCase() === 'yes') {
              console.log("You open the treasure chest and find gold coins and precious gems! You win!");
              rl.close();
            } else {
              console.log("You decide not to open the treasure chest. You leave the forest with nothing but memories. Game over.");
              rl.close();
            }
          });
        } else {
          console.log("You decide to turn back. You safely exit the forest. Game over.");
          rl.close();
        }
      });
    } else {
      console.log("You decide not to enter the forest. You stay safe at the entrance. Game over.");
      rl.close();
    }
  });
}

startGame();
