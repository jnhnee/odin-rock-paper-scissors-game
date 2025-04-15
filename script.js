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
    if(humanChoice == "rock" && computerChoice == "scissors")
    {
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChocie == "rock")
    {
        computerScore++;
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "paper")
    {
        computerScore++;
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors")
        {
            computerScore++;
            humanScore++;
        }
    else if(humanChoice == "rock" && computerChoice == "paper")
    {
        computerScore++;
    }
}

humanScore = 0;
computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
console.log(computerScore);
console.log(humanScore);

