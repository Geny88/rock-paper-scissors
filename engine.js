//console.log("object");

// Computer random picks
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Scissors";
    }
}
console.log(getComputerChoice());

// Human choice
function getHumanChoice() {
    let human = prompt("Your turn");
    return human;
}
//console.log(getHumanChoice());

// Keeps track of score
let computerScore = 0;
let humanScore = 0;

// Play one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("It's a Tie!!!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return console.log("You lose! Paper beats Rock");
    }
}

playRound(getHumanChoice(), getComputerChoice());