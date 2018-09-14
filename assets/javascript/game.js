var target 
var bruce
var tyler

function startUp () {
  target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  document.getElementById("target").innerHTML = target;
  bruce = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  tyler = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log("Target is : " + target);
  console.log("Target is : " + bruce);
  console.log("Target is : " + tyler);

}

startUp ();
console.log("Target is : " + target);
console.log("Target is : " + bruce);
console.log("Target is : " + tyler);

