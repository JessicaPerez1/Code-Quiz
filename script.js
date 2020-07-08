//DOM elements
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");

//set variables
var secondsLeft = 100;
var score = 0;

//create an array with quiz
var correctAnswers = ("Bonjour", "An emperor", "1793", "The Storming of the Bastille", "Wine"];
var quiz = 
{
    q1: "How do you say hello in French?",
    a1: "Bongiorno",
    b1: "Bonjour",
    c1: "Aurevoir",
    d1: "Merci",
    q2: "Who was Napoleon Bonaparte?",
    a2: "A painter",
    b2: "A professional baker",
    c2: "An emperor",
    d2: "A landscaper",
    q3:
      "Which year marked the end of the monarchy in France and the beginning of the first Republic?",
    a3: "1793",
    b3: "1850",
    c3: "1893",
    d3: "1910",
    q4: "On the 14 July, French people celebrate…",
    a4: "Pastries",
    b4: "The Storming of the Bastille",
    c4: "Music Celebration",
    d4: "Father's day",

    q5: "What is the city of Bordeaux known for?",
    a5: "Pastries",
    b5: "Museums",
    c5: "Gardens",
    d5: "Wine",
  };

//when we click on start btn, counter starts
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    console.log("it's working");
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    //TO DO
    if (secondsLeft === 0) {
      startEl.style.display = secondsLeft;
      clearInterval(myInterval);
      alert("Time is up");
    }
  }, 1000);
});

//after timer starts, first question is displayed - create a display function
//Check anser use .include method
  //if user input === answer alert "yay"
  // add 1 to the score
  //if wrong, alert wrong + display correct answer to the bottom + take 5 seconds off timer
//populate bottom button with correct answer
//if timer reaches 0, then game is over
//no more questions displayed - clear screen
//then I am asked for my initials and score is displayed
//when I click submit button, restart the quiz
