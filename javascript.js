const results = document.querySelector('.results');

let computerChoice;

function randomNumber() {
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(computerChoice);
}

//randomNumber();

let computerSelection

function getComputerChoice() {
if (computerChoice === 1) {
   console.log('CC: ROCK');
    computerSelection = 'ROCK';
} else if (computerChoice === 2) {
   console.log('CC: PAPER');
    computerSelection = 'PAPER';
} else {
    console.log('CC: SCISSORS');
    computerSelection = 'SCISSORS';
    
}
};

//getComputerChoice();

let playerScore = 0;

let computerScore = 0;

let playerSelection = 'none';

const rockbtn = document.getElementById('rock');
rockbtn.addEventListener('click', () => {
    playerSelection = 'ROCK';
    singleRound();
 });

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', () => {
    playerSelection = 'PAPER';
    singleRound();
 });

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    singleRound();
 });

//const btn = document.querySelectorAll('button');
//btn.forEach((btn) => {
//btn.addEventListener("click", () => {
//    rockbtn.onclick = function() { !!THIS ISN'T WORKING!!
//        playerSelection = 'ROCK'; 
//    }
//    paperbtn.onclick = function() {
//        playerSelection = 'PAPER';
//    }
//    scissorsbtn.onclick = function() {
//        playerSelection = 'SCISSORS';
//    }
//        singleRound();
// })});


//    alert('Function test working');
//};


const displayedPlayerSelection = document.createElement('p');


function singleRound() {
 //   let playerSelection = prompt("Rock, paper, scissors, SHOOT! Type your choice", 'ROCK');
 //  rockbtn.onclick = function() {
 //  playerSelection = 'ROCK';
 //  };
//console.log(playerSelection);
displayedPlayerSelection.textContent = playerSelection;
results.appendChild(displayedPlayerSelection);

randomNumber();
getComputerChoice();

let uppercasePlayerSelection = playerSelection.toUpperCase();
console.log('Your choice: ' + uppercasePlayerSelection);

console.log('Computer choice: ' + computerSelection);

    if (uppercasePlayerSelection === computerSelection) {
        console.log("It's a tie! Play again");
        return "tie";
    } else if (uppercasePlayerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        console.log('You win this round! Rock beats scissors');
        playerScore += 1;
        return "win";
    } else if (uppercasePlayerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log('You win this round! Paper beats rock');
        playerScore += 1;
        return "win";
    } else if (uppercasePlayerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log('You win this round! Scissors beats paper');
        playerScore += 1;
        return "win";
    } else if (uppercasePlayerSelection === 'ROCK' && computerSelection === 'PAPER') {
        console.log('You lose this round! Paper beats rock');
        computerScore += 1;
        return "lose";
    } else if (uppercasePlayerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log('You lose this round! Scissors beats paper');
        computerScore += 1;
        return "lose";
    } else if (uppercasePlayerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log('You lose this round! Rock beats scissors');
        computerScore += 1;
        return "lose";
    } else {
     console.log("That's not an option! Try again");
     singleRound();
     return "invalidAnswer";
    }
    }

  //singleRound();

// console.log(singleRound());
 //console.log('Your score: ' + playerScore);
 //console.log('Computer score: ' + computerScore);

 function game() {
    for (let i = 0; i < 5; i++) {
        randomNumber();
        getComputerChoice();
        singleRound();
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
 }
}

//game();

function announceResults() {
    if (playerScore > computerScore) {
        console.log("You're the winner! Final score: You: " + playerScore + " Computer: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You're the loser! Final score: You: " + playerScore + " Computer: " + computerScore);
    } else {
        console.log("It's a tie! Final score: You: " + playerScore + " Computer: " + computerScore);
    }
}

//announceResults()