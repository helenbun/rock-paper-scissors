let humanScore = 0;
let computerScore = 0;

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

//Take user input, if it is not rock, paper or scissors, prompt again. If valid option, return it.

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice, please input rock, paper or scissors.");
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;

}

//For one round, get human choice and computer choice.
//Determine the winner of the round.
//Print the winner to the console.
//Increment the human or computer score.

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
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
}

playRound();