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

var intro = document.getElementById("intro");
var start_btn = document.getElementById("start-btn");
var quiz_area = document.getElementById("quiz-area");
var question_h2 = document.getElementById("question");
var choices_div = document.getElementById("choices");
var startTime = 120;
var timer = document.getElementById("timer");
timer.textContent = startTime
var quiz_array = [
  {
    question: "question1",
    options:["a", "b", "c", "d"],
    correct:"b"
  },
  {
    question: "question2",
    options:["a", "b", "c", "d"],
    correct:"b"
  },
  {
    question: "question3",
    options:["a", "b", "c", "d"],
    correct:"b"
  },
  {
    question: "question4",
    options:["a", "b", "c", "d"],
    correct:"b"
  },
  {
    question: "question5",
    options:["a", "b", "c", "d"],
    correct:"b"
  },
]
var array_index = 0


// need a start button in html, needs Id to access in JS, JS needs event listener on start button
start_btn.addEventListener('click', function() {
  intro.classList.add("hide");
  quiz_area.classList.remove("hide");
displayQuestion()

})
// document.addEventListener('click', function(event){
//   if((event.target.tagName =='BUTTON') && (event.target.textContent != "START")){
//     event.preventDefault();
//     answerChecker();
//     console.log("bingus")
//   }
// })
// count downs seconds from the clock stops when the seconds are empty
function timer () {

}

function answerChecker () {

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
  
  choices_div.append(btn)
}
// array_index++
}