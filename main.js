function sayHello() {
  alert("Hello");
}

const options = ["rock", "paper", "scissors"];
function main() {
  const username = getUserName();
  startGame(username);
}

function startGame(username) {
  tellTheRules();

  const userInput = getUserInput();
  const computerInput = generateComputerInput();

  const result = compareUserAndComputerInputAndGetResult(
    userInput,
    computerInput,
    username
  );
  alert(`user input: ${userInput}`);
  alert(`computer: ${computerInput}`);
  alert(result);
  const playAgain = shouldPlayAgain();
  if (playAgain) {
    alert("Restarting game...");
    startGame(username);
  } else {
    alert("Exiting...");
    return;
  }
}

function getUserName() {
  const name = prompt("What is your name");
  if (name == null) getUserName();
  return name;
}

function tellTheRules() {
  alert(
    "At the call of ”rock, paper, scissors go” reply with rock, paper or scissors."
  );
}

function getUserInput() {
  const userInput = prompt("rock, paper, scissors go..");
  if (userInput == null) getUserInput();
  if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    alert("Invalid Input");
    getUserInput();
  }
  return userInput;
}

function generateComputerInput() {
  return options[Math.floor(Math.random() * 3)];
}

function compareUserAndComputerInputAndGetResult(
  userInput,
  computerInput,
  username
) {
  let result = "";
  if (userInput == computerInput) {
    result = "It's a draw";
  } else if (
    (userInput == "rock" && computerInput == "scissors") ||
    (userInput == "paper" && computerInput == "rock") ||
    (userInput == "scissors" && computerInput == "paper")
  ) {
    result = `${username} has won computer`;
  } else {
    result = `Computer won ${username}`;
  }
  return result;
}

function shouldPlayAgain() {
  let userResponse = prompt("Do you want to play again(y/n)?");
  if (userResponse == null) shouldPlayAgain();
  userResponse = userResponse.toUpperCase();
  if (userResponse != "Y" && userResponse != "N") {
    alert("Invalid response");
    shouldPlayAgain();
  }
  if (userResponse == "Y") return true;
  else return false;
}
