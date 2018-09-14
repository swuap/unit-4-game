
var wins = 0
var losses = 0


// testing that the variables are loading numbers correctly
console.log(target);
console.log("Bruce variable is " + bruce);
console.log("Tyler variable is " + tyler);
console.log("Hasan variable is " + hasan);
console.log("Netreia variable is " + netreia);

// this loads random numbers in to the variables used for the game
function startUp () {
    gameScore = 0;
    target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    bruce = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    tyler = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    hasan = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    netreia = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    document.getElementById("target").innerHTML = "You must guess: " + target;
    document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;
};

// this will reset the game once player wins or loses, and keeps score
function win(){
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    startUp();
};

function lose(){
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    startUp();
};


// this adds points to the users total score based on the value of each picture
document.getElementById("bruce").addEventListener("click", function() {
    gameScore = gameScore + bruce;
    document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

document.getElementById("tyler").addEventListener("click", function() {
    gameScore = gameScore + tyler;
    document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

document.getElementById("hasan").addEventListener("click", function() {
    gameScore = gameScore + hasan;
    document.getElementById("gameScore").innerHTML = "So far you have: " + gameScore;

    if (gameScore === target) {
        win ();
    };

    if (gameScore > target) {
        lose ();
    };
});

// document.getElementById("tyler").addEventListener("click", function() {
//     gameScore = gameScore + tyler;
//     document.getElementById("gameScore").innerHTML = gameScore;
// });

// document.getElementById("hasan").addEventListener("click", function() {
//     gameScore = gameScore + hasan;
//     document.getElementById("gameScore").innerHTML = gameScore;
// });

// document.getElementById("netreia").addEventListener("click", function() {
//     gameScore = gameScore + netreia;
//     document.getElementById("gameScore").innerHTML = gameScore;
// });



startUp ();



// function pictureClick () {
//     gameScore = gameScore + bruce;
//     console.log(bruce);
//     console.log(gameScore);
// };