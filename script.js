let humanScore=0, computerScore=0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3 ));
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Do you choose Rock, Paper, or Scissors?");
    if (choice) {choice = choice.toUpperCase()};
    switch (choice) {
        case "ROCK":
            return choice;
        case "PAPER":
            return choice;
        case "SCISSORS":
            return choice;
        case "":
            alert("Cancelled");
            break;
        case null:
            alert("Cancelled")
            break;
        default:
            alert("Please choose a valid option: 'Rock', 'Paper', or //'Scissors'\n Double check your spelling.");
            return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if(!humanChoice || !computerChoice) {
        return "ERROR"
    }
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    const WIN_CONDITIONS = [`You Lose! ${computerChoice} beats ${humanChoice}`, `You Win! ${humanChoice} beats ${computerChoice}`, "Tie!"]

    let scoreDeclaration = `Human Choice: ${humanChoice}\nComputer Choice: ${computerChoice}`;
    let winner;

    if (humanChoice == computerChoice) {
        winner = WIN_CONDITIONS[2];
    } else {
        switch (humanChoice) {
            case "ROCK":
                switch (computerChoice) {
                    case "PAPER":
                        computerScore++;
                        winner = WIN_CONDITIONS[0];
                        break;
                    case "SCISSORS":
                        humanScore++;
                        winner = WIN_CONDITIONS[1];
                        break;
                }
                break;
            case "PAPER":
                switch (computerChoice) {
                    case "SCISSORS":
                        computerScore++;
                        winner = WIN_CONDITIONS[0];
                        break;
                    case "ROCK":
                        humanScore++;
                        winner = WIN_CONDITIONS[1];
                        break;
                }
                break;
            case "SCISSORS":
                switch (computerChoice) {
                    case "ROCK":
                        computerScore++;
                        winner = WIN_CONDITIONS[0];
                        break;
                    case "PAPER":
                        humanScore++;
                        winner = WIN_CONDITIONS[1];
                        break;  
                }
                break;
        }
    }

    alert(`${scoreDeclaration}\n${winner}\nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`)

    console.log(`Human Choice: ${humanChoice}\nComputer Choice: ${computerChoice}`)
}

function playGame(numberOfRounds) {
    if (isNaN(numberOfRounds)) {playGame()}
    let humanScore=0, computerScore=0;
    let i=0;
    while (i < numberOfRounds) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }
}

function testComputerChoiceDistribution(trials=100) {
    let choices = [];
    for (let i=0; i<trials; i++) {
        choices.push(getComputerChoice());
    }
    
    let rock=0, paper=0, scissors=0;
    
    for (let j=0; j<choices.length; j++) {
        let choice = choices[j];
        switch(choice) {
            case "Rock":
                rock++;
                break;
            case "Paper":
                paper++;
                break;
            case "Scissors":
                scissors++;
                break;
        }
    }
    
    let rockPer = Math.floor((rock / (trials)) * 1000) / 10;
    let paperPer = Math.floor((paper / (trials)) * 1000) / 10;
    let scissorsPer = Math.floor((scissors / (trials)) * 1000) / 10;

    console.log(`Total Trials: ${trials}`);
    
    console.log(`Rock: ${rock} | ${rockPer}%\nPaper: ${paper} | ${paperPer}% \nScissors: ${scissors} | ${scissorsPer}%`)
}

testComputerChoiceDistribution(10000);


// playRound(getHumanChoice(), getComputerChoice())

function getNumberOfRounds() {
    const rounds = Number(prompt("Welcome to Rock Paper Scissors!\nHow many rounds would you like to play?"));

    if (isNaN(rounds)) {
        alert("How many rounds of Ro-Sham-Bo do you want to play?\nPlease enter a number")
        getNumberOfRounds()
    } else if (rounds <= 0) {
        alert("You are here to play at least one round of Jan-ken-pon\nIf you do not want to play, navigate to a different website.\nPlease enter a positive integer number of rounds.");
        getNumberOfRounds();
    }
    return rounds;
}

const app = document.getElementById("app");

const results = document.createElement("div");
results.classList.add("game");

const button = document.createElement("button");
button.classList.add("replay");
button.innerText = "Play Tic Tac Toe";

const settings = document.createElement("div");
settings.classList.add("settings");
settings.innerText = "Test"

results.appendChild(button);
// results.appendChild(settings);

app.appendChild(results);

button.addEventListener("click", () => {
    let won = playGame(5);
})