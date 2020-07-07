//create an array with quiz
var quiz = [
  {
    q1 : "How do you say hello in French? 
    a : "Bongiorno",
    b: "Bonjour",
    c: "Aurevoir",
    d: "Merci",
  },
  {
    q2: "Who was Napoleon Bonaparte?",
    a: "A painter",
    b: "A professional baker",
    c: "An emperor",
    d: "A landscaper",
  },
  {
      q3: "Which year marked the end of the monarchy in France and the beginning of the first Republic?",
    a: "1793",
    b: "1850",
    c: "1893",
    d: "1910",
  },
  {
    q4 :"On the 14 July, French people celebrate…",
    a: "Pastries",
    b: "The Storming of the Bastille",
    c: "Music Celebration",
    d: "Father's day",
  },
  {
      q5: "What is the city of Bordeaux known for?",
      a: "Pastries",
      b: "Museums",
      c: "Gardens",
      d: "Wine",
  },
];
//DOM elements
var timerEl = document.querySelector (".timer");
var startEl = document.querySelector("#start");

//set variables
var secondsLeft = 20;