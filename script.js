const questions = [

    {
        question: "What is the largest animal in the world",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Lion", correct: false},
            {text:"Leopard", correct: false},
        
        ]

    },
    {

        question: "What is the capital of Australia",
        answers: [
            {text:"Sydney", correct: false},
            {text:"Melbourne", correct: false},
            {text:"Canberra", correct: true},
            {text:"Leopard", correct: false},
        ]
    },
    {

        question: "Which country is the largest by land",
        answers: [
            {text:"China", correct: false},
            {text:"Russia", correct: true},
            {text:"USA", correct: false},
            {text:"Canada", correct: false},
        ]
    },
    {

        question: "Which of the planet is known as the red planet",
        answers: [
            {text:"Mars", correct: true},
            {text:"Earth", correct: false},
            {text:"Jupiter", correct: false},
            {text:"Venus", correct: false},
        ]
    },
    {

        question: "What is the currency of Japan",
        answers: [
            {text:"Yen", correct: true},
            {text:"Dollar", correct: false},
            {text:"Naira", correct: false},
            {text:"Cedi", correct: false},
        ]
    },
    {

        question: "Who wrote Rome And Juliet",
        answers: [
            {text:"Charles Dickens", correct: false},
            {text:"Willams Shakespeare", correct: true},
            {text:"Jane Austen", correct: false},
            {text:"Mark Twain", correct: false},
        ]
    },
    {

        question: "What is the main language spoken in Brazil",
        answers: [
            {text:"Spanish", correct: false},
            {text:"Italian", correct: false},
            {text:"French", correct: false},
            {text:"Portuguese", correct: true},
        ]
    },
    {

        question: "Which ocean is the largest",
        answers: [
            {text:"Atlanic", correct: false},
            {text:"Indian", correct: false},
            {text:"Pacific", correct: true},
            {text:"Southern", correct: false},
        ]
    },
    {

        question: "What is the tallest mountain in the world",
        answers: [
            {text:"K2", correct: false},
            {text:"Mountain Everest", correct: true},
            {text:"Kilimajaro", correct: false},
            {text:"Denail", correct: false},
        ]
    },
    {

        question: "All of these are in the cat family except",
        answers: [
            {text:"lion", correct: false},
            {text:"Tiger", correct: false},
            {text:"Leopard", correct: false},
            {text:"Fox", correct: true},
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
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
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