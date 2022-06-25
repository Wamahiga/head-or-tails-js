//grab selection of head or tail
const buttons = document.querySelectorAll("button");
//set values for heads and tails
let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;

function displaySelections(user, computer) {
  const playerSelection = document.querySelector("#player-selection");
  const computerSelection = document.querySelector("#computer-selection");
  if (user === "heads") {
    playerSelection.style.color = "red";
  }
  if (user === "tails") {
    playerSelection.style.color = "green";
  }
  if (computer === "heads") {
    computerSelection.style.color = "red";
  }
  if (computer === "tails") {
    computerSelection.style.color = "green";
  }
  playerSelection.innerHTML = `${user}`;
  computerSelection.innerHTML = `${computer}`;
}

function displayRandom(random) {}

function tallyScore(random, userPick, computerPick) {
  //select scoreboard from DOM
  const playerDisplay = document.querySelector("#player-score");
  const computerDisplay = document.querySelector("#computer-score");
  const winner = document.querySelector("#winner");

  if (userPick === random) {
    userScore++;
  }
  if (computerPick === random) {
    computerScore++;
  }
  playerDisplay.textContent = `${userScore}`;
  computerDisplay.textContent = `${computerScore}`;

  if (userScore === 5 && computerScore === 5) {
    winner.innerHTML = `<h1>It's a Tie</h1>`;
  } else if (userScore === 5) {
    winner.innerHTML = `<h1>You Win!!!</h1>`;
  } else if (computerScore === 5) {
    winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
  }
}

//add an event listener to the buttons
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    //Computer randomly select heads or tails
    const random = Math.round(Math.random());
    //Computer selects a random 'heads' or 'tails
    const computerPick = Math.round(Math.random());
    //Record computers selection
    let computerSelection;
    if (computerPick === 1) {
      computerSelection = "heads";
    } else {
      computerSelection = "tails";
    }

    const userSelection = e.target.id;
    let userPick;

    if (userSelection === "heads") {
      userPick = 1;
    } else if (userSelection === "tails") {
      userPick = 0;
    }

    displaySelections(userSelection, computerSelection);
    displayRandom(random);

    //Adds the score of the player and computer
    setTimeout(function () {
      tallyScore(random, userPick, computerPick);
    });
  });
});
