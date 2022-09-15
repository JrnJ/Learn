const lessonContentContainer = document.querySelector('#lessonContentContainer');

const lessonNameInput = document.getElementById("lessonNameInput");
const lessonTranslatedNameInput = document.getElementById("lessonTranslatedNameInput");
const lessonLanguageLearningInput = document.getElementById("lessonLanguageLearningInput");
const lessonLearningFromLanguageInput = document.getElementById("lessonLearningFromLanguageInput");

const outputText = document.getElementById("outputText");

// let learningLanguage = "Japanese";
// let learningFromLanguage = "English";

let LessonCreating;

let Content = [];

function addContentClick() {
    addContent();
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

    outputText.textContent = JSON.stringify(LessonCreating);
}

function addContent() {
    const li = document.createElement('li');

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

function OnWindowLoaded() {
    LessonCreating = new Lesson(0, "", "", "", "", []);
}

window.onload = OnWindowLoaded();