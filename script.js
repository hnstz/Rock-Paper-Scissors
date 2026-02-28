let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#buttnsContainer")

const button_rock = document.createElement("button");
const button_paper = document.createElement("button");
const button_scissors = document.createElement("button");

button_rock.textContent = "Rock";
button_paper.textContent = "Paper";
button_scissors.textContent = "Scissors";

container.appendChild(button_rock);
container.appendChild(button_paper);
container.appendChild(button_scissors);


button_rock.addEventListener("click", (e) => {
    playRound("rock", getComputerChoice());
})
button_paper.addEventListener("click", (e) => {
    playRound("paper", getComputerChoice());
})

button_scissors.addEventListener("click", (e) => {
    playRound("scissors", getComputerChoice());
})



const resWin = document.createElement("div");
const res_container = document.createElement("div");
document.body.appendChild(res_container);
document.body.appendChild(resWin);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        resWin.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        resWin.textContent = "Draw!";
    } else {
        computerScore++;
        resWin.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    }
    res_container.textContent = ` you: ${humanScore} \n vs \n computer: ${computerScore}`;

    if (humanScore === 5) {
        resWin.textContent = "Congrats! You won the game!";
        humanScore = 0;
        computerScore = 0;
    }

    if (computerScore === 5) {
        resWin.textContent = "You lost the game";
        humanScore = 0;
        computerScore = 0;
    }

}



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