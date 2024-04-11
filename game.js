
/* This function determines the computer selection in a game of RockPaper Scissors */

function getComputerChoice(){
   let max = 3;
   let choice = Math.floor(Math.random() * max);

   switch(choice) {
    case 0:
        return "ROCK"
        break;

    case 1: 
        return "SCISSORS"
        break;

    case 2: 
        return "PAPER"
        break;
   }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === "ROCK") {
        if(computerSelection === "ROCK") {
            return 0;
        }
        else if (computerSelection === "PAPER"){
            return 1;
        }
        else {
            return 2;
        }
    }

    if (playerSelection === "PAPER") {
        if(computerSelection === "ROCK") {
            return 3;
        }
        else if (computerSelection === "PAPER"){
            return 4;
        }
        else {
            return 5;
        }
    }

    if (playerSelection === "SCISSORS") {
        if(computerSelection === "ROCK") {
            return 6;
        }
        else if (computerSelection === "PAPER"){
            return 7;
        }
        else {
            return 8;
        }
    }

}

function playGame () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice of rock, paper or scissors:")
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        let playerScore = 0;
        let computerScore = 0;

        switch(outcome) {
            case 0: 
                return console.log("Tie! Rock Ties Rock!")
                continue;
            case 1: 
                return console.log("You Lose! Paper Covers Rock!")
                ++computerScore;
                continue;
            case 2 :
                return  console.log("You Win! Rock Beats Scissors!")
                ++playerScore;
                continue;
            case 3:
                return  console.log("You Win! Paper covers Rock!")
                ++playerScore;
                continue;
            case 4:
                return  console.log("Tie! Paper Ties Paper!")
                continue;
            case 5:
                return console.log("You Lose! Scissors Cuts Paper!")
                ++computerScore;
                continue;
            case 6:
                return console.log("You Lose! Rock Crushes Scissors!")
                ++computerScore;
                continue;
            case 7:
                return console.log("You Win! Scissors Cuts Paper!")
                ++playerScore;
                continue;
            case 8:
                return console.log("Tie! Scissors Ties Scissors!")
                continue;
        }
        
    }
    console.log("");
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
}


playGame();