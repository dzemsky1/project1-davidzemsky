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

const onNewTurn = function (event) {
  const cell = $(event.target)
  const cellData = $(event.target).data('cell-index')
  const value = cell.text()
  if (value === 'X' || value === 'O') {
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
  // console.log($('#cell0').text(), $('#cell1').text(), $('#cell2').text())
  if (cell0 && cell1 && cell2 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell0 && cell1 && cell2 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell3 && cell4 && cell5 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell3 && cell4 && cell5 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell6 && cell7 && cell8 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell6 && cell7 && cell8 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell0 && cell3 && cell6 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell0 && cell3 && cell6 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell1 && cell4 && cell7 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell1 && cell4 && cell7 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell2 && cell5 && cell8 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell2 && cell5 && cell8 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell0 && cell4 && cell8 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell0 && cell4 && cell8 === 'O') {
    $('#response-message').text('We have a winner!!')
  } else if (cell2 && cell4 && cell6 === 'X') {
    $('#response-message').text('We have a winner!!')
  } else if (cell2 && cell4 && cell6 === 'O') {
    $('#response-message').text('We have a winner!!')
  }
}

//are three divs in a row 'X' or 'O'
//break each thing into columns and rows?

// console.log()


// const checkForWinner = function () {
//   if ($('.row-1').each(function (index)) === 'X' 'O' {
//     console.log($(this).text())
// })
// }

// if (cell 0, 1, 2 === x, or 3, 4, 5 === x, 6, 7, 8 === x)
// after click, value.cell.text
// if 3 in a row in array...

// $( ".row-1" ).each(function(index) {
//   console.log($(this).text())
// }






    //if (text value of cell === "")
      //$('#' + cell).text('X')
    //else (message user illegal move)



//$(event.target).data('cell-index')

  // const gameboard
  //const X
  //const gamecells = []
  //if user clicks on gameboard space, and space is empty{
    //add a token (X?) to that space (use data-cell-index).html(X)






module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onNewTurn,
  checkForWinner
}
