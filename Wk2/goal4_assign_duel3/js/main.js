// JavaScript Document

// Name: Craig Macchi
// Date: 4/16/14
// Assignment: WEEK 3 Assignment: The Duel - Part III


// Define Variables in Array

var playerOne = ["Spiderman", 100, 50];
var playerTwo = ["Superman", 100, 50];




var rd = 1;

// Fight Function
function fight(){
	var results;
	//start match
	//call player info & health
		console.log(playerOne [0] + ":" + playerOne[1] + " *START* " + playerTwo[0] +":" + playerTwo[1]);
	alert(playerOne [0] + ":" + playerOne[1] + " *START* " + playerTwo[0] +":" + playerTwo[1]);
	//loop through up to 10 rounds to play out the fight
	for(var i = 0; i < 10; i++){
		//random formula to generate damage
		var minDam1 = playerOne[2] * .5;
		var minDam2 = playerTwo[2] * .5;
		var f1 = Math.floor(Math.random() * (playerOne[2] - minDam1) + minDam1);
		var f2 = Math.floor(Math.random() * (playerTwo[2] - minDam2) + minDam2);
		
		//generate damage on players
		playerOne[1] = playerOne[1] - f1;
		playerTwo[1] = playerTwo[1] - f2;
		
		//Update health of players
		console.log("Round " + rd + ":" + playerOne [0] + ": " +playerOne[1] + " vs " + playerTwo[0] + ": " + playerTwo[1] + ".");
		
		//check if either player has died
		var results = winnerCheck();
		if (results === "game on"){
		alert(playerOne [0] + ": " +playerOne[1] + " *ROUND " + rd + " OVER* " + playerTwo[0] + ": " + playerTwo[1] + ".");
		}else{
		console.log(results);
		alert(results);
		break;
		}
	rd++;
	} //end for loop
} //end function
// Winner Check Function
function winnerCheck(){
		var results = "game on";
		if(playerOne[1] < 1 || playerTwo[1] < 1){
			//check if BOTH players have died
			if(playerOne[1] < 1 && playerTwo[1] < 1){
			//output results of BOTH players death
			results = "You Both Die!";
			//check if player ONE has died and player TWO is alive
			}else if (playerOne[1] < 1 && playerTwo[1] > 0){
			//output results of player two win
			results = playerTwo[0] + " Wins! " + playerOne [0] + " Dies!";
			//check if player TWO has died and player ONE is alive
			}else if (playerTwo[1] < 1 && playerOne[1] > 0){
			//output results of player one win
			results = playerOne [0] + " Wins! " + playerTwo[0] + " Dies!";
			}
		}
		return results;

}

// Call Function
fight();