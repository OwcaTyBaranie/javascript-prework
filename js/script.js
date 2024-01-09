let playerScore = 0;
var computerScore = 0;

var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień' ||
        argPlayerMove == 'kamień' && argComputerMove == 'nożyce' ||
        argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerScore++;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerScore++;
    }
    
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
    // Aktualizacja wyniku
    updateScore();
  }
  
  var playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  
  var computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  
  displayResult(playerMove, computerMove);
}

function updateScore() {
  var resultElement = document.getElementById('result');
  resultElement.textContent = playerScore + ' - ' + computerScore;
}

// Po załadowaniu strony aktualizuj wyniki
window.onload = function() {
  updateScore();
};

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });



