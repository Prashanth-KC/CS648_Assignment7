var choiceLabels = ["rock", "scissors", "paper"];

function getComputerChoice() {
  var randChoice = Math.floor(Math.random() * Math.floor(3)); 
  return randChoice;
}

var userPlaysAgain = true;

function compareChoices(firstChoice, secondChoice) {
  if((firstChoice == 0 && secondChoice == 1) || (firstChoice == 1 && secondChoice == 2) || (firstChoice == 2 && secondChoice == 0))
    return 1;
  return 0;
}

function getWinner(userChoice, computerChoice) {
 
  if(compareChoices(userChoice, computerChoice)) {
    return 1;
  }
  else if(compareChoices(computerChoice, userChoice)) {
    return -1;
  }
  else {
    return 0;
  }
}

while(userPlaysAgain) {
  var userChoice = window.prompt("Enter your choice (Rock/Paper/Scissors)").toLocaleLowerCase();
  var userChoiceLabel = choiceLabels.indexOf(userChoice);
  if(userChoiceLabel === -1) {
    window.alert("You have entered an invalid choice. Try again!!");
    continue;
  }
  var computerChoiceLabel = getComputerChoice();
  var winner = getWinner(userChoiceLabel, computerChoiceLabel);
  if(winner == 0) {
    userPlaysAgain = window.confirm("Oops!! It is a tie. Do you want to play again");
    continue;
  }
  var winnerName = winner > 0 ? "User" : "Computer";
  window.alert(winnerName + " has won the game!!");
  window.alert("Thanks for playing the game");
  break;
}