window.addEventListener('load', init);

//DOM Elements
const BROSWERSUPPORT = document.querySelector('.banner-support');
const wordInput = 
const currentWord = 
const scoreDisplay =  
const timeDisplay = 
const message = 
const seconds

//Browser Support Banner
setTimeout(() => {BROSWERSUPPORT.style.display = 'none'}, 5.0*1000);

//Available Levels
const levels = {
 easy: 5,
 medium: 3,
 hard: 2
}

//Change Level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//Start Game
function init() {
 //Show number of seconds in UI
 
 //Load word from array and dictionary API
 
 //Start matching words input
 
 //Call countdown every second
 setInterval(countdown, 1000);
 //Check game status
 setInterval(checkStatus, 50);
}

//Start matching words
function startMatch() {

}

//Match currentWord to wordInput


//Pick & show random word from array or API


//Countdwon timer
function countdown() {
  //Determine whether there is still time left
 if(time > 0) {
  //Decrement
  time--;
 } else if(time === 0) {
  isPlaying = false;
 }
 //Show time
 timeDisplay.innerHTML = time;
}

//Check status of game
function checkStatus() {
 if(!isPlaying && time === 0) {
  message.innerHTML = 'Game Over!';
  score = -1;
 }
}
