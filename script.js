// when function runs it will return either paper, scissors, or rock at random. 
// 1. assign a number to each choice
// 2. return a random number 
const button = document.querySelectorAll("button");
// Initialize scores
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                const humanChoice = getHumanChoice(e);
                const computerChoice = getComputerChoice();
                const result = getWinner(humanChoice, computerChoice);

                // Update the result and scores in the DOM
                document.getElementById("result").textContent = result;
                document.getElementById("human-score").textContent = humanScore;
                document.getElementById("computer-score").textContent = computerScore;
            });
        });

// Function to get computer's random choice
function getComputerChoice() { 
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

 // Function to get human's choice from button click
 function getHumanChoice(e) {
    return e.target.id;
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// Function to determine the winner of a single round
function getWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                return "You Win! Rock beats Scissors.";
            } else {
                computerScore++;
                return "You Lose! Paper beats Rock.";
            }
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                return "You Win! Paper beats Rock.";
            } else {
                computerScore++;
                return "You Lose! Scissors beat Paper.";
            }
        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                return "You Win! Scissors beat Paper.";
            } else {
                computerScore++;
                return "You Lose! Rock beats Scissors.";
            }
        default:
            return "Invalid choice.";
    }
}





