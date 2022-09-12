const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

const modeContainer = document.getElementById("modeContainer");
const multiLanguageContainer = document.getElementById("multiLanguageContainer");

const LessonCustomizing = GetLessonByName(exerciseParam);

const StartWithSettings = () => {
    const modeValue = document.querySelector('input[name="lessonMode"]:checked').value;
    window.location = './learn.html?exercise=' + exerciseParam + '&mode=' + modeValue;
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

function OnWindowLoaded() {
    AddModes();
    AddMultiAnswerOptions();
}

window.onload = OnWindowLoaded();