let computer = ['Rock', 'Paper', 'Scissor'];

function computerPlay(computer) {                           
return computer[Math.floor(Math.random() * computer.length)];
}

console.log(computerPlay(computer));