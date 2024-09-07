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

console.log(getComputerChoice());
console.log(getHumanChoice());