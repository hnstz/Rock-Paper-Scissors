let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#buttnsContainer");
const resultsContainer = document.querySelector("#resultsContainer"); 

const button_rock = document.createElement("button");
const button_paper = document.createElement("button");
const button_scissors = document.createElement("button");

button_rock.textContent = "Rock";
button_paper.textContent = "Paper";
button_scissors.textContent = "Scissors";

button_rock.classList.add("choice-btn");
button_paper.classList.add("choice-btn");
button_scissors.classList.add("choice-btn");

container.appendChild(button_rock);
container.appendChild(button_paper);
container.appendChild(button_scissors);

button_rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
button_paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
button_scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const resWin = document.createElement("div");
const res_container = document.createElement("div");

res_container.classList.add("score-board");
resWin.classList.add("round-result");

res_container.textContent = `Score: ${humanScore} - ${computerScore}`;
resWin.textContent = "Waiting for your choice...";

resultsContainer.appendChild(res_container);
resultsContainer.appendChild(resWin);

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resWin.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
        resWin.style.color = "var(--success-color)"; 
    } else if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        resWin.textContent = "Draw! Everyone gets +1!";
        resWin.style.color = "var(--text-muted)";
    } else {
        computerScore++;
        resWin.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
        resWin.style.color = "var(--danger-color)"; 
    }
    res_container.textContent = `Score: ${humanScore} - ${computerScore}`;
}

function getComputerChoice() {
    let a = Math.random();
    if (a <= 0.33) return "rock";
    if (a >= 0.66) return "paper";
    return "scissors";
}