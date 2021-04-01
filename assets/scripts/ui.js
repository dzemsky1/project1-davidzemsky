'use strict'

const onSignUpSuccess = function () {
  $('#response-message').text('Thanks for signing up!')
  $('#sign-up').trigger('reset')
}

const error = function (err) {
  console.error(err)
  $('#response-message').text('Error! Error! What is wrong with you!!')
}

const onSignInSuccess = function () {
  $('#response-message').text('All Signed In and Ready to Go!')
  $('#sign-in').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  error,
  onSignInSuccess
}
