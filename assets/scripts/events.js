'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.error)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.error)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.error)
}

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.error)
}

let turnCounter = 2
let winner = false



const onNewTurn = function (event) {
  const cell = $(event.target)
  const cellData = $(event.target).data('cell-index')
  const value = cell.text()
  console.log(winner)
  if (value === 'X' || value === 'O' || $('#response-message').text() === 'winner!') {
    $('#response-message').text('Cant do that!')
  } else if (turnCounter % 2 === 0) {
    cell.css('background', 'transparent').text('X')
    $('#response-message').text('X is doin it! Lets see what O can do')
    turnCounter++
  } else {
    cell.css('background', 'transparent').text('O')
    $('#response-message').text('O coming back strong! How will X respond')
    turnCounter++
  }
  const moveData = $(event.target).text()
  api.updateGame(moveData, cellData)
     .then(ui.onUpdateSuccess)
     .catch(ui.error)

}


const checkForWinner = function () {
  const cell0 = $('#cell0').text()
  const cell1 = $('#cell1').text()
  const cell2 = $('#cell2').text()
  const cell3 = $('#cell3').text()
  const cell4 = $('#cell4').text()
  const cell5 = $('#cell5').text()
  const cell6 = $('#cell6').text()
  const cell7 = $('#cell7').text()
  const cell8 = $('#cell8').text()
  if (cell0 === 'X' && cell1 === 'X' && cell2 === 'X') {
    $('#response-message').text('winner!')
    console.log(winner)
  } else if (cell0 === 'O' && cell1 === 'O' && cell2 === 'O') {
    $('#response-message').text('winner!')
  } else if (cell3 === 'X' && cell4 === 'X' && cell5 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell3 === 'O' && cell4 === 'O' && cell5 === 'O') {
    $('#response-message').text('winner!')
  } else if (cell6 === 'X' && cell7 === 'X' && cell8 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell6 === 'O' && cell7 === 'O' && cell8 === 'O') {
    $('#response-message').text('winner!')
  } else if (cell0 === 'X' && cell3 === 'X' && cell6 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell0 === 'O' && cell3 === 'O' && cell6 === 'O') {
     $('#response-message').text('winner!')

  } else if (cell1 === 'X' && cell4 === 'X' && cell7 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell1 === 'O' && cell4 === 'O' && cell7 === 'O') {
    $('#response-message').text('winner!')
  } else if (cell2 === 'X' && cell5 === 'X' && cell8 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell2 === 'O' && cell5 === 'O' && cell8 === 'O') {
    $('#response-message').text('winner!')
  } else if (cell0 === 'X' && cell4 === 'X' && cell8 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell0 === 'O' && cell4 === 'O' && cell8 === 'O') {
    $('#response-message').text('winner!')
  } else if (cell2 === 'X' && cell4 === 'X' && cell6 === 'X') {
    $('#response-message').text('winner!')
  } else if (cell2 === 'O' && cell4 === 'O' && cell6 === 'O') {
    $('#response-message').text('winner!')
  }
}






module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onNewTurn,
  checkForWinner
}
