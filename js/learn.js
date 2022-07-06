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

let Lesson = [];
let LessonLength = 0;
let WrongAnswers = [];
let IsPreviousAnswerWrong = false;

// function StartLesson(questions) {
//     // Set Defaults
//     LessonLength = questions.length;
//     Lesson = [];
//     WrongAnswers = [];

//     // Scamble Lesson
//     // Create temporary number array
//     let numbers = [];
//     for (let i = 0; i < questions.length; i++)
//         numbers.push(i);

//     // Fill Lesson
//     for (let i = questions.length; i > 0; i--) {
//         // Random
//         let rand = Math.floor(numbers.length / 1 * Math.random());

//         // Add 
//         Lesson.push(numbers[rand]);
//         numbers.splice(rand, 1);
//     }

//     totalQuestions.textContent = LessonLength;
//     NextQuestion();
//     UpdateScore();
// }

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
        // Display old score too

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

// // Array of type int, not JPTranslation!
// let WrongAnswers = [];
// let ScrambledQuestions = [];

// let correctCount = 0;
// let doNextQUestion = true;

// // Starts the lesson
// function StartLesson() {
//     // Scamble Lesson
//     let numbers = []; // internal use only
//     for (let i = 0; i < LessonArray.length; i++)
//         numbers.push(i);

//     // Create array of numbers that will point to LessonArray, lessonarray will NEVER be changed
//     // Storing an int reference is cheaper than storing a custom class with 4 strings
//     for (let i = LessonArray.length; i > 0; i--) {
//         // Random
//         let rand = Math.floor(numbers.length / 1 * Math.random());

//         // Add 
//         ScrambledQuestions.push(numbers[rand]);
//         numbers.splice(rand, 1);
//     }

//     //
//     NewQuestion();
// }

// // Checks the Answer
// function CheckAnswer() {
//     if (questionAnswer.value == LessonArray[ScrambledQuestions[0]].english) {
//         correctCount += 1;
//         correctQuestionCount.textContent = correctCount;

//         doNextQUestion = true;
//     } else {
//         WrongAnswers.push(1);
//         wrongQuestionCount.textContent = WrongAnswers.length;

//         question.style.color = "#FF0000";
//         question.textContent += " = " + LessonArray[ScrambledQuestions[0]].english;
//         doNextQUestion = false;
//     }

//     if (ScrambledQuestions.length <= 0) {
//         if (WrongAnswers.length > 0) {
//             ScrambledQuestions = WrongAnswers;
//             correctCount = 0;

//             questionsLeft.textContent = ScrambledQuestions.length;

//             NewQuestion();
//         } else {
//             alert('gj');
//         }

//     } else {
//         // Remove first int from array
//         ScrambledQuestions.shift();
//         questionsLeft.textContent = ScrambledQuestions.length;

//         if (doNextQUestion) NewQuestion();
//     }
// }

// // Presents a new question
// function NewQuestion() {
//     question.style.color = "#FFFFFF";
//     questionAnswer.value = "";

//     questionsLeft.textContent = LessonArray.length - ScrambledQuestions.length;
//     question.textContent = LessonArray[ScrambledQuestions[0]].hiragana;
// }

// const OnWindowLoaded = () => {
//     console.log(exerciseParam);
//     console.log(LessonArray);

//     // Check for enter
//     questionAnswer.addEventListener("keypress", (e) => {
//         if (e.key === "Enter") {
//             if (doNextQUestion) {
//                 CheckAnswer();
//             } else {
//                 doNextQUestion = true;
//                 NewQuestion();
//             }
//         }
//     });

//     // Fill Necessarty Data
//     lessonTitle.textContent = exerciseParam;
//     document.title = "Lesson | " + exerciseParam;
//     totalQuestions.textContent = LessonArray.length;

//     StartLesson();
// }

// window.onload = OnWindowLoaded();