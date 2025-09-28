const getNum123 = num => (Math.random() * num); // getNum123(3) gives num >= 0 and less than 3
 
const getComputerChoice = num => { //returns rock,paper,scissors given num
    if(num > 2) {return "rock"}
    else if(num > 1) {return "scissors"}
    else {return "paper"}
};

const getHumanChoice = () => prompt("Enter: rock, paper, scissors").toLowerCase(); //prompts user for input

let humanScore = 0, computerScore = 0;
