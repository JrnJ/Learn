const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

const modeContainer = document.getElementById("modeContainer");
const multiLanguageContainer = document.getElementById("multiLanguageContainer");

let LessonCustomizing;

const StartWithSettings = () => {
    const modeValue = document.querySelector('input[name="lessonMode"]:checked').value;
    const shuffleValue = document.querySelector('#shuffleLesson').checked;
    window.location = './learn.html?exercise=' + exerciseParam + '&mode=' + modeValue + '&shuffle=' + shuffleValue;
}

function AddModes() {
    for (let i = 0; i < LessonCustomizing.modes.length; i++) {
        AddModeElement(LessonCustomizing.modes[i].name);
    }
}

function AddMultiAnswerOptions() {
    for (let i = 0; i < LessonCustomizing.content[0].from.length; i++) {
        AddMultiAnswerElement(i, i == 0);
    }
}

function AddModeElement(name) {
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

function AddMultiAnswerElement(index, first) {
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

function ViewLessonClick() {
    window.location = './lessoncontent.html?exercise=' + exerciseParam;
}

function LoadFromJSONClick() {
    // Get Element
    const jsonLessonInput = document.getElementById("jsonLessonInput");

    // Set JSON_LESSON
    JSON_LESSON = jsonLessonInput.value;
    LessonCustomizing = GetLessonByName(exerciseParam);
    console.log(LessonCustomizing);
    
    // TODO: LocalStorage for this I guess
    // https://stackoverflow.com/questions/53904944/how-to-keep-a-js-variable-the-same-even-after-refreshing-page
}

function OnWindowLoaded() {

    if (exerciseParam != "Any") {
        const tempLesson = GetLessonByName(exerciseParam);

        if (tempLesson != null) {
            LessonCustomizing = tempLesson;
            AddModes();
            AddMultiAnswerOptions();
        }
    }
}

window.onload = OnWindowLoaded();