function getComputerChoice()
{
    randomChoice = Math.random() * 3;

    if(randomChoice == 0)
    {
        return "rock";
    }
    else if(randomChoice == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    userChoice = window.prompt().toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice) 
    {
        // no point
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore++;
        console.log("You Win!");
    }
    else {
        computerScore++;
        console.log("You lose!");
    }
}

humanScore = 0;
computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
console.log("Computer Score: " + computerScore);
console.log("Your Score: " + humanScore);

