const userScoreDisplay = document.querySelector('.userScore')
const computerScoreDisplay = document.querySelector('.computerScore')
const gameStartBtn = document.querySelector('.GameStartButton')
const winnerAlert = document.querySelector('.winner-alert')

let humanScore = 0
let computerScore = 0

// getting the computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1
  // returning random valids choices
  let choice = ''
  switch (randomNumber) {
    case 1: 
      choice = 'rock'
      break
    case 2: 
      choice = 'paper'
      break
    case 3: 
      choice = 'scissors'
      break
  }

  return choice
}


// getting the human | user choice 
function getHumanChoice() {
  let inputResult = false
  while (!inputResult) {
    let userInput = prompt("You should 'rock', 'paper', 'scissors'")
    userInput = userInput.toLowerCase()
    if (
      (userInput == 'rock') ||
      (userInput == 'paper') ||
      (userInput == 'scissors')
    ) {
      console.log('the valid choices done')
      inputResult = true
      return userInput
    } else {
      console.log('please enter the valid choices')
    }
  }
}

// making values to capitalize
function getCapitalizeResult(str) {
  let result = str.charAt(0).toUpperCase()
  result += str.slice(1).toLowerCase()
  return result
}

// playing round checking choices adding scores
function playRound(humanChoice, computerChoice) {
  
  console.log(`Comptuer selected "${computerChoice}" human selected "${humanChoice}"`)
  // checking the game rounds choices
  if (humanChoice === computerChoice) {
    console.log('Tie')
  } else if (
    (humanChoice == 'rock' && computerChoice == 'scissors') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissors' && computerChoice == 'paper') 
  ) {
    // make capitalize result
    humanChoice = getCapitalizeResult(humanChoice)
    computerChoice = getCapitalizeResult(computerChoice)
    // showing the player | user winning messages
    console.log(`You Wins! "${humanChoice}" beats "${computerChoice}"`)
    // ading user score   
    addingScores('user')
    theWinner = 'human'
  
  } else {
    humanChoice = getCapitalizeResult(humanChoice)
    computerChoice = getCapitalizeResult(computerChoice)
    // showing the computer winning messages
    console.log(`You Loss! "${computerChoice}" beats "${humanChoice}"`)
    // adding computer score
    addingScores('computer')
    
  }

}


// ading scores both players
function addingScores(winner) {
  if (winner == 'user') {
    humanScore += 1
    userScoreDisplay.textContent = humanScore
  } else {
    computerScore += 1
    computerScoreDisplay.textContent = computerScore
  }
}


// the game will play rounds
function playGame() {
  const humanSelection = getHumanChoice()
  const computerSelection = getComputerChoice()
  playRound(humanSelection, computerSelection)
}

function checkingWinner() {
  let winner = 'you' 
  if (computerScore == humanScore) {
    winner = 'Draw'
    
  } else if (computerScore > humanScore) {
    winner = 'computer'
  }
  return winner
}

function startingGame() {
  for (let i = 1; i <= 5; i++) {
    playGame()
  }
  // checking game winner after end the 5 rounds
  let winner = checkingWinner()
  if (winner == 'Draw') {
    winnerAlert.textContent = 'The Game will Draw'

  } else if (winner == 'you') {
    console.log('you are the main winner')
    winnerAlert.textContent = getCapitalizeResult(winner)
    winnerAlert.textContent += ' are the winner'

  } else {
    winnerAlert.textContent = getCapitalizeResult(winner)
    winnerAlert.textContent += ' is the winner'
  }
}

// game Starting 
gameStartBtn.addEventListener('click', (e) => {
  startingGame()
})