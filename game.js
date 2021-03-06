var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var userClickedPattern = [];
var highScore = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(event){
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").html("Game Over, Press Any Key to Restart");

    setTimeout(function(){
      $("body").removeClass("game-over")
    },200);

    startOver();
  };
};
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function nextSequence(){

  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  $("."+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  $("#level-title").html("Level " + level);
};

function playSound(name){
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColor){
  $("." + currentColor).addClass("pressed");
  setTimeout(function(){$("." + currentColor).removeClass("pressed")}, 100);
};

function startOver(){
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("highScore",level);
    $("#high-score-title").append(" " + level);
  }
  level = 0;
  gamePattern = [];
  started = false;
  userClickedPattern = [];
}
