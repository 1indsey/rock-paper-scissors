const results = document.querySelector('.results');

let computerChoice;

function randomNumber() {
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(computerChoice);
}

//randomNumber();

const displayedComputerSelection = document.createElement('p');

let computerSelection

function getComputerChoice() {
if (computerChoice === 1) {
  // console.log('CC: ROCK');
    computerSelection = 'ROCK';
} else if (computerChoice === 2) {
 //  console.log('CC: PAPER');
    computerSelection = 'PAPER';
} else {
  //  console.log('CC: SCISSORS');
    computerSelection = 'SCISSORS';
}
displayedComputerSelection.textContent = `Computer choice: ${computerSelection}`;
results.appendChild(displayedComputerSelection);
};

//getComputerChoice();

let playerScore = 0;

let computerScore = 0;

let playerSelection = 'none';

const rockbtn = document.getElementById('rock');
rockbtn.addEventListener('click', () => {
    playerSelection = 'ROCK';
   // singleRound();
    game();
 });

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', () => {
    playerSelection = 'PAPER';
   // singleRound();
   game();
 });

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    //singleRound();
    game();
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
const singleRoundResults = document.createElement('p');


function singleRound() {
 //   let playerSelection = prompt("Rock, paper, scissors, SHOOT! Type your choice", 'ROCK');
 //  rockbtn.onclick = function() {
 //  playerSelection = 'ROCK';
 //  };
//console.log(playerSelection);
displayedPlayerSelection.textContent = `Your choice: ${playerSelection}`;
results.appendChild(displayedPlayerSelection);

randomNumber();
getComputerChoice();

let uppercasePlayerSelection = playerSelection.toUpperCase();
console.log('Your choice: ' + uppercasePlayerSelection);

console.log('Computer choice: ' + computerSelection);

    if (uppercasePlayerSelection === computerSelection) {
        singleRoundResults.textContent = "It's a tie! Play again";
        results.appendChild(singleRoundResults);
       // console.log("It's a tie! Play again");
        return "tie";
    } else if (uppercasePlayerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        singleRoundResults.textContent = "You win this round! Rock beats scissors";
        results.appendChild(singleRoundResults);
        //console.log('You win this round! Rock beats scissors');
        playerScore += 1;
        return "win";
    } else if (uppercasePlayerSelection === 'PAPER' && computerSelection === 'ROCK') {
        singleRoundResults.textContent = "You win this round! Paper beats rock";
        results.appendChild(singleRoundResults);
        //console.log('You win this round! Paper beats rock');
        playerScore += 1;
        return "win";
    } else if (uppercasePlayerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        singleRoundResults.textContent = "You win this round! Scissors beats paper";
        results.appendChild(singleRoundResults);
        //console.log('You win this round! Scissors beats paper');
        playerScore += 1;
        return "win";
    } else if (uppercasePlayerSelection === 'ROCK' && computerSelection === 'PAPER') {
        singleRoundResults.textContent = "You lose this round! Paper beats rock";
        results.appendChild(singleRoundResults);
        //console.log('You lose this round! Paper beats rock');
        computerScore += 1;
        return "lose";
    } else if (uppercasePlayerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        singleRoundResults.textContent = "You lose this round! Scissors beats paper";
        results.appendChild(singleRoundResults);
        //console.log('You lose this round! Scissors beats paper');
        computerScore += 1;
        return "lose";
    } else if (uppercasePlayerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        singleRoundResults.textContent = "You lose this round! Rock beats scissors";
        results.appendChild(singleRoundResults);
      //  console.log('You lose this round! Rock beats scissors');
        computerScore += 1;
        return "lose";
    } else {
        singleRoundResults.textContent = "That's not an option! Try again";
        results.appendChild(singleRoundResults);   
     //console.log("That's not an option! Try again");
     singleRound();
     return "invalidAnswer";
    } 
    }

  //singleRound();

// console.log(singleRound());
 //console.log('Your score: ' + playerScore);
 //console.log('Computer score: ' + computerScore);

 const displayedPlayerScore = document.createElement('p');
 const displayedComputerScore = document.createElement('p')

 function game() {
   // for (let i = 0; i < 5; i++) {
        //randomNumber();
        //getComputerChoice();
        singleRound();
        displayedPlayerScore.textContent = `Your score: ${playerScore}`;
        results.appendChild(displayedPlayerScore);  
       // console.log('Your score: ' + playerScore);
       displayedComputerScore.textContent = `Computer score: ${computerScore}`;
        results.appendChild(displayedComputerScore);
        //console.log('Computer score: ' + computerScore);
        if (playerScore >= 5) {
            finalResults.textContent = "You're the winner!";
            results.appendChild(finalResults);
            resetScores();
        };
        if (computerScore >= 5) {
            finalResults.textContent = "You're the loser!";
            results.appendChild(finalResults);
            resetScores();
        }
 }
//}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
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

//announce a winner when one player reaches 5 points
//while playerScore = 5, announce "You're the winner!"
//while computerScore = 5, announce "You're the loser!"

const finalResults = document.createElement('h3');

if (playerScore >= 5) {
    finalResults.textContent = "You're the winner!";
    results.appendChild(finalResults);
};