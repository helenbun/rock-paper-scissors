let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

const btns = document.querySelectorAll("button");
const round = document.querySelector("h2");

//Get computer guess by generating a random number between 1 and 99. 
function getComputerChoice() {
    let choiceNumber = 0;
    while (choiceNumber === 0) {
        choiceNumber = Math.floor(Math.random() * 100);
    }
    if (choiceNumber <= 33) {
        return "rock";
    }
    else if (choiceNumber > 33 && choiceNumber <= 66) {
        return "paper";
    }
    else if (choiceNumber > 66) {
        return "scissors"; 
    }   
}

//For one round, get human choice and computer choice.
//Determine the winner of the round.
//Print the winner to the console.
//Increment the human or computer score.

function playRound(humanChoice){
    if (humanScore < 5 && computerScore < 5) {
        round.textContent = `Round ${roundNum}`;
        let computerChoice = getComputerChoice();
        let winner = null;
        if (computerChoice === humanChoice) {
            console.log(`You both chose ${computerChoice}. It's a draw!`);
        }
        else {
            switch (humanChoice){
                case "rock":
                if (computerChoice === "paper") {
                    console.log("Paper covers rock, you lose!")
                    winner = "computer";
                    break;
                }
                else {
                    console.log("Rock breaks scissors, you win!")
                    winner = "human";
                    break;
                }
                case "scissors":
                if (computerChoice === "paper") {
                    console.log("Scissors cut paper, you win!")
                    winner = "human";
                    break;
                }
                else {
                    console.log("Rock breaks scissors, you lose!")
                    winner = "computer";
                    break;
                }
                case "paper":
                if (computerChoice === "scissors") {
                    console.log("Scissors cut paper, you lose!")
                    winner = "computer";
                    break;
                }
                else {
                    console.log("Paper covers rock, you win!")
                    winner = "human";
                    break;
                }
        }
    if (winner === "human"){
        humanScore += 1;
    }
    else {
        computerScore += 1;
        }
    }
    if (humanScore >= 5 || computerScore >=5) {
        declareWinner();
    }
    else {
    console.log(`Your score is ${humanScore}, computer score is ${computerScore}`);
    roundNum += 1;
    }
}
}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log(`You scored ${humanScore} and computer scored ${computerScore}, you win!`)  
    }
    else if (computerScore > humanScore) {
        console.log(`You scored ${humanScore} and computer scored ${computerScore}, you lose!`)
    }   
    else {
        console.log(`You both scored ${humanScore}, it's a draw!`)
    }
}

btns.forEach((btn) => btn.addEventListener("click", () => playRound(btn.id)));

/*For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection 
every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a 
programmer’s life.*/
/*Check if human score or computer score is 5, if it is the game is over.
Else, when a player clicks a button, get computer score and declare winner, add to scores.*/