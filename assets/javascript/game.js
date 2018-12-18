var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessedLetters = []

document.onkeyup = function(event){
    var userGuess= event.key;
    var computerGuess = letters [Math.floor(Math.random() * letters.length)];

    if (userGuess === computerGuess) {
    wins++;
    guessesRemaining = 10;
    guessedLetters = [];
    }
      
      else {
        guessesRemaining--;
        guessedLetters.push(userGuess);
      }
      
      if (guessesRemaining === 0) {
      losses++;
      alert ("sorry, none of those were the answer");
      guessesRemaining = 10;
      guessedLetters = [];
      } 

      document.getElementById('wins').innerText = wins.toString();
      document.getElementById('losses').innerText = losses.toString();
      document.getElementById('guesses').innerText = guessesRemaining.toString();

}