var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

$(document).one("keypress",nextSequence);


function nextSequence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  $("."+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);

  level++;

  $("#level-title").html("Level " + level);
};

$(".btn").click(function(event){
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function playSound(name){
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColor){
  $("." + currentColor.id).addClass("pressed");
  setTimeout(function(){$("." + currentColor.id).removeClass("pressed")}, 100);
}
