//alert("JavaScript works!");
//Jenney Grover, SDI 1305, project 3

var count=60;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

var lineOneLambSong = "This is the song that never ends.";
var lineTwoLambSong = "It goes on and on my friend.";
var lineThreeLambSong = "Some people started sining it,";
var lineFourLambSong = "not knowing when it ends.";
var lineFiveLambSong = "And they'll continue singing it,";
var lineSixLambSong = "FOREVER just because!!!";
var songLambChop = [lineOneLambSong, lineTwoLambSong, lineThreeLambSong, lineFourLambSong, lineFiveLambSong, lineSixLambSong]; 

var neices = ["Holland", "Harper", "Finley"];
var nephews = ["Laken"];

var i = 0

//size of flower bed
var width;
var height;
var area = width * height; 
var perimeter = ((2 * width) + (2 * height));
var numberPlants;

// 60 second timer
function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}

//practice Boolean code
var p = "Jenney is the coolest aunt ever!";
var q = "Jenney planted flowers with the kiddos.";
var r = "The flowers have grown.";
var s = "The sun is shining.";
var t = "The flowers have been watered."; 


// procedure...welcome. 
function welcomeAuntie(hello) {
    if (hello === true) {
    	console.log ("Weeee! Hi! Auntie Jenney, said " + nephews[0] + "! What are we doing to do today?");
    } else {
    	console.log ("I want my mommy, said " + newphews [0] + "!");
    }
};

var auntieIsHere = welcomeAuntie(true); 

//string function with concatination
function coolAunt() {
	var bestAunt = p + " " + q; // local variable 
	return bestAunt;  // return string 
}

function theResult (flowers, sing) {
    var activityToday = "FUN";
        string = activityToday + "! We have ALL day today to play! What shall we start with? " + flowers + "? and then we can " + sing + " while we plant!";
    return string
}

var daysPlan = theResult("petunias", "Thunderstruck");

//number function
function areaFlowerBed(height, width) {
		area = height * width;
		return area; 
	
}

//number function with while statement

function countToTen (i) {
	//var i = 0 
	while (i <= 10) {
		console.log(i);
		i++;
			
	};
	console.log("     We did this many rounds of counting.");
	return i;  
}

var waterGallons = 41

function waterFlowerBed (water, waterGallons) {
    while (water < waterGallons) {
        console.log("The Flowers are thirsty. They need " + water + " gallons of water.")
        water+=5;
    };
    console.log("     We used this many gallons of water.");
	return waterGallons;
}

//boolean function
/*function flowersGrowing (r, s, t) {
	var weather = (r && (s || t));
	if (weather===true) {
		console.log("Jenney's a great gardener and teacher! The kids love the growing flowers.");
	} else {
		console.log("The kids are sad that the flowers died.");
	}
	return weather;  
}*/	

//redo of boolean function
function flowersGrowing (rain) {
	var rain; 
	if (rain===true) {
		console.log("It is raining, so we do not need to water the flowers.");
	} else {
		console.log("Oh no, the flowers are thirsty. We should water the flowers.");
	}
	return rain; 
}


//array function 
function singSong (i, songLambChop) {
	for (i; i<songLambChop.length; i++) {
	console.log(songLambChop[i]);
	} 
	console.log("We sang this many lines to the song. BUT we will NOT repeat it!");
	return i; 
}


//Outputs

console.log("Jenney has " + neices.length + " neices and " + nephews.length + " nephew.");
console.log(coolAunt());
console.log(daysPlan);  
var flowerBed = areaFlowerBed(5,7);
var numberPlants = flowerBed / 2; 
console.log("We need to go to the store to buy " + numberPlants + " number of plants, because our area of the flower bed is " + flowerBed + " square feet."); 
console.log(waterFlowerBed(1, 40)); 
console.log("Let's count to ten! Ready? Go!");
console.log(countToTen(1));  
console.log("I hope that the flowers will grow.");
//console.log("\"" + flowersGrowing (true, true, false) + "ly, Auntie is a great gardener!,\" said " + neices[2]);
console.log(flowersGrowing (false)); 
console.log("Okay, it is time to relax. So we're going to sing a song.");
console.log(singSong(1, songLambChop));
console.log("We had a fun day!");

