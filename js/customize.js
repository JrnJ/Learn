import { getLessonByName } from './lessonloader.js';

const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

const modeContainer = document.getElementById("modeContainer");
const multiLanguageContainer = document.getElementById("multiLanguageContainer");

document.addEventListener('DOMContentLoaded', async () => {
    if (exerciseParam != "Any") {
        const lesson = await getLessonByName(exerciseParam);

        if (lesson != null) {
            addModes(lesson);
            addMultiAnswerOptions(lesson);
        }
    }

    document.querySelector('#startLesson').addEventListener('click', () => {
        startWithSettings();
    });

    document.querySelector('#viewLesson').addEventListener('click', () => {
        window.location = './lessoncontent.html?exercise=' + exerciseParam;
    });
});

const startWithSettings = () => {
    const modeValue = document.querySelector('input[name="lessonMode"]:checked').value;
    const shuffleValue = document.querySelector('#shuffleLesson').checked;
    const answerModeValue = document.querySelector('input[name="answerMode"]:checked').value;

    window.location = './learn.html?exercise=' + exerciseParam + 
        '&mode=' + modeValue + 
        '&shuffle=' + shuffleValue + 
        '&answerMode=' + answerModeValue;
}

function addModes(lesson) {
    if (lesson.modes == null) {
        return;
    }

    for (let i = 0; i < lesson.modes.length; i++) {
        addModeElement(lesson.modes[i].name);
    }
}

function addMultiAnswerOptions(lesson) {
    for (let i = 0; i < lesson.content[0].from.length; i++) {
        addMultiAnswerElement(i, i == 0);
    }
}

function addModeElement(name) {
    // Add Content
    const containerElement = document.createElement('span');

    // Create Content
    const inputElement = document.createElement('input');
    inputElement.type = "radio";
    inputElement.name = "lessonMode";
    inputElement.id = name;
    inputElement.value = name;

    const labelElement = document.createElement('label');
    labelElement.htmlFor = name;
    labelElement.textContent = name;

    containerElement.appendChild(inputElement);
    containerElement.appendChild(labelElement);

    modeContainer.appendChild(containerElement);
}

function addMultiAnswerElement(index, first) {
    // Add Content
    const containerElement = document.createElement('span');

    // Create Content
    const inputElement = document.createElement('input');
    inputElement.type = "radio";
    inputElement.name = "lessonMultiLanguage";
    inputElement.id = index;
    inputElement.value = index;
    if (first == true) {
        inputElement.checked = true;
    }

    const labelElement = document.createElement('label');
    labelElement.htmlFor = index;
    labelElement.textContent = index;

    containerElement.appendChild(inputElement);
    containerElement.appendChild(labelElement);

    multiLanguageContainer.appendChild(containerElement);
}

// function loadFromJSONClick() {
//     // Get Element
//     const jsonLessonInput = document.getElementById("jsonLessonInput");

//     // Set JSON_LESSON
//     JSON_LESSON = jsonLessonInput.value;
//     lessonCustomizing = getLessonByName(exerciseParam);
//     console.log(lessonCustomizing);
    
//     // TODO: LocalStorage for this I guess
//     // https://stackoverflow.com/questions/53904944/how-to-keep-a-js-variable-the-same-even-after-refreshing-page
// }