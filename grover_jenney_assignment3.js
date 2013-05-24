//Jenney Grover
//SDI 1305
//project 3

var time2Walk = 75;
var a = "Left, Left, I left my wife ";
var b = "and 42 children ";
var c = "in starving condition ";
var d = "did I do right? ";
var songLeftRight = [a, b, c, d]; 

//JSON 
var walkRoute = {
	"name": "In Town", 
	"southRoute": 4, 
	"westRoute": 4, 
	"northRoute": 4, 
	"eastRoute": 4, 
	"isSquare": true, 
	"lengthOfWalk": function(){
		var perimeter = this.southRoute + this.westRoute + this.northRoute + this.eastRoute;
		console.log("Your walk is " + perimeter + " blocks for each dog.");
		return walkRoute; 
	}, 
	"setWestRoute": function(newWestRoute){
		this.westRoute = newWestRoute; //mutator
		var perimeter = this.southRoute + this.westRoute + this.northRoute + this.eastRoute;
		console.log("Your walk is " + perimeter + " blocks for this group.");
		return newWestRoute; 
	}
};

//variables and objects
 
var owner = {
	name: "Jenney",
	age: 36, 
	hairColor: "brown", 
	walking: true,  
	location: ["in town", "the country"], 
	timePerDog: function(time2Walk){
		var perDog = time2Walk/5
		if (perDog > 10) {
			console.log("Walk the dogs each for " + perDog + " minutes.");
			return perDog;
		} else {
			console.log("Play fetch with them in the backyard.");
			return perDog;  
		}
		}
};

var dogOne = {
	name: "Sasha", 
	age: 7, 
	hairColor: "grey/brown", 
	walking: false, 
	likesTo: function(sleeping) {
		if (sleeping == true) {
			console.log("Grrr." + this.name + " says, I want to sleep.");
			return sleeping + "ly I want to go to sleep!"; 
		} else {
			console.log("Ruff. " + this.name + " says, Let's go for a walk!");
			return this.walking; 
		}
	}
};

var dogTwo = {
	name: "Penelope", 
	age: 2, 
	hairColor: "orange/brown", 
	walking: true, 
	likesTo: function() {
		if (this.walking == true) {
			console.log("Ruff. " + this.name + " says, Let's go for a walk!");
			return this.walking + "ly I want to go!"; 
		} else {
			console.log("Grrr." + this.name + " says, I want to sleep.");
			return this.walking; 
		}
	}
};

var dogThree = {
	name: "Finnegan", 
	age: 2, 
	hairColor: "black", 
	walking: true, 
	likesTo: function() {
		if (this.walking == true) {
			console.log("Ruff. " + this.name + " says, Let's go for a walk!");
			return this.walking + "ly I want to go!"; 
		} else {
			console.log("Grrr." + this.name + " says, I want to sleep.");
			return this.walking; 
		}
	}
};

var dogFour = {
	name: "Zayde", 
	age: 1, 
	hairColor: "white with spots", 
	walking: false, 
	likesTo: function() {
		if (this.walking == true) {
			console.log("Ruff. " + this.name + " says, Let's go for a walk!");
			return this.walking + "ly I want to go!"; 
		} else {
			console.log("Grrr." + this.name + " says, I want to sleep.");
			return this.walking;
		}
	} 
};

var dogFive = {
	name: "Dixie", 
	age: 1, 
	hairColor: "orange/brown with a white collar", 
	walking: false, 
	likesTo: function() {
		if (this.walking == true) {
			console.log("Ruff. " + this.name + " says, Let's go for a walk!");
			return this.walking + "ly I want to go!"; 
		} else {
			console.log("Grrr." + this.name + " says, I want to sleep.");
			return this.walking; 
		}
	}
};



//functions
//while loop
function waterTheDogs (water, waterGallons) {
    while (water < waterGallons) {
        console.log("The dogs are thirsty after their walks. They need " + water + " cups of water.")
        water+=1;
    };
    console.log("     We used this many gallons of water.");
	return waterGallons;
}

//array function 
function singSong (i, songLeftRight) {
	for (i; i<songLeftRight.length; i++) {
	console.log(songLeftRight[i]);
	} 
	console.log("We sang this many lines to the song. BUT we will NOT repeat it!");
	return songLeftRight; 
}

//main code
console.log("The total walking area for each dog's route is " + walkRoute.lengthOfWalk());
console.log("Welcome " + owner.name + " " + owner.walking + "ly you'd like to walk the dogs today, right?");
console.log(owner.timePerDog(60)); 
console.log(dogOne.likesTo(true));
console.log("Okay, " + dogOne.name + ", I will come back for you.");
console.log(dogTwo.likesTo()); 
console.log("Okay, " + dogTwo.name + ", Let's go!");
console.log(dogThree.likesTo()); 
console.log("Okay, " + dogThree.name + ", It's your turn!");
console.log(dogFour.likesTo());
console.log("Okay, " + dogFour.name + ", I will carry you while I walk the others.");
console.log("Sometimes walking gets boring. Let's sing a cadence!"); 
console.log(singSong(0, songLeftRight)); console.log("Okay, we are going on a longer walk since you are pansies and we have time! We are adding " + walkRoute.setWestRoute(8) + " blocks!")
console.log(dogFive.likesTo());
console.log("Okay, " + dogFive.name + ", Geesh! You and " + dogOne.name + " are going on a walk together. Let's go!");
console.log("After the walk, we need to water the dogs.");
console.log(waterTheDogs(5, 10)); 

