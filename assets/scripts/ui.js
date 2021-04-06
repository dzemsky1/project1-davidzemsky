'use strict'

let xCounter = 0
let oCounter = 0


const store = require('./store')

const onSignUpSuccess = function () {
  $('#response-message').text('Thanks for signing up!')
  $('#sign-up-form').trigger('reset')
  $('.toast').toast('show')
}

const error = function () {
  $('#response-message').text('Error! Error!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#response-message').text('')
  $('#sign-in').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#signed-in-options').show()
  $('.toast').toast('show')
  $('.toast-body').text('Youre signed in!')
}

const onSignOutSuccess = function () {
  $('#response-message').text('You signed out!')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#signed-in-options').hide()
  $('#game-options').hide()
  $('#game-board').hide()
  store.user = null
  $('.toast').toast('show')
  $('.toast-body').text('Farewell!')
}

const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#response-message').show()
  $('#response-message').text('Let the games begin!')
  $('#game-board').show()
  $('#game-options').show()
  $('.box').text('')
  $('.box').removeAttr('background')
  $('.box').css('background-color', 'white')
  $('#winner-message').text('who will win?')
  $('.toast').toast('show')
  $('.toast-body').text('Get ready to play!')
  // $('.box').css('hover', 'background-color: lightSkyBlue')
}

//store.game.id ,
const onUpdateSuccess = function () {
  console.log('keep playin')
}

const onViewGamesSuccess = function (response) {
  store.game = response.games
  const txt = store.game.length

  document.getElementById('demo').innerHTML = txt
  console.log('here is the game! Its working!')
  console.log(store.game)
}

//document.getElementById("demo").innerHTML =
// person.name + "," + person.age + "," + person.city;
//
// var x, txt = "";
// var person = {name:"John", age:30, city:"New York"};
//
// for (x in person) {
// txt += person[x] + " ";
// };

// document.getElementById("demo").innerHTML = txt;

const onUpdateWinner = function () {
  console.log('we have a win win')
}


// let counter = 0
//
// const onAdd = function () {
//   counter++
//   $('#theCount').text(counter)
// }

const onOSuccess = function () {
  if ($('#winner-message').text() === 'gameover') {
    console.log('no more moves')
  }
  else if ($('#winner-message').text() === 'who will win?') {
    $('#winner-message').text('winner!')
    oCounter++
    $('#O-score').text('O: ' + oCounter)
  } else {
    $('#winner-message').text('game over')
  }
    $('#response-message').hide()
}

const onXSuccess = function () {
  if ($('#winner-message').text() === 'gameover') {
    console.log('no more moves')
  }
  else if ($('#winner-message').text() === 'who will win?') {
    $('#winner-message').text('winner!')
    xCounter++
    $('#X-score').text('X: ' + xCounter)
  } else {
    $('#winner-message').text('game over')
  }
    $('#response-message').hide()
}



module.exports = {
  onSignUpSuccess,
  error,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onUpdateSuccess,
  onOSuccess,
  onXSuccess,
  onUpdateWinner,
  onViewGamesSuccess
}
