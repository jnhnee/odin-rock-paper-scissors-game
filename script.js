const getNum123 = num => (Math.random() * num); // getNum123(3) gives num >= 0 and less than 3
 
const getComputerChoice = num => { //returns rock,paper,scissors given num
    if(num > 2) {return "rock"}
    else if(num > 1) {return "scissors"}
    else {return "paper"}
};

console.log(getComputerChoice(getNum123(3)));
console.log(getComputerChoice(getNum123(3)));
console.log(getComputerChoice(getNum123(3)));