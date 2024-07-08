let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);   // Since we want in the range of 0 to 3 (i.e.  0,1,2 )
    return options[randIdx];
}

const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game was Draw. Try Again!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You Won!")
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = " green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You loose!");
        msg.innerText = `You loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //console.log("User's choice is - ", userChoice);
    const compChoice = genCompChoice();
    //console.log("Computer's choice is - ", compChoice);

    if (userChoice === compChoice) {
        // Drwa game
        drawGame();

    }
    else {
        let userWin = true;
        if (userChoice === "stone") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //stone, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //stone, paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked", userChoice);
        playGame(userChoice);

    })
})