'use strict'

const onSignUpSuccess = function () {
  $('#response-message').text('Thanks for signing up!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (err) {
  console.error(err)
  $('#response-message').text('Error! Error! What is wrong with you!!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
