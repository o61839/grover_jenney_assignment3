//Jenney Grover
//SDI 1305
//project 3

//variables and objects
var time2Walk = 75; 

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
	likesTo: function() {
		if (this.walking == true) {
			console.log("Ruff. " + this.name + " says, Let's go for a walk!");
			return this.walking; 
		} else {
			console.log("Grrr." + this.name + " says, I want to sleep.");
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
			return this.walking; 
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
			return this.walking; 
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
			return this.walking; 
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
			return this.walking; 
		} else {
			console.log("Grrr." + this.name + " says, I want to sleep.");
			return this.walking; 
		}
	}
};


//procedure
console.log("Welcome " + owner.name + " " + owner.walking + "ly you'd like to walk the dogs today, right?");
console.log(owner.timePerDog(60)); 
console.log(dogOne.likesTo());
console.log("Okay, " + dogOne.name + ", I will come back for you.");
console.log(dogTwo.likesTo()); 
console.log("Okay, " + dogTwo.name + ", Let's go!");
console.log(dogThree.likesTo()); 
console.log("Okay, " + dogThree.name + ", It's your turn!");
console.log(dogFour.likesTo());
console.log("Okay, " + dogFour.name + ", I will carry you while I walk the others.");
console.log(dogFive.likesTo());
console.log("Okay, " + dogFive.name + ", Geesh! You and " + dogOne.name + " are going on a walk together. Let's go!");
