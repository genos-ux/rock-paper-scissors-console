let humanScore = 0;
let computerScore = 0;
let msg = "";
let round = 0;
//let fullName = prompt("Your name pls?","Jane Doe");
let fullName = "Jane";

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const display = document.querySelector('.display');

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

// const getHumanChoice = () =>
// {
//     let choice = prompt("Choose Rock,Paper or Scissors");
//     if(choice != null)
//     {
//         return choice.toLowerCase();
//     }
//     else
//     {
//         getHumanChoice();
//     }

// }


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
                humanScore++;
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

    display.innerHTML += `${msg}`;
    //console.log(msg);
}




// while(round < 5)
// {
//     playGround(humanSelection,computerSelection);
//     round++;
// }


// let humanSelection = getHumanChoice();




//playRound(humanSelection,computerSelection);

paperButton.addEventListener('click',(event) => {

    switch(getComputerChoice())
    {
        case "paper":
            msg = "You tie!";
            computerScore++;
            humanScore++;
            break;

        case "scissors":
            msg = "You lose! Scissors beats Paper.";
            computerScore++;
            break;

        case "rock":
            msg = "You win! Rock beats Paper.";
            humanScore++;
            break;
    }

    round++;

    if(round == 5)
    {
        displayScore();
    }

    else if(round > 5)
    {
        event.preventDefault();
    }

    // else
    // {
    //     displayScore();
    // }
})

rockButton.addEventListener('click',(event)=> {

    switch(getComputerChoice())
    {
        case "rock":
            msg = "You tie!";
            computerScore++;
            humanScore++;
            break;
        case "paper":
            msg = "You lose! Paper beats Rock.";
            computerScore++;
            break;
        case "scissors":
            msg = "You win! Rock beats scissors";
            humanScore++;
            break;

    }

    round++;

    if(round == 5)
        {
            displayScore();
        }

    else if(round > 5)
    {
        event.preventDefault();
    }

    // else
    // {
    //     displayScore();
    // }
})


scissorButton.addEventListener('click',(event)=> {
    switch(getComputerChoice())
    {
        case "scissors":
            msg = "You tie!";
            humanScore++;
            computerScore++;
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

    round++;

    if(round == 5)
        {
            displayScore();
        }

    else if(round > 5)
    {
        event.preventDefault();
    }



})


function displayScore()
{
    display.innerHTML =
    `
        <p>${fullName}'s score: ${humanScore}</p>
        <p>Computer's score: ${computerScore}</p>
    `

    if(computerScore < humanScore)
    {
        //console.log(fullName + " wins! Congrats!!");
        display.innerHTML += `<p>${fullName} wins! Congrats!!</p><br>`;
    }
    else if(humanScore < computerScore)
    {
        //console.log(fullName + " lose! Oops try again!!");
        display.innerHTML += `<p>${fullName} lose! Oops try again!!</p><br>`;
    }

    else if (humanScore == computerScore)
    {
        //console.log(fullName + " tie!");
        display.innerHTML += `<p>${fullName} tie!</p><br>`;
    }

}
