const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

const modeContainer = document.getElementById("modeContainer");

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

function OnWindowLoaded() {
    AddModes();
}

window.onload = OnWindowLoaded();