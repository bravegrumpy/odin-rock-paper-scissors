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
        case "YOUR MOM":
        case "YOUR MUM":
            choice = "Your Dad";
            alert(choice);
            return getHumanChoice();
        case "YOUR DAD":
            const randMumMom = Math.floor(Math.random() * 2);
            let mumMom;
            switch (randMumMom) {
                case 0:
                    mumMom = "Mum";
                    break;
                case 1:
                    mumMom = "Mom";
                    break;
            }
            choice = `Your ${mumMom}`;
            return getHumanChoice();
        case "YOUR MA":
            choice = "Your Da";
            alert(choice);
            return getHumanChoice();
        case "YOUR DA":
            choice = "Your Ma";
            alert(choice);
            return getHumanChoice();
        case "YOUR MAMI":
            choice = "Your Papi";
            alert(choice);
            return getHumanChoice();
        case "YOUR PAPI":
            choice = "Your Mami";
            alert(choice);
            return getHumanChoice();
        case "YOUR MAMA":
        case "YOUR MAMMA":
            choice = "Your Daddy";
            alert(choice);
            return getHumanChoice();
        case "YOUR DADDY":
            const randMammaMama = Math.floor(Math.random() * 3);
            let mammaMama;
            switch (randMammaMama) {
                case 0:
                    mammaMama = "Mama";
                    break;
                case 1:
                    mammaMama = "Mamma";
                    break;
                case 2:
                    mammaMama = "Momma";
                    break;
            }
            choice = `Your ${mammaMama}`;
            alert(choice);
            return getHumanChoice();
        case "":
            alert("Cancelled");
            break;
        case null:
            alert("Cancelled")
            break;
        default:
            alert("Please choose a valid option: 'Rock', 'Paper', or 'Scissors'\n Double check your spelling.");
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
    // let humanScore=0, computerScore=0;
    resetScores();
    humanScore = sessionStorage.getItem("humanScore");
    computerScore = sessionStorage.getItem("computerScore");
    let i=0;
    while (i < numberOfRounds) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }
    sessionStorage.setItem("humanScore", humanScore);
    sessionStorage.setItem("computerScore", computerScore);
    if (humanScore > computerScore) {
        return "You Win!"
    } else if (computerScore > humanScore) {
        return "You Lose!"
    } else {
        return "Tie!"
    }
}

function resetScores() {
    sessionStorage.setItem("humanScore", 0);
    sessionStorage.setItem("computerScore", 0);
}

function clearScores() {
    sessionStorage.removeItem("humanScore");
    sessionStorage.removeItem("computerScore");
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

    let totalTrialsString = `Total Trials: ${trials}`;

    let outcomeString = `Rock: ${rock} | ${rockPer}%\nPaper: ${paper} | ${paperPer}% \nScissors: ${scissors} | ${scissorsPer}%`;

    console.log(totalTrialsString);
    
    console.log(outcomeString);

    return `${totalTrialsString}\n\n${outcomeString}`;
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
button.innerText = "Play Rock Paper Scissors";

const settings = document.createElement("div");
settings.classList.add("settings");

let settingLabel = document.createElement("label");
settingLabel.classList.add("roundsLabel");
settingLabel.innerText = "Number of Rounds:"

let rounds = document.createElement("input");
rounds.classList = "roundsInput";
rounds.type = "number";
rounds.id = "roundsInput";
rounds.value = 3;
rounds.min = 1;
rounds.max = 10;

settings.appendChild(settingLabel);
settings.appendChild(rounds);

const winner = document.createElement("div");
winner.classList.add("settings");
winner.classList.add("winner");

const prevWinner = document.createElement("p");
prevWinner.id = "prevWinner"
prevWinner.classList.add("roundsLabel");

const prevWinnerButton = document.createElement("button");
prevWinnerButton.classList.add("replay");
prevWinnerButton.id = "prevWinnerButton";
prevWinnerButton.innerText = "Play Game!";

prevWinner.appendChild(prevWinnerButton);

winner.appendChild(prevWinner);

const runFairness = document.createElement("div");
runFairness.classList.add("settings");
runFairness.classList.add("fairness");
runFairness.id = "runFairness";

const fairnessIntro = document.createElement("h2");
fairnessIntro.innerText = "Computer Choice Outcome Distribution";

let fairness = document.createElement("p");
fairness.innerText = testComputerChoiceDistribution(10000);

runFairness.appendChild(fairnessIntro);
runFairness.appendChild(fairness);

results.appendChild(button);
results.appendChild(settings);
results.appendChild(winner);
results.appendChild(runFairness);

app.appendChild(results);

function playGameUI() {
    const numbInput = document.querySelector("input#roundsInput");
    let numbRounds = numbInput.value;
    const winner = document.querySelector("p#prevWinner");
    winner.innerHTML = '';

    const prevWinner = playGame(numbRounds);
    winner.innerText = `Last Result: ${prevWinner}`;
}

button.addEventListener("click", () => {
    playGameUI();
})

prevWinnerButton.addEventListener("click", () => {
    playGameUI();
})

const allSettings = document.querySelectorAll(".settings");

allSettings.forEach((setting) => {
    setting.classList.add("hide");
})

const stats = document.querySelector("div#stats");
const showStats = document.createElement("button");
showStats.classList.add("showStats");
showStats.id = "showStats";
showStats.innerText = "Show More";

showStats.addEventListener("click", () => {
    allSettings.forEach((setting) => {
        setting.classList.toggle("hide");
        if (showStats.innerText === "Show More") {
            showStats.innerText = "Hide More"
        } else if (showStats.innerText === "Hide More") {
            showStats.innerText = "Show More";
        }
    })
})

stats.appendChild(showStats);