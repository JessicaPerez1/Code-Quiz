//DOM elements
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector(".start");

var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var quizEl = document.querySelector("#quiz");

var resultsEl = document.querySelector(".results");

// var buttons = document.querySelector(".btn");
var divEl = document.querySelector(".div-buttons");
var wrapperEl = document.querySelector(".wrapper");

function checkAnswerA() {
  var questionData = quiz[questionNumber]["a" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
}

function checkAnswerB() {
  var questionData = quiz[questionNumber]["b" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
}
function checkAnswerC() {
  var questionData = quiz[questionNumber]["c" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
}
function checkAnswerD() {
  var questionData = quiz[questionNumber]["d" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
}

function displayCorrectMessage() {
  resultsEl.textContent = "BRAVO!!! Your score is: " + score;
}
function displayWrongMessage() {
  resultsEl.textContent = "NON!!! Your score is: " + score;
}

optionA.addEventListener("click", checkAnswerA);
optionB.addEventListener("click", checkAnswerB);
optionC.addEventListener("click", checkAnswerC);
optionD.addEventListener("click", checkAnswerD);

//Array
var optionArray = [optionA, optionB, optionC, optionD];
var question = document.querySelector("#question");
//set variables
var secondsLeft = 80;
var score = 0;

//create an array with quiz
var answers = [
  "Bonjour",
  "An emperor",
  "1793",
  "The Storming of the Bastille",
  "Wine",
];

var quiz = [
  {
    q0: "How do you say hello in French?",
    a0: "Bongiorno",
    b0: "Bonjour",
    c0: "Aurevoir",
    d0: "Merci",
  },
  {
    q1: "Who was Napoleon Bonaparte?",
    a1: "A painter",
    b1: "A professional baker",
    c1: "An emperor",
    d1: "A landscaper",
  },
  {
    q2:
      "Which year marked the end of the monarchy in France and the beginning of the first Republic?",
    a2: "1793",
    b2: "1850",
    c2: "1893",
    d2: "1910",
  },
  {
    q3: "On the 14 July, French people celebrate…",
    a3: "Pastries",
    b3: "The Storming of the Bastille",
    c3: "Music Celebration",
    d3: "Father's day",
  },
  {
    q4: "What is the city of Bordeaux known for?",
    a4: "Pastries",
    b4: "Museums",
    c4: "Gardens",
    d4: "Wine",
  },
];

var questionNumber = 0;

//User Interactions

//when we click on start btn, counter starts
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    displayQuestion();
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
      clearScreen();
    }
  }, 1000);
});

//After timer starts, first question is displayed - create a display question functions
function displayQuestion() {
  question.textContent = quiz[questionNumber]["q" + questionNumber];
  optionA.value = "";
  optionA.innerHTML = quiz[questionNumber]["a" + questionNumber];
  optionB.value = "";
  optionB.innerHTML = quiz[questionNumber]["b" + questionNumber];
  optionC.value = "";
  optionC.innerHTML = quiz[questionNumber]["c" + questionNumber];
  optionD.value = "";
  optionD.innerHTML = quiz[questionNumber]["d" + questionNumber];
}

// function displayMessageA() {
//   var questionData = quiz[questionNumber]["a" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   if (questionData === correctAnswer) {
//     rightWrong.innerHTML = "BRAVO!";
//     document.body.appendChild(rightWrong);
//   } else {
//     rightWrongs.innerHTML = "NON!";
//     document.body.appendChild(rightWrong);
//   }
// }

// function displayMessageA() {
//   var questionData = quiz[questionNumber]["a" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   if (questionData === correctAnswer) {
//     rightWrong.innerHTML = "BRAVO!";
//     document.body.appendChild(rightWrong);
//   } else {
//     rightWrongs.innerHTML = "NON!";
//     document.body.appendChild(rightWrong);
//   }
// }
// function displayMessageB() {
//   var questionData = quiz[questionNumber]["b" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   if (questionData === correctAnswer) {
//     rightWrong.innerHTML = "BRAVO!";
//     document.body.appendChild(rightWrong);
//   } else {
//     rightWrongs.innerHTML = "NON!";
//     document.body.appendChild(rightWrong);
//   }
// }
// function displayMessageC() {
//   var questionData = quiz[questionNumber]["c" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   if (questionData === correctAnswer) {
//     rightWrongs.innerHTML = "BRAVO!";
//     document.body.appendChild(rightWrong);
//   } else {
//     rightWrong.innerHTML = "NON!";
//     document.body.appendChild(rightWrong);
//   }
// }

// function displayMessageD() {
//   var questionData = quiz[questionNumber]["d" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   if (questionData === correctAnswer) {
//     rightWrong.innerHTML = "BRAVO!";
//     document.body.appendChild(rightWrong);
//   } else {
//     rightWrong.innerHTML = "NON!";
//     document.body.appendChild(rightWrong);
//   }
// }

function clearScreen() {
  if (quiz[questionNumber] === quiz.length) {
    quizEl.textContent.display = "none";
    document.createElement("btn");
    btn.textContent = "Submit";
    document.body.appendChild(btn);
  }
}
//startTimer -> displayQuestions ->add event listeners
//event listner
