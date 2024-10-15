let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userRun = document.querySelector("#user-score");
let compRun = document.querySelector("#comp-score");

// Draw game
function drawGame()
{
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "black";
}

// Comp choice
function computer()
{
    let options = ["Rock","Paper", "Scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

// Main
function main(userWin, userChoice, compChoice)
{
    if(userWin)
    {
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userRun.innerText = userScore;

    }
    else
    {
        msg.innerText = `You lose, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compRun.innerText = compScore;
    }
}

// User choice
choices.forEach((evt)=>
{
    evt.addEventListener("click", ()=>
    {
        let userChoice = evt.getAttribute("id");
        let compChoice = computer();
        
        if(userChoice === compChoice)
        {
            drawGame();
        }
        else
        {
            let userWin = true;
            if(userChoice === "Rock")
            {
                userWin = (compChoice === "Scissors") ? true : false;
            }
            else if(userChoice === "Paper")
            {
                userWin = (compChoice === "Rock") ? true : false;
            }
            else
            {
                userWin = (compChoice === "Paper") ? true : false;
            }

            main(userWin, userChoice, compChoice);
        }
    })
})