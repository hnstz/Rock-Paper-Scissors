let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let a = Math.random();
    if (a <= 0.33) {
        return "rock";
    } else if (a >= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    human_choice = window.prompt("please enter rock, paper or scissors");
    return human_choice.toLowerCase();
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`the score is ${humanScore} vs ${computerScore}`)
    if (humanScore > computerScore) {
        console.log("Wow! You won!");
    } else {
        console.log("Oh.. the computer won");
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        } else if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            console.log("Draw! Everyone +1!");
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
    }
}

playGame();