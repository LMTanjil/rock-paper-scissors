let userScore = 0;
let compScore = 0;

let winMsg = document.getElementById("win-msg")
const choices = document.querySelectorAll(".choice");
let userSP = document.querySelector("#user-score");
let compSP = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranOpt = Math.floor(Math.random()*3);
    return options[ranOpt];
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userSP.innerText = userScore;
        winMsg.innerText = "Congratulation 🎉,You win!";
        winMsg.style.color ="#00FF00";
    }else{
        compScore++;
        compSP.innerText = compScore;
        winMsg.style.color ="#800020";
        winMsg.innerText = "Computer win!,😞 You lose!";
    }
}

const drawGame = () => {
    winMsg.style.color ="#f0f0f0";
    winMsg.innerText = "Game was draw 🤝";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(compChoice,userChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
    showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
})