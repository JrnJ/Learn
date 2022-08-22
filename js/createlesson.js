const lessonContentElement = document.getElementById("lessonContentElement");

let learningLanguage = "Japanese";
let learningFromLanguage = "English";

let LessonCreating;

const addContentClick = () => {
    addContent();
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
    addButton.innerText = '+';

    const br = document.createElement('br');

    // Build Element
    containerElement.appendChild(learningFromInput);

    learningInputContainer.appendChild(learningInput);
    containerElement.appendChild(learningInputContainer);

    containerElement.appendChild(addButton)

    containerElement.appendChild(br);

    // Add to page
    lessonContentElement.appendChild(containerElement);
}

function OnWindowLoaded() {
    LessonCreating = new Lesson(0, "", "", "", "", []);
}

window.onload = OnWindowLoaded();