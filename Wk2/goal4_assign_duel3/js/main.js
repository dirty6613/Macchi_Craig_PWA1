// JavaScript Document

// Name: Craig Macchi
// Date: 4/16/14
// Assignment: WEEK 3 Assignment: The Duel - Part III
//(function(){
	//onload function to allow page to load prior to javascript to gather elements
	window.onload = init;
	//function call to start onload
	function init(){
	//log fight
	console.log(" ** FIGHT ** ");


	//Define doms
	var fighter1_txt = document.getElementById("kabal").getElementsByTagName("p")[0];
	var fighter2_txt = document.getElementById("kratos").getElementsByTagName("p")[0];
	var round_txt = document.getElementsByTagName("h4")[0];
	var button = document.getElementById("fight_btn");
	console.log(button);

	// Define Variables in an Object
	var fighters = [
	{name:'Spiderman', damage:20, health:100},
	
	{name:'Superman', damage:20, health:100}
	];

	//variable for starting round
	var rd = 1;

	//Add text for page
	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
	round_txt.innerHTML = "Click to START Fight!";

	//click event for start button
	button.addEventListener("click",fight, false);

	// Fight Function
	function fight(){
	
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
		
		//output round information
		round_txt.innerHTML = "ROUND " + rd + " completed";
		//increment round
		rd++;
		
		//if statement to check for winner
		if (results === "no winner"){
			fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
			fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
		}else{
			fighter1_txt.innerHTML = '<span style = "margin-left:250px; width: 100%;">' + results + '</span>';
			fighter2_txt.innerHTML = "";
			//disable event listener to end button click
			button.removeEventListener("click",fight,false);
			//change button appearance to reflect "done"
			document.querySelector('.buttonblue').innerHTML = "DONE!!";
		}
	};//end fight function


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
	}//end winnerCheck function

}//end init function
