choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice() {  
    // math random is inclusive 1
    return choices[Math.floor((Math.random() * 3))] 
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "paper") {
        return "win"
    }

    else if (playerSelection == computerSelection) {
        return "tie"
    }

    else {
        return "lose"
    }
           
}

function game() {
    let result = ""
    let playerChoice = ""
    let computerChoice = ""
    console.log(computerChoice)

    for (i = 0; i < 5; i++) {
        playerChoice = prompt("write your choice")
        computerChoice = getComputerChoice()
        result = playRound(playerChoice,computerChoice)

        console.log(playerChoice + " vs " + computerChoice)
        if (result == 'win') {
            playerScore++
        }
        else if (result == 'lose') {
            computerScore++
        }
        else if (result == 'tie') {
            i--
        }
        
        if (playerScore == 3) {
            console.log("player wins!")
            break;
        }

        else if (computerScore == 3) {
            console.log("player lost...")
            break;
        }
    }
}

game()