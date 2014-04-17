// JavaScript Document

// Name: Craig Macchi
// Date: 4/16/14
// Assignment: WEEK 3 Assignment: The Duel - Part III
//(function(){
	
	window.onload = init;
	
	function init(){
console.log(" ** FIGHT ** ");


//Define doms
var fighter1_txt = document.getElementById("kabal").getElementsByTagName("p")[0];
var fighter2_txt = document.getElementById("kratos").getElementsByTagName("p")[0];
var round_txt = document.getElementsByTagName("h4")[0];
var button = document.getElementById("fight_btn");
console.log(button);
//Define Variables in an array
//var playerOne = ["Spiderman", 100, 50];
//var playerTwo = ["Superman", 100, 50];

// Define Variables in an Object
var fighters = [
{name:'Spiderman', damage:20, health:100},

{name:'Superman', damage:20, health:100}
];


var rd = 1;

//Add text for page
fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
round_txt.innerHTML = "Click to START Fight!";

//click event for start button
button.addEventListener("click",fight, false);

// Fight Function
function fight(){
	
	console.log("hh");
	//Start match - display name/health
	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
			//random formula to generate damage
		var minDam1 = fighters[0].damage * .5;
		var minDam2 = fighters[1].damage * .5;
		var f1 = Math.floor(Math.random() * fighters[0].damage + minDam1);
		var f2 = Math.floor(Math.random() * fighters[1].damage + minDam2);
	//generate damage on players
		fighters[0].health = fighters[0].health - f1;
		fighters[1].health = fighters[1].health - f2;
		
		//Update health of players
		console.log("Round " + rd + ":" + fighters[0].name + ": " +fighters[0].health + " vs " + fighters[1].name + ": " + fighters[1].health + ".");
		
		//check if either player has died
		var results = winnerCheck();
		console.log(results);
		
		round_txt.innerHTML = "ROUND " + rd + " completed";
		rd++;
		
		if (results === "no winner"){
			fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
				fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
		//alert(playerOne [0] + ": " +fighters[0] + " *ROUND " + rd + " OVER* " + playerTwo[0] + ": " + fighters[1] + ".");
		}else{
			fighter1_txt.innerHTML = '<span style = "margin-left:250px; width: 100%;">' + results + '</span>';
			fighter2_txt.innerHTML = "";
			
			button.removeEventListener("click",fight,false);
			//document.getElementById("fight_btn").disabled=true;
			//button.disable = true;
			
			//button.onclick = "return false";
			
			document.querySelector('.buttonblue').innerHTML = "DONE!!";
		
		//console.log(results);
		//alert(results);
		}
	
	//console.log(fighters[0].health, fighters[1].health);
};


function winnerCheck(){
	
	var results = "no winner";
	if (fighters[0].health < 1 && fighters[1].health < 1)
	{
		results = "YOU BOTH DIE!!!";
		
	}else if (fighters[0].health < 1){
		
		results = fighters[1].name + "WINS!!!";
		
	}else if (fighters[1].health < 1){
		
		results = fighters[0].name + "WINS!!!";
	}
	return results;
	
	
	}

//old fight function
/*function fight(){
	var results;
	//start match
	//call player info & health
		console.log(playerOne [0] + ":" + fighters[0] + " *START* " + playerTwo[0] +":" + fighters[1]);
	//alert(playerOne [0] + ":" + fighters[0] + " *START* " + playerTwo[0] +":" + fighters[1]);
	//loop through up to 10 rounds to play out the fight
	for(var i = 0; i < 10; i++){
		//random formula to generate damage
		var minDam1 = playerOne[2] * .5;
		var minDam2 = playerTwo[2] * .5;
		var f1 = Math.floor(Math.random() * (playerOne[2] - minDam1) + minDam1);
		var f2 = Math.floor(Math.random() * (playerTwo[2] - minDam2) + minDam2);
		
		//generate damage on players
		fighters[0] = fighters[0] - f1;
		fighters[1] = fighters[1] - f2;
		
		//Update health of players
		console.log("Round " + rd + ":" + playerOne [0] + ": " +fighters[0] + " vs " + playerTwo[0] + ": " + fighters[1] + ".");
		
		//check if either player has died
		var results = winnerCheck();
		if (results === "game on"){
		//alert(playerOne [0] + ": " +fighters[0] + " *ROUND " + rd + " OVER* " + playerTwo[0] + ": " + fighters[1] + ".");
		}else{
		console.log(results);
		//alert(results);
		break;
		}
	rd++;
	} //end for loop
} //end function*/




// OLD Winner Check Function
//function winnerCheck(){
	
	
	
	
	
	
	//old winnerCheck
/*	round_txt.innerHTML = "ROUND " + rd + "complete";
	rd++;
		var results = "game on";
		if(fighters[0] < 1 || fighters[1] < 1){
			//check if BOTH players have died
			if(fighters[0] < 1 && fighters[1] < 1){
			//output results of BOTH players death
			results = "You Both Die!";
			//check if player ONE has died and player TWO is alive
			}else if (fighters[0] < 1 && fighters[1] > 0){
			//output results of player two win
			results = playerTwo[0] + " Wins! " + playerOne [0] + " Dies!";
			//check if player TWO has died and player ONE is alive
			}else if (fighters[1] < 1 && fighters[0] > 0){
			//output results of player one win
			results = playerOne [0] + " Wins! " + playerTwo[0] + " Dies!";
			}
		}
		return results;
*/
//}


}
//})();

// Call Function
//fight();