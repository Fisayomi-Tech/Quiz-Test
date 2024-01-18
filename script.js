const questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            {text:" Hyper Transfer Markup Language", correct: false},
            {text:"Hyper Text Makeup Language", correct: false},
            {text:"Hyperlink and Text Markup Language", correct: false},
            {text:" Hyper Text Markup Language", correct: true},
        
        ]

    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text:"text-color", correct: false},
            {text:"font-color", correct: false},
            {text:"color", correct: true},
            {text:"text-style", correct: false},
        ]
    },
    {

         question: "What is the purpose of JavaScript?",
        answers: [
            {text:"To style web pages", correct: false},
            {text:"To create interactive elements on web pages", correct: true},
            {text:"To define the structure of web pages", correct: false},
            {text:"To manage database operations", correct: false},
        ]
    },
    {

        question: "Which property is used to control the space between the border and the content inside an element?",
        answers: [
            { text: "padding", correct: true},
            {text:" border-spacing", correct: false},
            {text:" spacing", correct: false},
            {text:" margin", correct: false},
        ]
    },
    {

        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        answers: [
            {text:"variable", correct: true},
            {text: "let", correct: false},
            {text:"var", correct: false},
            {text:"const", correct: false},
        ]
    },
    {

        question: "What does the box model in CSS consist of?",
        answers: [
            {text:"Header, Body, Footer", correct: false},
            {text:" Margin, Border, Padding, Content", correct: true},
            {text:"Class, ID, Tag", correct: false},
            {text:" Float, Clear, Position, Display", correct: false},
        ]
    },
    {

        question: "What does CSS stand for?",
        answers: [
            {text:"Counter Style Sheets", correct: false},
            {text:" Computer Style Sheets", correct: false},
            {text:"Creative Style Sheets", correct: false},
            {text:"Cascading Style Sheets", correct: true},
        ]
    },
    {

        question: " Which event in JavaScript is triggered when a user clicks on an HTML element?",
        answers: [
            {text:"onmouseover", correct: false},
            {text:"onsubmit", correct: false},
            {text:"onclick", correct: true},
            {text:"onchange", correct: false},
        ]
    },
    {

        question: "What is the purpose of the viewport meta tag in HTML?",
        answers: [
            {text:"To set the background color of the webpage", correct: false},
            {text:"To define the visible area of the webpage on different devices", correct: true},
            {text:" To create a link to another webpage", correct: false},
            {text:"To set the font size of the webpage", correct: false},
        ]
    },
    {

        question: " How can you center an element horizontally in CSS?",
        answers: [
            {text:"text-align: center;", correct: false},
            {text:"align: center;", correct: false},
            {text:"margin: auto;", correct: true},
            {text:"center: true;", correct: false},
        ]
    }

];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

});

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
} 

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
      }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
   if(currentQuestionIndex< questions.length){
    handleNextButton();
   }else{
    startQuiz();
  }
  

 
});

startQuiz();