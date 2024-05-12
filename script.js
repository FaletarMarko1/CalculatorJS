let divs = document.querySelector('#results');
let buttnos = document.querySelectorAll("button");
let id;

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

let player = 0;
let computer = 0;

function game() {
    
    let playerSelection;

    
    let computerChoice = getCOmputerChoice();
    console.log(computerChoice);
    
    switch(id){
      case 1:
        playerSelection = "rock";
      case 2:
        playerSelection = "paper";
      case 3:
        playerSelection = "scissors";
      default:
        playerSelection = "rock";
    }

    let result = playOne(playerSelection, computerChoice);
    //console.log(result);
    divs.textContent = result;

    if(result == "You win!"){
        player += 1;
    }else if (result == "You lose!"){
        computer += 1;
    }else{
        player += 1;
        computer += 1;
    }
    let par = document.createElement('p');
    par.textContent = `Your score is ${player} and computers score is ${computer}!`;
    divs.appendChild(par);
    if (player == 5){
      let par2 = document.createElement('p');
      par2.textContent = 'You win';
      divs.appendChild(par2);
      player = 0;
      computer = 0;
    }else if (computer == 5){
      let par2 = document.createElement('p');
      par2.textContent = 'Computer wins';
      divs.appendChild(par2);
      player = 0;
      computer = 0;
    }
    
}

buttnos.forEach((button) =>{
  button.addEventListener("click", () => {
    game();
    id = button.id;
  });
});


