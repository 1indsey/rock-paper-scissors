// define variable computerChoice
// computerChoice should be a random number (either 1, 2, or 3)
// assign each output a number 1, 2 or 3 (rock = 1, paper = 2, scissors = 3)
// make function getComputerChoice
// if computerChoice is 1, output Rock
// if computerChoice is 2, output Paper
// if computerChoice is 3, output Scissors

let computerChoice;

function randomNumber() {
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
 // console.log(computerChoice);
}

randomNumber();

let computerSelection

function getComputerChoice() {
if (computerChoice === 1) {
   //console.log('CC: ROCK');
    computerSelection = 'ROCK';
} else if (computerChoice === 2) {
   //console.log('CC: PAPER');
    computerSelection = 'PAPER';
} else {
  //  console.log('CC: SCISSORS');
    computerSelection = 'SCISSORS';
    
}
}

//getComputerChoice()

//console.log('Computer choice: ' + computerSelection)

//play a single round
//prompt user for choice
//player chooses rock, paper, or scissors
//should be case insensitive
//define variable that is the player's choice
//computer chooses rock, paper, or scissors
//[if player choice equals computer choice
//tie]
//[if player chooses rock, CPU chooses paper OR
//if player chooses paper, CPU chooses scissors OR
//if player chooses scissors, CPU chooses rock
//player loses]
//[if player chooses rock, CPU chooses scissors OR
//if player chooses paper, CPU chooses rock OR
//if player chooses scissors, CPU chooses paper OR
//player wins]


//let playerSelection = prompt("Rock, paper, scissors, SHOOT! Type your choice", 'ROCK');
//console.log(playerSelection);

//let uppercasePlayerSelection = playerSelection.toUpperCase();
//console.log(uppercasePlayerSelection);

let playerScore = 0;

let computerScore = 0;

function singleRound() {
    let playerSelection = prompt("Rock, paper, scissors, SHOOT! Type your choice", 'ROCK');
//console.log(playerSelection);

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

game();

function announceResults() {
    if (playerScore > computerScore) {
        console.log("You're the winner! Final score: You: " + playerScore + " Computer: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You're the loser! Final score: You: " + playerScore + " Computer: " + computerScore);
    } else {
        console.log("It's a tie! Final score: You: " + playerScore + " Computer: " + computerScore);
    }
}

announceResults()

//play 1 round
//announce result of round
//define playerScore
//define computerScore
//if singleround result == win
// +1 to playerScore
//if singleRound result == lose
// +1 to computer score
//repeat until 5 rounds have been played
// if playerScore > computerScore
// announce You are the winner!
// if playerScore < computerScore
// announce You are the loser!

