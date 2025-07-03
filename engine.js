//console.log("object");

// Buttons for player choice
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

// Keeps track of score
let computerScore = 0;
let humanScore = 0;

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

// Human choice
function getHumanChoice(callback) {
    btnRock.addEventListener("click", () => callback("Rock"));
    btnPaper.addEventListener("click", () => callback("Paper"));
    btnScissors.addEventListener("click", () => callback("Scissors"));
}

// creates box for game score text
const displayResult = document.querySelector('.displayResult');
const paraScore = document.createElement("p");
displayResult.appendChild(paraScore);

// creates box for round text
const paraRound = document.createElement("p");
displayResult.appendChild(paraRound);

// creates box for game winner announcement
const paraGame = document.createElement("h3");
// Announces winner
displayResult.appendChild(paraGame);

getHumanChoice((choice) => {
    playRound(choice, getComputerChoice());
    
    // Add text to keep track of current score and updates it
    paraScore.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

    // Announces winner
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === computerScore) {
            paraGame.textContent = "No winner this game. It's a Tie!!! 😒";
        } else if (humanScore > computerScore) {
            paraGame.textContent = "You win!!! ❤️";
        } else if (humanScore < computerScore) {
            paraGame.textContent = "You lose. Computer wins!!! 😭";
        }
        humanScore = 0;
        computerScore = 0;
    }

    if (humanScore === 1 || computerScore === 1) {
        paraGame.textContent = "";
    }
});

// Play one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        paraRound.textContent = "It's a Tie!!!";
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++
            paraRound.textContent = "You lose! Paper beats Rock";
        } else if (computerChoice === "Scissors") {
            humanScore++
            paraRound.textContent = "You win! Rock beats Scissors";
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore++
            paraRound.textContent = "You lose! Scissors beats Paper";
        } else if (computerChoice === "Rock") {
            humanScore++
            paraRound.textContent = "You win! Paper beats Rock";
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            computerScore++
            paraRound.textContent = "You lose! Rock beats Scissors";
        } else if (computerChoice === "Paper") {
            humanScore++
            paraRound.textContent = "You win! Scissors beats Paper";
        }
    }
}



// ------------------------------------------------------------------------
// Right now this function is not in use, maybe later
// Plays 5 round game
function playGame() {
    //console.log(computerSelection);
    // playRound(getHumanChoice(), computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
    // computerSelection = getComputerChoice();

    /*
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
    */
}

// playGame()