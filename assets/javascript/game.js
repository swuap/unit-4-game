
var gameScore = 0;
target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
bruce = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

function startUp () {
  document.getElementById("target").innerHTML = target;
};

function pictureClick () {
    var gameScore = gameScore + bruce;
    console.log(bruce);
    console.log(gameScore);
};

startUp ();
pictureClick ();
// document.getElementById("bruce").addEventListener("click", console.log(bruce));
