function getComputerChoice()
{
    randomChoice = Math.random() * 3;

    if(randomChoice == 0)
    {
        return "Rock!";
    }
    else if(randomChoice == 1)
    {
        return "Paper!";
    }
    else
    {
        return "Scissors!";
    }
}

function getHumanChoice()
{
    userChoice = window.prompt();
    return userChoice;
}

console.log(getHumanChoice());