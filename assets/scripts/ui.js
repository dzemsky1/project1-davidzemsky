'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  $('#response-message').text('Thanks for signing up!')
  $('#sign-up').trigger('reset')
}

const error = function () {
  $('#response-message').text('Error! Error!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#response-message').text(response.user.email + ' is Signed In and Ready to Go!')
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#signed-in-options').show()
}

const onSignOutSuccess = function () {
  $('#response-message').text('You signed out!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#signed-in-options').hide()
  $('#game-board').hide()
  store.user = null
}

const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#response-message').text('Let the games begin!')
  $('#game-board').show()
  $('.box').text('')
  $('.box').removeAttr('background')
  $('.box').css('background-color', 'white')
  // $('.box').css('hover', 'background-color: lightSkyBlue')
}

//store.game.id ,
const onUpdateSuccess = function (response) {
  console.log('update succesful!')
}

const onCheckForWinner = function () {
  $('#winner-message').text('winner!')
}



module.exports = {
  onSignUpSuccess,
  error,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onUpdateSuccess,
  onCheckForWinner
}
