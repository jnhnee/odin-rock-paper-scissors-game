const getNum123 = num => (Math.random() * num); // getNum123(3) gives num >= 0 and less than 3
 
const getComputerChoice = num => { //returns rock,paper,scissors given num
    if(num > 2) {return "rock"}
    else if(num > 1) {return "scissors"}
    else {return "paper"}
};

let getHumanChoice = () => prompt("Enter: rock, paper, scissors").toLowerCase(); //prompts user for input


let humanScore = 0, computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice == "rock" && computerChoice == "scissors") {return (humanScore++, "You Won! Rock beats Scissors")}
    else if(humanChoice == "scissors" && computerChoice == "paper") {return (humanScore++, "You Won! Scissors beats Paper")}
    else if(humanChoice == "paper" && computerChoice == "rock") {return (humanScore++, "You Won! Paper beats Rock")}
    else if(computerChoice == "rock" && humanChoice == "scissors") {return (computerScore++, "You Lose! Rock beats Scissors")}
    else if(computerChoice == "scissors" && humanChoice == "paper") {return (computerScore++, "You Lose! Scissors beats Paper")}
    else if(computerChoice == "paper" && humanChoice == "rock") {return (computerScore++, "You Lose! Paper beats Rock")}
    else {return "Draw! No Score Added"}
};

console.log(playRound(getHumanChoice(), getComputerChoice(getNum123(3))));
console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
console.log(playRound(getHumanChoice(), getComputerChoice(getNum123(3))));
console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
console.log(playRound(getHumanChoice(), getComputerChoice(getNum123(3))));
console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);