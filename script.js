let playerScore = 0;
let computerScore = 0;
const computerDisplay = document.getElementById('computer-display');
const playerDisplay = document.getElementById('player-display');
let resultDisplay = document.getElementById('result-display');
let computer = ['rock', 'paper', 'scissor'];
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score');


function computerChoice(computer) {                           
return computer[Math.floor(Math.random() * computer.length)];
}

let computerSelection;
let playerSelection;
const buttons = document.querySelectorAll('button');

function disableButtons() {
     buttons.forEach(e => {
          e.disabled = true;
     })
}

buttons.forEach((e) => e.addEventListener('click', () => {
     computerSelection = computerChoice(computer);
     playerSelection = e.value;
     playRound(playerSelection, computerSelection);
     computerDisplay.innerHTML = computerSelection;
     playerDisplay.innerHTML = playerSelection;
     computerScoreDisplay.innerHTML = computerScore;
     playerScoreDisplay.innerHTML = playerScore;

     if (playerScore >= 5) {
          resultDisplay.innerHTML = "Player won!"
          disableButtons();
       }
     if (computerScore >= 5) {
            resultDisplay.innerHTML = "Computer won!"
            disableButtons();
       }
}))
     




function playRound() {


     if (computerSelection === playerSelection) {
        return console.log("Draw!");
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
     else if (computerSelection === "scissor" && playerSelection === "paper") {
          computerScore++;
        return console.log("You lose! Scissor beats paper!");
     }
  }
