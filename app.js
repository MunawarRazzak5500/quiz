  
 const quizData = [
  {
          question: "Which HTML tag is used to create an unordered list?",
          options: ["<ul>", "<ol>", "<li>", "<list>"],
          answer: 0,
        },
        {
          question: "What does CSS stand for?",
          options: ["Central Style Sheets", "Cascading Style Sheet", "Cascading Simple Sheets", "Cars, SUVs, Sailboats"],
          answer: 1,
        },
        {
          question: "What does HTML stand for?",
          options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters, Terminals, Motorboats, Lamborghinis"],
          answer: 0,
        },
        {
          question: "What year was JavaScript launched?",
          options: ["1996", "1995", "1994", "None of the above"],
          answer: 1,
        },
        {
          question: "Which HTML tag is used to define a table row?",
          options: ["<th>", "<tr>", "<td>", "<table>"],
          answer: 1,
        },
        {
          question: "Which is the correct HTML element for the largest heading?",
          options: ["<h1>", "<h2>", "<h3>", "<h4>"],
          answer: 0,
        },
        {
          question: "What is the correct way to select an element with the id 'myElement' using CSS selectors?",
          options: ["#myElement", ".myElement", "*[myElement]", "$myElement"],
          answer: 0,
        },
        {
          question: "Which attribute is used to define inline styles in HTML?",
          options: ["class", "style", "id", "src"],
          answer: 1,
        },
        {
          question: "Which HTML tag is used to define a paragraph?",
          options: ["<p>", "<div>", "<span>", "<a>"],
          answer: 0,
        },
        {
          question: "What is the correct file extension for HTML files?",
          options: [".html", ".hlm", ".htm", ".htmk"],
          answer: 0,
        },
      ];

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-txt");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const nextButton = document.getElementById("next-button");

let questionCounter = 0;
let selectedOption;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[questionCounter];
  questionNumber.innerText = `Question ${questionCounter + 1}`;
  questionText.innerText = currentQuestion.question;
  option1.innerText = currentQuestion.options[0];
  option2.innerText = currentQuestion.options[1];
  option3.innerText = currentQuestion.options[2];
  option4.innerText = currentQuestion.options[3];
}

function checkAnswer() {
  const currentQuestion = quizData[questionCounter];
  const answer = currentQuestion.answer;
  if (selectedOption === answer) {
    score++;
  }
}

function deselectOptions() {
  const options = document.getElementsByName("opt");
  options.forEach((option) => {
    option.checked = false;
  });
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const scoreText = document.getElementById("score-text");
  const percentageText = document.getElementById("percentage-text");

  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  scoreText.innerText = `Total Score: ${score}/${quizData.length}`;
  const percentage = (score / quizData.length) * 100;
  percentageText.innerText = `Percentage: ${percentage}%`;
}

function nextQuestion() {
  const options = document.getElementsByName("opt");
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = i;
      break;
    }
  }

  if (selectedOption === undefined) {

    return;
  }

  checkAnswer();
  questionCounter++;

  deselectOptions();

  if (questionCounter === quizData.length) {

    nextButton.innerText = "Finish";
    nextButton.onclick = showResult;
  }

  if (questionCounter < quizData.length) {
    loadQuestion();
  }
}

loadQuestion();

nextButton.addEventListener("click", nextQuestion);
