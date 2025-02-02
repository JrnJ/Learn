import { Lesson, Translation, LessonMode, Dictionary, Languages, LanguageCodes } from './lesson.js';

const lessonContentContainer = document.querySelector('#lessonContentContainer');

const lessonNameInput = document.getElementById("lessonNameInput");
const lessonTranslatedNameInput = document.getElementById("lessonTranslatedNameInput");
const lessonLanguageLearningInput = document.getElementById("lessonLanguageLearningInput");
const lessonLearningFromLanguageInput = document.getElementById("lessonLearningFromLanguageInput");

const loadLessonText = document.getElementById("loadLessonText");
const outputText = document.getElementById("outputText");

// let learningLanguage = "Japanese";
// let learningFromLanguage = "English";

let LessonCreating;

let Content = [];

document.addEventListener('DOMContentLoaded', () => {
    LessonCreating = new Lesson(0, "", "", "", "", []);

    // Buttons
    document.querySelector('#loadLesson').addEventListener('click', () => {
        LoadLessonClick();
    });

    document.querySelector('#addContent').addEventListener('click', () => {
        addContentClick();
    });

    document.querySelector('#saveLesson').addEventListener('click', () => {
        const clickSound = new Audio('../audio/interface-click-sound.wav');
        clickSound.volume = 1.0;
        clickSound.play();

        SaveLessonClick();
    });
});

function addContentClick() {
    addContent();
}

function LoadLessonClick() {
    const json = JSON.parse(loadLessonText.value);
    console.log(json);

    // Load Lesson Details
    lessonNameInput.value = json.name;
    lessonTranslatedNameInput.value = json.translatedName;
    lessonLanguageLearningInput.value = json.learning;
    lessonLearningFromLanguageInput.value = json.learningFrom;

    // Load Modes


    // Load Content
    for (let i = 0; i < json.content.length; i++) {
        addContent(json.content[i]);
    }
}

function SaveLessonClick() {
    // console.log(Content);
    let translations = [];

    for (let i = 0; i < Content.length; i++) {
        let values = [];

        for (let j = 1; j < Content[i].children.length; j++) {
            values.push(Content[i].children[j].value);
        }

        translations.push(new Translation(values[0], values.slice(1, values.length)));
    }

    LessonCreating = new Lesson(0,
        lessonNameInput.value, lessonTranslatedNameInput.value,
        lessonLanguageLearningInput.value, lessonLearningFromLanguageInput.value,
        null,
        translations
    );

    outputText.value = JSON.stringify(LessonCreating);
}

function addContent(content) {    
    const li = document.createElement('li');

    let newContent = [];

    if (content != null) {
        newContent.push(content.to);

        for (let i = 0; i < content.from.length; i++) {
            newContent.push(content.from[i]);
        }
    }
    
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', e => {
        
        // Delete Self
        const index = Content.indexOf(li);

        // Only remove item if its found in array
        if (index > -1) { 
            Content.splice(index, 1);
        }

        // Remove from page
        li.remove();
    });
    deleteButton.innerText = 'X';
    deleteButton.className = 'removeItem';
    li.appendChild(deleteButton);

    // Build Element
    for (let i = 0; i < 4; i++) {
        const learningInput = document.createElement('input');
        learningInput.type = "text";
        learningInput.placeholder = "placeholder hi";
        if (content != null) {
            learningInput.value = newContent[i];
        }
        li.appendChild(learningInput);
    }

    // 
    Content.push(li);

    // Add to Page
    lessonContentContainer.appendChild(li);
}

// function addContentt() {
//     // Add Content
//     const containerElement = document.createElement('div');

//     // Create Element
//     const learningFromInput = document.createElement('input');
//     learningFromInput.type = "text";
//     learningFromInput.placeholder = learningFromLanguage;

//     const learningInputContainer = document.createElement('span');

//     const learningInput = document.createElement('input');
//     learningInput.type = "text";
//     learningInput.placeholder = learningLanguage;

//     const deleteButton = document.createElement('button');
//     deleteButton.addEventListener('click', e => {
//         // Delete Self

//     });
//     deleteButton.innerText = 'X';
//     deleteButton.style = 'deleteItem';

//     const br = document.createElement('br');

//     // Build Element
//     containerElement.appendChild(learningFromInput);

//     learningInputContainer.appendChild(learningInput);
//     containerElement.appendChild(learningInputContainer);

//     containerElement.appendChild(addButton)

//     containerElement.appendChild(br);

//     Content.push([containerElement, learningFromInput, learningInput]);

//     // Add to page
//     lessonContentElement.appendChild(containerElement);
// }