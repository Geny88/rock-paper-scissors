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
let computerSelection = getComputerChoice();

// Human choice
function getHumanChoice() {
    let human = prompt("Your turn");
    return human;
}

// Keeps track of score
let computerScore = 0;
let humanScore = 0;

// Play one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("It's a Tie!!!");
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++
            return console.log("You lose! Paper beats Rock");
        } else if (computerChoice === "Scissors") {
            humanScore++
            return console.log("You win! Rock beats Scissors");
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore++
            return console.log("You lose! Scissors beats Paper");
        } else if (computerChoice === "Rock") {
            humanScore++
            return console.log("You win! Paper beats Rock");
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore++
            return console.log("You lose! Rock beats Scissors");
        } else if (computerChoice === "Paper") {
            humanScore++
            return console.log("You win! Scissors beats Paper");
        }
    }
}

// Plays 5 round game
function playGame() {
    //console.log(computerSelection);
    playRound(getHumanChoice(), computerSelection);
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    computerSelection = getComputerChoice();

    //console.log(computerSelection);
    playRound(getHumanChoice(), computerSelection);
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    computerSelection = getComputerChoice();

    //console.log(computerSelection);
    playRound(getHumanChoice(), computerSelection);
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    computerSelection = getComputerChoice();

    // console.log(computerSelection);
    playRound(getHumanChoice(), computerSelection);
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    computerSelection = getComputerChoice();

    // console.log(computerSelection);
    playRound(getHumanChoice(), computerSelection);
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    computerSelection = getComputerChoice();
}

playGame()

// Declares winner
if (humanScore === computerScore) {
    console.log("No winner this game. It's a Tie!!!");
} else if (humanScore > computerScore) {
    console.log("You win!!!");
} else if (humanScore < computerScore) {
    console.log("You lose. Computer wins!!!");
}

