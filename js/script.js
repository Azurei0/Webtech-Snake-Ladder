var playerTurn = 2;
var position = [0,0];
var diceRoll;
var win = false;
var logcat = document.querySelector('.logcat');
var rollbtn= document.querySelector('.diceRoll');

rollbtn.addEventListener('click', roll);

function roll(){
  if (win == true) {
    return;
  }

  if (playerTurn == 1){
    playerTurn = 2;
    diceRoll = Math.floor(Math.random() * 6) + 1;
    position[playerTurn-1] += diceRoll;
    logcat.innerHTML += "Player 2 rolled " + diceRoll + "<br/>" ;

  if (position[playerTurn-1] >= 25){
    logcat.innerHTML += "Player 2 wins!!" + "<br/>" + "Please refresh to start new game";
    position[0] = 0;
    position[1] = 0;
    win = true;
  }
  else {
    logcat.innerHTML += "Player 2 move to " + position[playerTurn-1]  + "<br/>";
  }
}

  else if (playerTurn == 2){
    playerTurn = 1;
    diceRoll = Math.floor(Math.random() * 6) + 1;
    position[playerTurn-1] += diceRoll;
    logcat.innerHTML += "Player 1 rolled " + diceRoll  + "<br/>";

  if (position[playerTurn-1] >= 25){
    logcat.innerHTML += "Player 1 wins!!" + "<br/>"  + "Please refresh to start new game";
    position[0] = 0;
    position[1] = 0;
    win = true;
  }
   else {
   logcat.innerHTML += "Player 1 move to " + position[playerTurn-1] + "<br/>" ;
   }
 }

 else
 ;

 if(position[playerTurn-1] == 15){
   position[playerTurn-1] = 5;
   logcat.innerHTML += "Player " + playerTurn + " is caught by a snake! Player " + playerTurn + " is now in position 5" + "<br/>";
 }

 else if (position[playerTurn-1] == 23){
   position[playerTurn-1] = 16;
   logcat.innerHTML += "Player " + playerTurn + " is caught by a snake! Player " + playerTurn + " is now in position 16" + "<br/>";
 }

 else if (position[playerTurn-1] == 8){
   position[playerTurn-1] = 15;
   logcat.innerHTML += "Player " + playerTurn + " found a ladder! Player " + playerTurn + " will climb to position 15" + "<br/>";
 }
 else if (position[playerTurn-1] == 19){
   position[playerTurn-1] = 24;
   logcat.innerHTML += "Player " + playerTurn + " found a ladder! Player " + playerTurn + " will climb to position 24" + "<br/>";
 }
 else
 ;
}
