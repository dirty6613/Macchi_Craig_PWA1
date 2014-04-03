// JavaScript Document

// Name: Craig Macchi
// Date: 4/2/14
// Assignment: WEEK 1 Assignment: The Duel - Part I


// Define Variables

var playerOneName = "Spiderman";
var playerTwoName = "Superman";

var playerOneHealth = 100;
var playerTwoHealth = 100;

var playerOneDamage = 50;
var playerTwoDamage = 50;



var rd = 1;

// Fight Function
function fight(){
	var results;
	//start match
	//call player info & health
		console.log(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName +":" + playerTwoHealth);
	alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName +":" + playerTwoHealth);
	//loop through up to 10 rounds to play out the fight
	for(var i = 0; i < 10; i++){
		//random formula to generate damage
		var minDam1 = playerOneDamage * .5;
		var minDam2 = playerTwoDamage * .5;
		var f1 = Math.floor(Math.random() * (playerOneDamage - minDam1) + minDam1);
		var f2 = Math.floor(Math.random() * (playerTwoDamage - minDam2) + minDam2);
		
		//generate damage on players
		playerOneHealth = playerOneHealth - f1;
		playerTwoHealth = playerTwoHealth - f2;
		
		//Update health of players
		console.log("Round " + rd + ":" + playerOneName + ": " +playerOneHealth + " vs " + playerTwoName + ": " + playerTwoHealth + ".");
		
		//check if either player has died
		var results = winnerCheck();
		if (results === "game on"){
		alert("Round " + rd + " is over.");
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
		if(playerOneHealth < 1 || playerTwoHealth < 1){
			//check if BOTH players have died
			if(playerOneHealth < 1 && playerTwoHealth < 1){
			//output results of BOTH players death
			results = "You Both Die!";
			//check if player ONE has died and player TWO is alive
			}else if (playerOneHealth < 1 && playerTwoHealth > 0){
			//output results of player two win
			results = playerTwoName + " Wins! " + playerOneName + " Dies!";
			//check if player TWO has died and player ONE is alive
			}else if (playerTwoHealth < 1 && playerOneHealth > 0){
			//output results of player one win
			results = playerOneName + " Wins! " + playerTwoName + " Dies!";
			}
		}
		return results;

}

// Call Function
fight();