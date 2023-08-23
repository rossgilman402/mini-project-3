// DEPENDENCIES (DOM Elements)

// DATA (State)
// choices
var computerChoice;
var userChoice;
// scores
var computerScore = 0;
var userScore = 0;
var tie = 0;

// FUNCTIONS (Helper Functions)

// Create a function to introduce the game
function introduceGame() {
  alert("Welcome to Rock, Paper, Scissors!");
  targetScore = prompt("Enter in the target Score!");
  if (isNaN(targetScore)) {
    alert("Error: Enter in a number length");
    return introduceGame();
  }
  return targetScore;
}

// Create a function to generate the computer input and return their answer
function getComputerChoice() {
  // Get a random number from 0-2 to get the user
  var computerChoice = Math.floor(Math.random() * 3);

  // Assign random number to Rock, Paper, Scissors
  if (computerChoice === 0) {
    return "r";
  } else if (computerChoice === 1) {
    return "p";
  } else if (computerChoice === 2) {
    return "s";
  }
}

// Create a function that will get user input to determine the user choice
function getUserChoice() {
  var userChoice = prompt("Enter in R, P, or S");

  userChoice = userChoice.toLowerCase();

  // Check if user choice is valid
  if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
    return userChoice;
  } else {
    alert("Invalid Selection\nError: Enter in R, P, or S");
    return getUserChoice();
  }
}

// Create a function to track who won the game
// parameters will be the user choice and computer choice
// return t, u, or c to determine who won the round
function trackScore(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    tie++;
    if (userChoice === "p") {
      alert("It's a tie!\nPaper equals Paper");
    } else if (userChoice == "s") {
      alert("It's a tie!\nScissors equals Scissors");
    } else {
      alert("It's a tie!\nRock equals Rock");
    }
  } else if (userChoice === "r" && computerChoice === "s") {
    userScore++;
    alert("You win!\nRock beats Scissors");
  } else if (userChoice === "s" && computerChoice === "r") {
    computerScore++;
    alert("You lose :(\nScissors loses to Rock");
  } else if (userChoice === "r" && computerChoice === "p") {
    computerScore++;
    alert("You lose :(\nRock loses to Paper");
  } else if (userChoice === "p" && computerChoice === "r") {
    userScore++;
    alert("You win!\nPaper beats Rock");
  } else if (userChoice === "s" && computerChoice === "p") {
    userScore++;
    alert("You win!\nScissors beats Paper");
  } else if (userChoice === "p" && computerChoice === "s") {
    computerScore++;
    alert("You lose :(\nPaper loses to Scissors");
  }
}

function printCurrentScores() {
  alert(
    "User Score: " +
      userScore +
      "\n" +
      "Computer Score: " +
      computerScore +
      "\n" +
      "Tie Score: " +
      tie
  );
}

function printEndWinner() {
  if (tie >= userScore && tie >= computerScore) {
    alert("Tie Game!");
  } else if (userScore > computerScore) {
    alert("YOU WIN! CONGRATS!");
  } else {
    alert("You lose :( sad!");
  }
  computerScore = 0;
  userScore = 0;
  tie = 0;
}

// start the game
function startGame() {
  // introduce the game
  // ask user for how much score one player needs to win the game
  var targetScore = introduceGame();

  //   for (var i = 0; i < targetScore; i++)
  while (
    userScore <= targetScore - 1 &&
    computerScore <= targetScore - 1 &&
    tie <= targetScore - 1
  ) {
    // ask the user for their chosen input (R, P, S) and get user selection
    userChoice = getUserChoice();
    // get the computer choice
    computerChoice = getComputerChoice();
    // compare the user and computer selection and update the score
    trackScore(userChoice, computerChoice);
    // output the user the current scores
    printCurrentScores();
    // repeat the number of times the user decided
  }
  printEndWinner();
  // after the game runs a certain amount of times it will ask if the user wants to play again
  var playAgain = confirm("Click ok to play again or cancel to end");
  if (playAgain) {
    startGame();
  }
}

// USER INTERACTIONS

// INITIALIZATIONS
// call the start game function
startGame();
