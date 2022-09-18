choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice() {  
    // math random is inclusive 1
    return choices[Math.floor((Math.random() * 3))]
}

function checkRoundResult(playerSelection, computerSelection) {
    const roundContainer = document.querySelector('#round-container')
    
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        roundContainer.textContent = `${playerSelection} vs ${computerSelection}. you won this round!`

    }

    else if (playerSelection == computerSelection) {
        roundContainer.textContent = `${playerSelection} vs ${computerSelection}. it's a tie round!`
    }

    else {
        computerScore++
        roundContainer.textContent = `${playerSelection} vs ${computerSelection}. you lost this round...`

    }

    updateScoreDisplay()
    checkIfGameEnd()
           
}

function checkIfGameEnd() {
    if (playerScore === 3) {
        updateResultContainer("you won the game!")
        disableButtons()
    }
    
    if (computerScore === 3) {
        updateResultContainer("you lost the game...")
        disableButtons()
    }
    
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

function updateResultContainer(msg) {
    const result = document.querySelector("#result-container")
    result.textContent = msg
}

function updateScoreDisplay() {
    const playerScoreDiplay = document.querySelector('#player-score')
    const computerScoreDiplay = document.querySelector('#computer-score')

    playerScoreDiplay.textContent = `player score: ${playerScore}`
    computerScoreDiplay.textContent = `cpu score: ${computerScore}`
}

function playRound(e) {
    checkRoundResult(e.srcElement.id, getComputerChoice())
    
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', playRound)
})

