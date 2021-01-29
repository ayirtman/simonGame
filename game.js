var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];

  $("#"+ randomChosenColor).fadeToggle();
  
  gamePattern.push(randomChosenColor);

};
