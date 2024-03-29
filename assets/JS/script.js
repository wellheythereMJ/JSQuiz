// GIVEN I am taking a code quiz
// WHEN I click the start button

// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score 

var scoreCard = document.getElementById('scorecard');
var intro = document.getElementById("intro");
var start_btn = document.getElementById("start-btn");
var quiz_area = document.getElementById("quiz-area");
var question_h2 = document.getElementById("question");
var choices_div = document.getElementById("choices");
var startTime = 120;
var timer = document.getElementById("timer");
timer.textContent = startTime
var clock;  
var quiz_array = [
  {
    question: "What is the document in html?",
    options:["a", "b", "c", "d"],
    correct:"b"
  },
  {
    question: "What does an index start with?",
    options:["a", "b", "c", "d"],
    correct:"c"
  },
  {
    question: "What does a for loop start with?",
    options:["a", "b", "c", "d"],
    correct:"d"
  },
  {
    question: "Where should the javascript file be linked in the index file?",
    options:["a", "b", "c", "d"],
    correct:"a"
  },
  {
    question: "question5",
    options:["a", "b", "c", "d"],
    correct:"a"
  },
]
var array_index = 0


// need a start button in html, needs Id to access in JS, JS needs event listener on start button
start_btn.addEventListener('click', function() {
  intro.classList.add("hide");
  quiz_area.classList.remove("hide");
displayQuestion();
starTimer();

})
// document.addEventListener('click', function(event){
//   if((event.target.tagName =='BUTTON') && (event.target.textContent != "START")){
//     event.preventDefault();
//     answerChecker();
//     console.log("bingus")
//   }
// })
// count downs seconds from the clock stops when the seconds are empty
function starTimer () {
  clock = setInterval(function(){
    startTime --;
    timer.textContent = startTime;
    if (startTime <= 0){
      clearInterval (clock)
      gameOver();
    }
  }, 1000)
}

function answerChecker () {
console.log(this)
  if (this.textContent == quiz_array[array_index].correct) {
    console.log("correct")
  } else {
    console.log("wrong")
    startTime -= 10;
  } 
  array_index ++
  if (array_index >= quiz_array.length) {
    console.log("gameOver")
    gameOver(); // start gameOver function 
  } else {
    displayQuestion ();
  }
}

function displayQuestion () {
// add the question in the h2 and add the button choices to the div
question_h2.textContent=quiz_array[array_index].question
choices_div.innerHTML=""
console.log(array_index)
for (var i = 0; i < quiz_array [array_index].options.length; i++){
  var btn = document.createElement("button");
  btn.textContent = quiz_array[array_index].options[i];
  console.log(array_index)
  // add on click to button
  btn.onclick = answerChecker
  choices_div.append(btn)
}
// array_index++
};

function gameOver () {
  clearInterval (clock);
  quiz_area.classList.add("hide");
  scoreCard.classList.remove("hide");
  // replace score goes here with what user actually needs to see 
};

// create event listener for submit button 
var submit_btn = document.getElementById("Submit");
submit_btn.addEventListener("click", function(event){
  event.preventDefault();
  var initials = document.getElementById("initials").value;
  var leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  if (leaderboard === null) {
    leaderboard = [];
  }
  leaderboard.push({initials: initials, score: startTime});
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  window.location.href = "highscores.html"
})
// grab initials from input and save player initials and score to local storage
