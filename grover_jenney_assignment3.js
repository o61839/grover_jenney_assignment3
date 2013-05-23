//Jenney Grover
//SDI 1305
//project 3

//variables and objects
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

var workoutWarmUp = {
	workout: "Pyramid Walk",
	minutes: 5, 
	aerobic: true, 
	speed: "Slow to Medium Walk", 
	location: ["outside", "inside"],
};

var workoutCoolDown = {
	workout: "Pyramid Walk",
	minutes: 5, 
	aerobic: true, 
	speed: "Slow to Medium Walk", 
	location: ["outside", "inside"],
};

var workoutLevelOne = {
	workout: ["walking", "jogging"], 
	minutes: 1, 
	aerobic: true, 
	speed: "Level One: Medium to Brisk Walk/Jog", 
	location: ["outside", "inside"],
	timer: minuteTimer() 
};

var workoutLevelTwo = {
	workout: ["walking", "jogging"], 
	minutes: 1, 
	aerobic: true, 
	speed: "Level Two: Brisk Walk/Jog", 
	location: ["outside", "inside"],
};

var workoutLevelThree = {
	workout: ["walking", "jogging"], 
	minutes: 1, 
	aerobic: true, 
	speed: "Level Three: Increase Speed or Incline", 
	location: ["outside", "inside"],
};

var workoutLevelFour = {
	workout: ["walking", "jogging"], 
	minutes: 1, 
	aerobic: true, 
	speed: "Level Four: Increase Speed or Incline", 
	location: ["outside", "inside"],
};

var workoutLevelFive = {
	workout: ["walking", "jogging"], 
	minutes: 1, 
	aerobic: true, 
	speed: "Level Five: Increase Speed or Incline", 
	location: ["outside", "inside"],
};

var liftingLevelOne = {
	workout: ["biceps", "triceps", "chest", "upper back", "lower back", "abs", "thighs", "hammies", "calves"],
	weight: 8, 
	aerobic: false, 
	repetitions: 12, 
};

var liftingLevelTwo = {
	workout: ["biceps", "triceps", "chest", "upper back", "lower back", "abs", "thighs", "hammies", "calves"],
	weight: 10, 
	aerobic: false, 
	repetitions: 10,
};

var liftingLevelThree = {
	workout: ["biceps", "triceps", "chest", "upper back", "lower back", "abs", "thighs", "hammies", "calves"],
	weight: 12, 
	aerobic: false, 
	repetitions: 8,
};

var liftingLevelFour = {
	workout: ["biceps", "triceps", "chest", "upper back", "lower back", "abs", "thighs", "hammies", "calves"],
	weight: 15, 
	aerobic: false, 
	repetitions: 6,
};

var liftingLevelFive = {
	workout: ["biceps", "triceps", "chest", "upper back", "lower back", "abs", "thighs", "hammies", "calves"],
	weight: 18, 
	aerobic: false, 
	repetitions: 3,
};

var aerobicsWorkout = {
	pyramidChallenge: ["walking", "jogging"],
	day: workoutDay[0],
	minutes: 25,
	aerobic: true, 
	routine: function(){
		var myRoutine = workoutWarmUp; 
		console.log("Let's workout! " + myRoutine);
	}
	
}; 

//procedure
console.log("Welcome " + exerciser + " to your workout! Which will you chose today? " + pyramidChallenge);

//boolean function
function numberOfWorkouts (freeTime, workoutTime) {
	if (freeTime > workoutTime) {
	numberOfWorkouts = freeTime/workoutTime
	i = Math.round(numberOfWorkouts);
	console.log("You have time for " + i + " workout(s) today!"); 
	console.log("Your workouts are: " + pyramidChallenge[i-i] + " and " + pyramidChallenge[i-i+1]);
	} else {
	console.log("You have time for a quick walk around the neighborhood."); 	
	} 
	return "Tomorrow is a new day for a new Pyramid Challenge!"
}

//math function
function minuteTimer(){
	var count=60;
	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

	// 60 second timer
	function timer(){
  		count=count-1;
  		if (count <= 0){
     	clearInterval(counter);
     	return;
  		}
	document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
	}
}; 

//outputs
console.log("Today is " + workoutDay[0] + ", and your workout is: " + pyramidChallenge[0] + "!");

//console.log(numberOfWorkouts(20, 25));

//for (var key in liftingLevelFive) {};

//running the aerobicsWorkout
//console.log("Today is " + workoutDay[0] + "! So let's workout! " + aerobicsWorkout.routine()); 
console.log(workoutLevelOne); 	