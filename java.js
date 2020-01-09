const container = document.querySelector("#container");

const resultContainer = document.querySelector("#resultDiv");
resultContainer.style.display="block";
resultContainer.style.position="absolute";

const scoreContainer = document.querySelector("#scoreDiv");
scoreContainer.style.display="block";
scoreContainer.style.marginTop="5em";

const scoreWin = document.getElementById("winnerCount");
const scoreLose = document.getElementById("loserCount");
const finalResult = document.querySelector("h2");

let gameCount = 0;
let winCount = 0;
let loseCount = 0;
const buttonSelection = document.querySelectorAll("button");
buttonSelection.forEach(button => button.addEventListener('click', game));

function game(e) {
    playARound(e.target.innerText, computerPlay());
    printScore();
    gameCount+=1;
    finalResultPrinter();             
    }    

function finalResultPrinter() {
    if (gameCount == 5){
        if (winCount == loseCount) {
            finalResult.textContent = "This game is a tie! Both players won " + winCount + " rounds. Press any button to play again!";
        } else if (winCount > loseCount) {
            finalResult.textContent = "You win! Beating the computer with " + winCount + " rounds to " + loseCount + " rounds. Press any button to play again!";
        } else {
            finalResult.textContent = "You Lose! The computer beat you with " + loseCount + " rounds to " + winCount + " rounds. Press any button to play again!";
        }
        loseCount = 0;
        winCount = 0;
        gameCount = 0;
    }
}

function computerPlay() {   /*Choice generation for computer*/
    const choiceList = ["Rock", "Paper", "Scissors"];
    let computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
    return computerChoice;
}

function printScore() {   /*Score keeping function*/
        scoreWin.textContent = winCount;
        scoreLose.textContent = loseCount;
}

function playARound(playerSelection, computerSelection) {    /*Game of RPS utilising previous function for player inputs*/
    finalResult.textContent = "";
    if (playerSelection == computerSelection) {
        gameResult.textContent = "Draw!";
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") | (playerSelection == "Scissors" && computerSelection == "Rock") | (playerSelection == "Paper" && computerSelection == "Scissors")){
        gameResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        loseCount += 1;
    } else {
        gameResult.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        winCount += 1;
    }
}