const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");
const LessonArray = StrToLesson(exerciseParam);

const lessonTitle = document.getElementById("lessonTitle")
const question = document.getElementById("question");
const questionAnswer = document.getElementById("questionAnswer");

const totalQuestions = document.getElementById("totalQuestions");
const questionsLeft = document.getElementById("questionsLeft");
const correctQuestionCount = document.getElementById("correctQuestionCount");
const wrongQuestionCount = document.getElementById("wrongQuestionCount");
const lessonRetries = document.getElementById("lessonRetries");

let Lesson = [];
let LessonLength = 0;
let WrongAnswers = [];
let IsPreviousAnswerWrong = false;

function StartLesson(questions) {
    // Set Defaults
    LessonLength = questions.length;
    Lesson = [];
    WrongAnswers = [];

    // Scamble Lesson
    let numbers = [];
    if (isNaN(questions[0])) {
        for (let i = 0; i < questions.length; i++)
            numbers.push(i);
    } else {
        numbers = questions;
    }

    // Fill Lesson
    for (let i = questions.length; i > 0; i--) {
        // Random
        let rand = Math.floor(numbers.length / 1 * Math.random());

        // Add 
        Lesson.push(numbers[rand]);
        numbers.splice(rand, 1);
    }

    totalQuestions.textContent = LessonLength;
    NextQuestion();
    UpdateScore();
}

function LessonFinished() {
    if (WrongAnswers.length > 0) {
        // Add score to page
        const containerElement = document.createElement('div');

        const correctElement = document.createElement('span');
        correctElement.innerHTML = (LessonLength - WrongAnswers.length);
        correctElement.style.color = "green";
        const deviderElement = document.createElement('span');
        deviderElement.innerHTML = " / ";
        const wrongElement = document.createElement('span');
        wrongElement.innerHTML = WrongAnswers.length;
        wrongElement.style.color = "red";

        containerElement.appendChild(correctElement);
        containerElement.appendChild(deviderElement);
        containerElement.appendChild(wrongElement);

        lessonRetries.prepend(containerElement);

        // Start new lesson with wrong answers
        StartLesson(WrongAnswers);
    } else {
        // Do something cool ig
        alert("Finished!");
    }
}

function CheckAnswer() {
    // Make sure the user can see their mistake
    if (IsPreviousAnswerWrong == false) {
        const answerId = Lesson.shift();

        // Check if Correct or Wrong
        if (questionAnswer.value.toLowerCase() == LessonArray[answerId].english) {
            NextQuestion();
        } else {
            IsPreviousAnswerWrong = true;
            WrongAnswers.push(answerId);

            // Show correct stuff
            question.style.color = "#FF0000";
            question.textContent += " = " + LessonArray[answerId].english;
        }

        // Update UI
        UpdateScore();
    } else {
        IsPreviousAnswerWrong = false;
        NextQuestion();
    }
}

function NextQuestion() {
    // Check if there are no items left first
    if (Lesson.length > 0) {
        question.style.color = "#FFFFFF";
        questionAnswer.value = "";

        questionsLeft.textContent = LessonLength - Lesson.length;
        question.textContent = LessonArray[Lesson[0]].hiragana;
    } else {
        console.log("finished");
        LessonFinished();
    }
}

function UpdateScore() {
    correctQuestionCount.textContent = LessonLength - Lesson.length - WrongAnswers.length;
    wrongQuestionCount.textContent = WrongAnswers.length;
}

const OnWindowLoaded = () => {
    // Check for enter
    questionAnswer.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            CheckAnswer();
        }
    });

    // Fill Necessarty Data
    lessonTitle.textContent = exerciseParam;
    document.title = "Lesson | " + exerciseParam;

    StartLesson(LessonArray);
}

window.onload = OnWindowLoaded();

let isDrawing = false;
let x = 0;
let y = 0;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}