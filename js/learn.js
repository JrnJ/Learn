const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");
const modeParam = para.get("mode");
const CurrentLesson = GetLessonByName(exerciseParam);

const lessonTitle = document.getElementById("lessonTitle")
const question = document.getElementById("question");
const questionAnswer = document.getElementById("questionAnswer");

const totalQuestions = document.getElementById("totalQuestions");
const questionsLeft = document.getElementById("questionsLeft");
const correctQuestionCount = document.getElementById("correctQuestionCount");
const wrongQuestionCount = document.getElementById("wrongQuestionCount");
const lessonRetries = document.getElementById("lessonRetries");

let LessonQuestions = []; // int[]
let LessonLength = 0;
let WrongAnswers = []; // int[]
let IsPreviousAnswerWrong = false;

function StartLesson(questions) {
    // Set Defaults
    LessonLength = questions.length;
    LessonQuestions = [];
    WrongAnswers = [];

    // Scamble LessonQuestions
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
        LessonQuestions.push(numbers[rand]);
        numbers.splice(rand, 1);
    }

    console.log(LessonQuestions);

    totalQuestions.textContent = LessonLength;
    NextQuestion();
    UpdateScore();
}

// Lesson is finished, not over, wrong ansers might be present
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
        LessonOver();
    }
}

// Lesson is actually over, nothing left to do
function LessonOver() {
    // Do something cool ig
    alert("Finished!");

    window.location = './results.html?exercise=' + exerciseParam + '&mode=' + modeParam;
}

function CheckAnswer() {
    // Make sure the user can see their mistake
    if (IsPreviousAnswerWrong == false) {
        const answerId = LessonQuestions.shift();
        console.log(answerId);

        // Check if Correct or Wrong
        if (questionAnswer.value.toLowerCase() == CurrentLesson.content[answerId].to.toLowerCase()) {
            NextQuestion();
        } else {
            IsPreviousAnswerWrong = true;
            WrongAnswers.push(answerId);

            // Show correct stuff
            question.style.color = "#FF0000";
            question.textContent += " = " + CurrentLesson.content[answerId].to;
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
    if (LessonQuestions.length > 0) {
        question.style.color = "#FFFFFF";
        questionAnswer.value = "";

        questionsLeft.textContent = LessonLength - CurrentLesson.content.length;
        question.textContent = CurrentLesson.content[LessonQuestions[0]].from[0]; // question.textContent = LessonArray[Lesson[0]].hiragana;
    } else {
        console.log("finished");
        LessonFinished();
    }
}

function UpdateScore() {
    correctQuestionCount.textContent = LessonLength - CurrentLesson.content.length - WrongAnswers.length;
    wrongQuestionCount.textContent = WrongAnswers.length;
}

const OnWindowLoaded = () => {
    // Check for enter
    questionAnswer.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            CheckAnswer();
        }
    });

    if (modeParam != "regular") {
        console.log(CurrentLesson.content);
        // Find Mode
        for (let i = 0; i < CurrentLesson.modes.length; i++) {
            if (CurrentLesson.modes[i].name == modeParam) {
                console.log("Mode Found");
                const mode = CurrentLesson.modes[i];
                CurrentLesson.content = CurrentLesson.content.slice(mode.rangeStart, mode.rangeEnd);
                break; 
            }
        }
        console.log(CurrentLesson.content);
    }
    
    // Fill Necessarty Data
    lessonTitle.textContent = exerciseParam + " : " + modeParam;
    document.title = "Lesson | " + exerciseParam;

    StartLesson(CurrentLesson.content);
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