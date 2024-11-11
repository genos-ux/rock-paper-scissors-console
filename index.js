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
    return choice;
}
