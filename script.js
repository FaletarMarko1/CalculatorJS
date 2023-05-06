function getCOmputerChoice() {
  let odabir = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * odabir.length);

  return odabir[random];
}

function playOne(playerSelection, computerChoice) {
  if (playerSelection === computerChoice) {
    return "It's a tie!";
  } else if (playerSelection == "rock" && computerChoice == "scissors") {
    return "You win!";
  } else if (playerSelection == "scissors" && computerChoice == "paper") {
    return "You win!";
  } else if (playerSelection == "paper" && computerChoice == "rock") {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function game() {
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
    let computerChoice = getCOmputerChoice();
    console.log(computerChoice);
    let playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase();

    let result = playOne(playerSelection, computerChoice);
    console.log(result);

    if(result == "You win!"){
        player += 1;
    }else if (result == "You lose!"){
        computer += 1;
    }else{
        player += 1;
        computer += 1;
    }
    console.log(`Your score is ${player} and computers score is ${computer}!`)
    }
}

game();
