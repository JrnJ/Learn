const lessonContentElement = document.querySelector('#lessonContentElement');

const lessonNameInput = document.getElementById("lessonNameInput");
const lessonTranslatedNameInput = document.getElementById("lessonTranslatedNameInput");
const lessonLanguageLearningInput = document.getElementById("lessonLanguageLearningInput");
const lessonLearningFromLanguageInput = document.getElementById("lessonLearningFromLanguageInput");

let learningLanguage = "Japanese";
let learningFromLanguage = "English";

let LessonCreating;

let Content = [];

const addContentClick = () => {
    addContent();
}

const SaveLessonClick = () => {
    console.log(Content);

    LessonCreating = new Lesson(0, 
        lessonNameInput.textContent, lessonTranslatedNameInput.textContent,
        lessonLanguageLearningInput.textContent, lessonLearningFromLanguageInput.textContent,
        null
    );
}

const addContent = () => {
    // Add Content
    const containerElement = document.createElement('div');

    // Create Element
    const learningFromInput = document.createElement('input');
    learningFromInput.type = "text";
    learningFromInput.placeholder = learningFromLanguage;

    const learningInputContainer = document.createElement('span');
    
    const learningInput = document.createElement('input');
    learningInput.type = "text";
    learningInput.placeholder = learningLanguage;

    const addButton = document.createElement('button');
    addButton.addEventListener('click', e => {
        // Delete Self
        lessonContentElement.removeChild();
    });
    addButton.innerText = '+';

    const br = document.createElement('br');

    // Build Element
    containerElement.appendChild(learningFromInput);

    learningInputContainer.appendChild(learningInput);
    containerElement.appendChild(learningInputContainer);

    containerElement.appendChild(addButton)

    containerElement.appendChild(br);

    Content.push([containerElement, learningFromInput, learningInput]);

    // Add to page
    lessonContentElement.appendChild(containerElement);
}

function OnWindowLoaded() {
    LessonCreating = new Lesson(0, "", "", "", "", []);
}

window.onload = OnWindowLoaded();