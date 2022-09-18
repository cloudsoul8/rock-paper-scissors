choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice() {  
    // math random is inclusive 1
    return choices[Math.floor((Math.random() * 3))]
    
}
function playRound(playerSelection, computerSelection) {
    playerLower = playerSelection.toLowerCase()
    computerLower = computerSelection.toLowerCase()

    console.log(playerLower + " vs " + computerLower)
    if (playerLower == "rock" && computerLower == "scissors" ||
    playerLower == "paper" && computerLower == "rock" || 
    playerLower == "scissors" && computerLower == "paper") {
        playerScore++
        return `You win! ${playerLower} beats ${computerLower}` 
    }

    else if (playerLower == computerLower) {
        return `It's a tie. Both selected ${playerLower}`
    }

    else {
        computerScore++
        return `You lose... ${computerLower} beats ${playerLower}` 
    }
           
}

function game() {
    let playerChoice = ""
    let computerChoice = ""
    console.log(computerChoice)

    while (true) {
        playerChoice = prompt("write your choice")
        computerChoice = getComputerChoice()
        console.log(playRound(playerChoice,computerChoice)) 

        
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