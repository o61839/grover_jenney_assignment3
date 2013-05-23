//Jenney Grover
//SDI 1305
//project 3

var count=60;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

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


var i = 0 //the counter variable for function use
var exerciser = "Jaesyn";
var pyramidChallenge = [" walking ", " kickboxing ", " Tai Chi ", " DDP Yoga ", " jogging ", " TTapp ", " pilates "];
var workoutDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var durationWorkout = [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5];
var workoutChoices = pyramidChallenge.length; 
var freeTime = 60; 
var workoutTime = 25; 
var gonnaWorkout = true; 
var gonnaSkip = false; 
var quoteLife10 = "Life is 10% what happens to you and 90% how handle it.";
var quoteNever = "\"Never give in and never give up.\" ~ Hubert H. Humphrey";
var someday = "Someday is not a day of the week"; 
var workoutMinutes=(freeTime<60)?"Do the quick workout!":"You got time to get the full burn!";

//procedure
console.log("Welcome " + exerciser + " to your workout! Which will you chose today? " + pyramidChallenge);

//boolean conditional 
if (freeTime>workoutTime) {
	console.log("You have time to workout! Your workout is: " + pyramidChallenge[i]);
	i++
	//freeTime = freeTime - workoutTime; 
	} else {
	console.log("You have time for a quick walk around the neighborhood."); 	
}
	