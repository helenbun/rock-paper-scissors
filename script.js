//Get computer guess by generating a random number between 1 and 99. 
function computerChoice() {
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

console.log(computerChoice());