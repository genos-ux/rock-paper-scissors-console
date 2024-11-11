let humanScore = 0;
let computerScore = 0;
let msg = "";
let round = 0;

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
    if(choice != null)
    {
        return choice.toLowerCase();
    }
    else
    {
        getHumanChoice();
    }

}


function playRound(humanChoice,computerChoice)
{
    if(humanChoice == "rock")
    {
        switch(computerChoice)
        {
            case "rock":
                msg = "You tie!";
                break;
            case "paper":
                msg = "You lose! Paper beats Rock.";
                computerScore++;
                break;
            case "scissors":
                msg = "You win! Rock beats scissors";
                humanChoice++;
                break;

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
                computerScore++;
                break;
            case "rock":
                msg = "You win! Paper beats Rock";
                humanScore++;
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
                computerScore++;
                break;
            case "paper":
                msg = "You win! Paper beats Scissors";
                humanScore++;
                break;

        }
    }

    else
    {
        msg = "Please choose rock, paper or scissors.";
    }

    console.log(msg);
}



// while(round < 5)
// {
//     playGround(humanSelection,computerSelection);
//     round++;
// }
for(let i = 0; i < 5; i++)
{
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection,computerSelection);
}

if(computerScore > humanScore)
{
    console.log("Computer wins!");
}
else if(humanScore > computerScore)
{
    console.log("You win!");
}

else
{
    console.log("You tie!");
}
