'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signed-in-options').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#game-board').on('click', authEvents.onNewTurn)//, false?)
})
