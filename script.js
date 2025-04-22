function getComputerChoice()
{
    let randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice === 0)
    {
        return "rock";
    }
    else if(randomChoice === 1)
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
        console.log("Tie!");
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

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

humanScore = 0;
computerScore = 0;

playGame();
console.log("Computer Score: " + computerScore);
console.log("Your Score: " + humanScore);

