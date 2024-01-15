let userChoice = 0;
let pcSelection = 0;
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const checkWinner = (player, system) => {
  if (player === system) {
    return "even";
  } else if (player === "rock") {
    return system === "paper" ? "computer" : "player";
  } else if (player === "paper") {
    return system === "rock" ? "player" : "computer";
  } else {
    return system === "rock" ? "computer" : "player";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You win.");
    playerScore++;
  } else if (result === "computer") {
    console.log("You lose.");
    computerScore++;
  } else if (result === "even") {
    console.log("It's even.");
  }
  console.log(`Your score :${playerScore}`);
  console.log(`Computer score :${computerScore}`);
  console.log("-------------------");
};

const finalWinner = (userScore, pcScore) => {
  if (userScore === 5) {
    console.log(`"You" are the final winner.`);
    return;
  } else if (pcScore === 5) {
    console.log(`"Computer" is the final winner.`);
    return;
  } else {
    playGame();
  }
};
const playGame = () => {
  userChoice = prompt("choose rock, paper, scissors");
  if (choices.indexOf(userChoice?.toLowerCase()) !== -1) {
    console.log(`You choose: ${userChoice}`);
  } else {
    console.log("You cheated");
    console.log("-------------------");
    return;
  }
  const randomNumber = Math.floor(Math.random() * choices.length);
  pcSelection = choices[randomNumber];
  console.log(`Computer choose: ${pcSelection}`);
  const gameResult = checkWinner(userChoice, pcSelection);
  showResult(gameResult);
  finalWinner(playerScore, computerScore);
};

playGame();
