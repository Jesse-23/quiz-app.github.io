const questions = [
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Berlin", correct: false},
            { text: "Madrid", correct: false},
            { text: "Abuja", correct: true},
            { text: "Rome", correct: false},
        ]
    },
    {
        question: "what does HTML satnd for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true},
            { text: "High Text machine Language", correct: false},
            { text: "Hyper Transfer Markup Language", correct: false},
            { text: "Hyperlink Markup Language", correct: false},
        ]
    },
    {
        question: "What is the index of the first element in a zero-based array?",
        answers: [
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "none", correct: false},
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false},
            { text: "Ernest Rutherford", correct: false},
            { text: "Albert Eienstein", correct: true},
            { text: "Remedy the wise man", correct: false},
        ]
    },
    {
        question: "What is the Git command to commit changes with a meaninful message?",
        answers: [
            { text: "git add", correct: false},
            { text: "git push", correct: false},
            { text: "git pull", correct: false},
            { text: "git commit -m", correct: true},
        ]
    },
    {
        question: "What is the SQL command to creatw a new table?",
        answers: [
            { text: "SELECT", correct: false},
            { text: "CREATE", correct: true},
            { text: "INSERT", correct: false},
            { text: "UPDATE", correct: false},
        ]
    },
    {
        question: "What is the name of the bundle of nerve fibers that connects the two hemispheres of the brain?",
        answers: [
            { text: "Corpus callosum", correct: true},
            { text: "Cerebellum", correct: false},
            { text: "Brainstem", correct: false},
            { text: "Hippocampus", correct: false},
        ]
    },
    {
        question: "Which part of the brain processes visual information from the eyes?",
        answers: [
            { text: "Cerebellum", correct: false},
            { text: "Brainstem", correct: false},
            { text: "Temporal lobe", correct: false},
            { text: "Occipital lobe", correct: true},
        ]
    },
    {
        question: "Which of these is a Manchester United player?",
        answers: [
            { text: "N'Golo Kante`", correct: false},
            { text: "Thiago Silver", correct: false},
            { text: "Rasmus Hojlund", correct: true},
            { text: "Robert Lewandowski", correct: false},
        ]
    },
    {
        question: "Who is the Greatest Of All Time?",
        answers: [
            { text: "Lionel Messi", correct: true},
            { text: "Neymar Junior", correct: false},
            { text: "Christiano Ronaldo", correct: false},
            { text: "Eden Hazard", correct: false},
        ]
    }
];




const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none"
    answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }


    Array.from(answerButtons.children).forEach(btn => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (nextButton.innerText === "Play Again") {
        startQuiz();
    } else {
        nextQuestion();
    }
});

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
    nextButton.style.margin = "10px auto";
}

startQuiz();