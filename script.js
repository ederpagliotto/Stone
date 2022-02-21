let computer = ['rock', 'paper', 'scissor'];

function computerPlay(computer) {                           
return computer[Math.floor(Math.random() * computer.length)];
}

let playerSelection = prompt("Your turn: ").toLowerCase();
let computerSelection = computerPlay(computer);

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
   if (computerSelection === playerSelection) {
      return console.log("Empate!");
   }
   else if (computerSelection === "rock" && playerSelection === "paper") {
      return console.log("You won! Paper beats rock!");
   }
   else if (computerSelection === "rock" && playerSelection === "scissor") {
       return console.log("You lose! Rock beats scissor!");
   }
   else if (computerSelection === "paper" && playerSelection === "rock") {
      return console.log("You lose! Paper beats rock!");
   }
   else if (computerSelection === "paper" && playerSelection === "scissor") {
      return console.log("You won! Scissor beats paper!");
   }
   else if (computerSelection === "scissor" && playerSelection === "rock") {
      return console.log("You won! Rock beats scissor!");
   }
   else {
      return console.log("You lose! Scissor beats paper!")
   }
}


console.log(playRound(playerSelection, computerSelection));