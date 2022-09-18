// define variable computerChoice
// define computer choices 1 - 3
// assign each choice a number 1, 2 or 3 (rock = 1, paper = 2, scissors = 3)
// make function getComputerChoice
// randomly return a number between 1 and 3
// convert the outputted number to the text choice


let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
console.log(randomNumber)

function getComputerChoice() {
if (randomNumber === 1) {
    console.log('Rock');
} else if (randomNumber === 2) {
    console.log('Paper');
} else {
    console.log('Scissors');
}
}

getComputerChoice()


