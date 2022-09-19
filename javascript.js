// define variable computerChoice
// computerChoice should be a random number (either 1, 2, or 3)
// assign each output a number 1, 2 or 3 (rock = 1, paper = 2, scissors = 3)
// make function getComputerChoice
// if computerChoice is 1, output Rock
// if computerChoice is 2, output Paper
// if computerChoice is 3, output Scissors


let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
console.log(computerChoice)

let computerSelection

function getComputerChoice() {
if (computerChoice === 1) {
   // console.log('ROCK');
    computerSelection = 'ROCK'
} else if (computerChoice === 2) {
   // console.log('PAPER');
    computerSelection = 'PAPER'
} else {
    //console.log('SCISSORS');
    computerSelection = 'SCISSORS'
    
}
}

getComputerChoice()

console.log(computerSelection)

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


let playerSelection = prompt("Rock, paper, scissors, SHOOT! Type your choice", 'ROCK');
console.log(playerSelection);

let uppercasePlayerSelection = playerSelection.toUpperCase();
console.log(uppercasePlayerSelection);


function singleRound() {
    if (uppercasePlayerSelection === computerSelection) {
        console.log("It's a tie! Play again");
    } else if (uppercasePlayerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        console.log('You win! Rock beats scissors');
    } else if (uppercasePlayerSelection === 'PAPER' && computerSelection === 'ROCK') {
        console.log('You win! Paper beats rock');
    } else if (uppercasePlayerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        console.log('You win! Scissors beats paper');
    } else if (uppercasePlayerSelection === 'ROCK' && computerSelection === 'PAPER') {
        console.log('You lose! Paper beats rock');
    } else if (uppercasePlayerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log('You lose! Scissors beats paper');
    } else if (uppercasePlayerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log('You lose! Rock beats scissors');
    } else {
     console.log("oh boy")
    }
    }

 singleRound()