let ai_choice = Math.floor(Math.random() * 3);
let game_end = false;
let rules = [[1, 0, 2], [2, 1 ,0], [0, 2, 1]];

function reset() {
    document.getElementById("outcome-div").innerHTML = "";
    ai_choice = Math.floor(Math.random() * 3);
    game_end = false;
}

function click_rock() {
    if(game_end) return;
    let user_choice = 0;
    if(rules[user_choice][ai_choice] == 0) {
        document.getElementById("outcome-div").innerHTML += '<p id="outcome-p">Your opponenet has chosen paper!</p> <div id="outcome-d" class="choices"> <button id="defeat">Defeat</button><button id="reset">Reset</button></div>';
    }
    else if(rules[user_choice][ai_choice] == 1) {
        document.getElementById("outcome-div").innerHTML += '<p id="outcome-p">Your opponenet has chosen rock!</p> <div id="outcome-d" class="choices"> <button id="draw">Draw</button><button id="reset">Reset</button></div>';
    }
    else {
        document.getElementById("outcome-div").innerHTML += '<p id="outcome-p">Your opponenet has chosen scissors!</p> <div id="outcome-d" class="choices"> <button id="victory">Victory</button><button id="reset">Reset</button></div>';
    }

    document.getElementById("reset").addEventListener("click", reset);

    game_end = true;
}
function click_scissors() {
    if(game_end) return;

    game_end = true;
}
function click_paper() {
    if(game_end) return;
    game_end = true;
}

const rock = document.getElementById("rock");
rock.addEventListener("click", click_rock);
const paper = document.getElementById("paper");
paper.addEventListener("click", click_paper);
const scissors = document.getElementById("scissors");
scissors.addEventListener("click", click_scissors);