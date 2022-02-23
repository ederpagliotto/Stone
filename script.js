let computer = ['rock', 'paper', 'scissor'];
function computerChoice(computer) {                           
return computer[Math.floor(Math.random() * computer.length)];
}

let player = prompt("Your turn: ").toLowerCase();

let playerSelection = player;
let computerSelection = computerChoice(computer);

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
     if (computerSelection === playerSelection) {
        return console.log("It's a tie!");
     }
     else if (computerSelection === "rock" && playerSelection === "paper") {
          playerScore++;
        return console.log("You won! Paper beats rock!");
     }
     else if (computerSelection === "rock" && playerSelection === "scissor") {
          computerScore++;
         return console.log("You lose! Rock beats scissor!");
     }
     else if (computerSelection === "paper" && playerSelection === "rock") {
          computerScore++;
        return console.log("You lose! Paper beats rock!");
     }
     else if (computerSelection === "paper" && playerSelection === "scissor") {
          playerScore++;
        return console.log("You won! Scissor beats paper!");
     }
     else if (computerSelection === "scissor" && playerSelection === "rock") {
          playerScore++;
        return console.log("You won! Rock beats scissor!");
     }
     else {
          computerScore++;
        return console.log("You lose! Scissor beats paper!");
     }
  }

playRound(playerSelection, computerSelection);
console.log(playerScore);
console.log(computerScore);

let won;
function game(won) {
while (playerScore < 5 && computerScore < 5) {
     player = prompt("Your turn: ").toLowerCase();
     playerSelection = player;
     computerSelection = computerChoice(computer);
     playRound(playerSelection, computerSelection);
     console.log(playerScore);
     console.log(computerScore);
     if (playerScore === 5) {
          won = "You won the game!";
     } else if (computerScore === 5) {
          won = "You lost the game!";
     }
}
     console.log(won);
}

game(won);
