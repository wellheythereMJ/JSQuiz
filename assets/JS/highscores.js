// go to localStorage
var leaderboard = document.querySelector("#leaderBoard");
var clear = document.querySelector("#clear");
var savedScores = JSON.parse(localStorage.getItem("leaderboard"));
// grab leaderboard information 
if (savedScores!== null) {
  for (var i = 0; i < savedScores.length; i++) {
    var li = document.createElement("li");
    li.textContent = savedScores[i].initials + ": " + savedScores[i].score;
    leaderboard.appendChild(li);
  }
};

function clearBoard () {
  localStorage.removeItem("leaderboard");
  window.location.reload();
}

clear.addEventListener("click", clearBoard);