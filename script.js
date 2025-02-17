// when function runs it will return either paper, scissors, or rock at random. 
// 1. assign a number to each choice
// 2. return a random number 

function getComputerChoice() { 
   let randomChoice = Math.floor(Math.random() * 3) + 1;
   if (randomChoice === 1) {
      return "rock";
   } else if (randomChoice === 2) {
      return "paper";
   } else {
      return "scissors";
   }
}

function getHumanChoice() {
   return prompt("Choose rock, paper, or scissors").toLowerCase().trim();
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;



function getWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie baby";
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                return "You Win! Rock beats Scissors";
            } else {
                computerScore++;
                return "Computer picked Paper. Computer Wins!";
            }
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                return "You Win! Paper beats Rock";
            } else {
                computerScore++;
                return "Computer picked Scissors. Computer Wins!";
            }
        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                return "You Win! Scissors beat Paper";
            } else {
                computerScore++;
                return "Computer picked Rock. Computer Wins!";
            }
        default:
            return "Invalid choice";
    }
}


function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(getWinner(humanChoice, computerChoice));
        console.log(humanScore, computerScore);
    }
}



playGame(5);

