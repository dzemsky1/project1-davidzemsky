'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  $('#response-message').text('Thanks for signing up!')
  $('#sign-up').trigger('reset')
}

const error = function () {
  $('#response-message').text('Error! Error! What is wrong with you!!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#response-message').text(response.user.email + ' is Signed In and Ready to Go!')
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
}

const onSignOutSuccess = function () {
  $('#response-message').text('You signed out!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#game-board').hide()
  store.user = null
}

const onNewGameSuccess = function () {
  $('#response-message').text('Let the games begin!')
  $('#game-board').show()
}

module.exports = {
  onSignUpSuccess,
  error,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess
}
