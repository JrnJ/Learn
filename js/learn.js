const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");
const modeParam = para.get("mode");
const shuffleParam = para.get("shuffle");
const answerMode = para.get("answerMode");

const CurrentLesson = GetLessonByName(exerciseParam);

const answerModeText = document.getElementById("answerModeText");
const answerModeButton = document.getElementById("answerModeButton");

const lessonTitle = document.getElementById("lessonTitle");
const question = document.getElementById("question");
const questionAnswer = document.getElementById("questionAnswer");

const questionsLeft = document.getElementById("questionsLeft");
const correctQuestionCount = document.getElementById("correctQuestionCount");
const wrongQuestionCount = document.getElementById("wrongQuestionCount");
const lessonRetries = document.getElementById("lessonRetries");

const nextButton = document.getElementById("nextButton");

// Progress Bar
const progressBarInner = document.getElementById("questions-progress-bar-inner");

let LessonQuestions = []; // int[]
let LessonLength = 0;
let WrongAnswers = []; // int[]
let IsPreviousAnswerWrong = false;
let OverrideIsAnswerWrong = false;

// TODO add this to the JSON of a lesson OR to the customization of a lesson
const makeLessonRandom = shuffleParam;

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
    if (makeLessonRandom == "true") {
        for (let i = questions.length; i > 0; i--) {
            // Random
            let rand = Math.floor(numbers.length / 1 * Math.random());
    
            // Add 
            LessonQuestions.push(numbers[rand]);
            numbers.splice(rand, 1);
        }
    } else {
        LessonQuestions = numbers;
    }

    // totalQuestions.textContent = LessonLength;
    NextQuestion();
    UpdateScore();
}

function RevealAnswer(param) {
    if (param == 'answerWrong') {
        question.style.color = "#ffd6d6";
    } else {
        question.style.color = "#ffffff";
        OverrideIsAnswerWrong = true;
    }
    
    question.textContent += " = " + CurrentLesson.content[LessonQuestions[0]].to;
}

function CheckAnswer() {
    // Make sure the user can see their mistake
    if (IsPreviousAnswerWrong == false) {
        // Check if Correct or Wrong
        Meow(questionAnswer.value.toLowerCase() == CurrentLesson.content[LessonQuestions[0]].to.toLowerCase());
    } else {
        IsPreviousAnswerWrong = false;
        NextQuestion();
    }
}

// TODO rename this method
// TODO fix this code, primarily remove the OverrideIsAnswerWrong
function Meow(correct) {
    if (correct == true) {
        LessonQuestions.shift();
        NextQuestion();
    } else if (correct == false) {
        if (OverrideIsAnswerWrong == true) {
            WrongAnswers.push(LessonQuestions.shift());
            NextQuestion();
        } else {
            IsPreviousAnswerWrong = true;

            // Show correct stuff
            RevealAnswer('anserWrong');

            WrongAnswers.push(LessonQuestions.shift());
        }
    } else {
        // Do Nothing
        console.log("Invalid input!");
    }

    // Update UI
    UpdateScore();
}

function NextQuestion() {
    // Check if there are no items left first
    if (LessonQuestions.length > 0) {
        question.style.color = "#FFFFFF";
        questionAnswer.value = "";

        questionsLeft.textContent = LessonQuestions.length;
        progressBarInner.style.width = (Math.floor((100.0 / LessonLength * (LessonLength - LessonQuestions.length))) + "%");

        question.textContent = CurrentLesson.content[LessonQuestions[0]].from[0]; // question.textContent = LessonArray[Lesson[0]].hiragana;
    } else {
        console.log("finished");
        LessonFinished();
    }
}

function UpdateScore() {
    correctQuestionCount.textContent = CurrentLesson.content.length - LessonQuestions.length - WrongAnswers.length;
    wrongQuestionCount.textContent = WrongAnswers.length;
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

    nextButton.hidden = false;
}

function NextClick() {
    window.location = './results.html?exercise=' + exerciseParam + '&mode=' + modeParam + '&shuffle=' + shuffleParam + "&answerMode=" + answerMode;
}

const OnWindowLoaded = () => {
    // Check for enter
    questionAnswer.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            CheckAnswer();
        }
    });

    if (modeParam != "regular") {
        // Find Mode
        for (let i = 0; i < CurrentLesson.modes.length; i++) {
            if (CurrentLesson.modes[i].name == modeParam) {
                const mode = CurrentLesson.modes[i];
                CurrentLesson.content = CurrentLesson.content.slice(mode.rangeStart, mode.rangeEnd);
                break; 
            }
        }
    }

    if (answerMode == "answerModeText") {
        answerModeText.style.visibility = "visible";
    } else if (answerMode == "answerModeButton") {
        answerModeButton.style.visibility = "visible";
    } else {
        // Uhhh
        answerModeText.style.visibility = "visible";
    }
    
    // Fill Necessarty Data
    lessonTitle.textContent = exerciseParam + " : " + modeParam;
    document.title = "Lesson | " + exerciseParam;

    StartLesson(CurrentLesson.content);
}

function hiraganaToRomaji(hiragana) {
    const hiraganaMap = {
      あ: "a", い: "i", う: "u", え: "e", お: "o",
      か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
      さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
      た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
      な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
      は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
      ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
      や: "ya", ゆ: "yu", よ: "yo",
      ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
      わ: "wa", を: "wo",
      ん: "n",
      が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
      ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
      だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
      ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
      ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
      きゃ: "kya", きゅ: "kyu", きょ: "kyo",
      しゃ: "sha", しゅ: "shu", しょ: "sho",
      ちゃ: "cha", ちゅ: "chu", ちょ: "cho",
      にゃ: "nya", にゅ: "nyu", にょ: "nyo",
      ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo",
      みゃ: "mya", みゅ: "myu", みょ: "myo",
      りゃ: "rya", りゅ: "ryu", りょ: "ryo",
      ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo",
      じゃ: "ja", じゅ: "ju", じょ: "jo",
      びゃ: "bya", びゅ: "byu", びょ: "byo",
      ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo"
    };
  
    let romaji = "";
  
    let i = 0;
    while (i < hiragana.length) {
      const character = hiragana[i];
  
      if (hiraganaMap.hasOwnProperty(character)) {
        let nextCharacter = "";
        let romajiMapping = hiraganaMap[character];
  
        // Check for small "ya", "yu", "yo" characters
        if (i < hiragana.length - 1) {
          nextCharacter = hiragana[i + 1];
          const combination = character + nextCharacter;
  
          if (hiraganaMap.hasOwnProperty(combination)) {
            romajiMapping = hiraganaMap[combination];
            i++;
          }
        }
  
        romaji += romajiMapping;
      } else {
        romaji += character;
      }
  
      i++;
    }
  
    return romaji;
}

window.onload = OnWindowLoaded();