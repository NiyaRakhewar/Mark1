var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Nikk",
    score: 4,
  },

  {
    name: "Riya",
    score: 3,
  },
]


var questions = [{
  question: "Where do I live? ",
  answer: "nanded"
}, {
  question: "My favorite color is? ",
  answer: "black"
},
{
  question: "Am i a social person ?? ",
  answer: "no"
},
{
  question: "Am I a clean or messy person ?? ",
  answer: "clean"
},
{
  question: " What do i like tea or coffee?? ",
  answer: "coffee"
},

{
  question: "What do i like chocolates or ice-cream ?? ",
  answer: "ice-cream"
}];

function welcome() {
  var userName = readlineSync.question("What's your name?\n");

  console.log("Welcome " + userName + " to DO YOU KNOW NIYA ??\n");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right! 😊");
    score = score + 1;

  } else {
    console.log("wrong! 😿");
    console.log("The right answer is " + answer);

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
