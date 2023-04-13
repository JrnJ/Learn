const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

const CurrentLesson = GetLessonByName(exerciseParam);

const lessonContentContainer = document.querySelector('#lessonContentContainer');

function addContent(content) {
    const li = document.createElement('li');

    let newContent = [];

    if (content != null) {
        newContent.push(content.to);

        for (let i = 0; i < content.from.length; i++) {
            newContent.push(content.from[i]);
        }
    }

    // Build Element
    for (let i = 0; i < 4; i++) {
        const learningInput = document.createElement('span');
        // learningInput.type = "text";
        // learningInput.placeholder = "placeholder hi";
        if (content != null) {
            learningInput.innerText = newContent[i];
        }
        li.appendChild(learningInput);
    }

    // Add to Page
    lessonContentContainer.appendChild(li);
}

function OnWindowLoaded() {
    // Load Content
    for (let i = 0; i < CurrentLesson.content.length; i++) {
        addContent(CurrentLesson.content[i]);
    }

    document.title = "View Lesson | " + exerciseParam;
}

window.onload = OnWindowLoaded();