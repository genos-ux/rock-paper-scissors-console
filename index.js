let humanScore = 0;
let computerScore = 0;

function getRandomChoice(max)
{
    return Math.floor(Math.random() * max);
}

const getComputerChoice = () =>
{
    let choice = ["rock","paper","scissors"];

    let index = getRandomChoice(choice.length);

    return choice[index];
}

const getHumanChoice = () =>
{
    let choice = prompt("Choose Rock,Paper or Scissors");
    return choice.toLowerCase();
}

function playGround(humanChoice,computerChoice)
{
    let msg = "";

    if(humanChoice == "rock")
    {
        switch(computerChoice)
        {
            case "rock":
                msg = "You tie!";
                break;
            case "paper":
                msg = "You lose! Paper beats Rock.";
                break;
            case "scissors":
                msg = "You win! Rock beats scissors";

        }
    }

    else if(humanChoice == "paper")
    {
        switch(computerChoice)
        {
            case "paper":
                msg = "You tie!";
                break;
            case "scissors":
                msg = "You lose! Scissors beats Paper.";
                break;
            case "rock":
                msg = "You win! Paper beats Rock";
                break;

        }
    }

    else if(humanChoice == "scissors")
    {
        switch(computerChoice)
        {
            case "scissors":
                msg = "You tie!";
                break;
            case "rock":
                msg = "You lose! Rock beats Scissors.";
                break;
            case "paper":
                msg = "You win! Paper beats Scissors";
                break;

        }
    }


}
