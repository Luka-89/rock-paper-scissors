let robot_choice = Math.floor(Math.random() * 3);
let game_end = false;
let round_end = false;
let round_count = 0;
let rules = [[1, 0, 2], [2, 1 ,0], [0, 2, 1]];
let trans = ["rock", "paper", "scissors"];

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let outputDiv = document.querySelector("#output-div");
let robot = document.querySelector("#robot");
let scoreRobot = document.querySelector("#score-robot");
let scorePlayer = document.querySelector("#score-player");
let choices = document.querySelector(".choices");
choices.addEventListener("click", play);

function play(e) {
    if(round_end === true) return;
    else if(e.target === rock) {
        playRPS(rules[0][robot_choice]);
        rock.classList.add("active");
        paper.classList.add("passive");
        scissors.classList.add("passive");
    }
    else if(e.target === paper) {
        playRPS(rules[1][robot_choice]);
        paper.classList.add("active");
        rock.classList.add("passive");
        scissors.classList.add("passive");
    }
    else if(e.target === scissors) {
        
        playRPS(rules[2][robot_choice]);
        scissors.classList.add("active");
        rock.classList.add("passive");
        paper.classList.add("passive");
    }
}

function playRPS(outcome) {
    let resetButton = document.createElement("button");
    let outcomeDiv = document.createElement("div");

    resetButton.addEventListener("click", resetRound);
    resetButton.textContent = "Reset";
    resetButton.className = "reset";
    
    if(outcome === 0) {
        outcomeDiv.textContent = "Defeat";
        outcomeDiv.className = "defeat";
        scoreRobot.textContent = parseInt(scoreRobot.textContent) + 1;
    }
    else if(outcome === 1) {
        outcomeDiv.textContent = "Draw";
        outcomeDiv.className = "draw";
    }
    else {
        outcomeDiv.textContent = "Victory";
        outcomeDiv.className = "victory";
        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 1;
    }

    if(robot_choice === 0) robot.textContent = "🪨";
    else if(robot_choice === 1) robot.textContent = "📄";
    else robot.textContent = "✂️";

    outputDiv.appendChild(outcomeDiv);
    outputDiv.appendChild(resetButton);

    round_end = true;
}

function resetRound() {
    outputDiv.innerHTML = "";
    robot.textContent = "";
    robot_choice = Math.floor(Math.random() * 3);
    round_end = false;

    rock.classList.remove("active", "passive");
    paper.classList.remove("active", "passive");
    scissors.classList.remove("active", "passive");
}