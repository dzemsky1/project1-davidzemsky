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
  const cell = event.target.id
  const value = ($('#' + cell).text())
  if (value === "X" || value === "O") {
    $('#response-message').text('Cant do that!')
  } else if (turnCounter % 2 === 0) {
    $('#' + cell).text('X')
    $('#response-message').text('X is doin it!')
    turnCounter++
  } else {
    $('#' + cell).text('O')
    $('#response-message').text('O coming back strong!')
    turnCounter++
  }
}
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
  onNewTurn
}
