const cardContainer = document.getElementById("cardContainer");

function OnWindowLoad() {
    GetAllLessons();
    
    for (let i = 0; i < AllLessons.length; i++) {
        AllLessons[i].id = i;
        addLessonCardToContainer(AllLessons[i]);
    }
}

const addLessonCardToContainer = (lesson) => {
    // Create Element
    const containerElement = document.createElement('div');
    containerElement.classList = ['test'];

    // Create Content
    const cardLink = document.createElement('a');
    cardLink.href = "./customize.html?exercise=" + lesson.name;

    // Content Container
    const cardContentContainer = document.createElement('div');
    cardContentContainer.classList = ['learningCard'];

    const lessonNameText = document.createElement('span');
    lessonNameText.textContent = lesson.name;

    const lessonTranslatedNameText = document.createElement('span');
    lessonTranslatedNameText.textContent = lesson.translatedName;

    const lessonLanguageText = document.createElement('span');
    lessonLanguageText.textContent = Object.keys(LanguageCodes)[lesson.learning] + '-' + Object.keys(LanguageCodes)[lesson.learningFrom];
    lessonLanguageText.style.fontSize = "14px";
    lessonLanguageText.style.color = "#999999";
    lessonLanguageText.style.marginTop = "-3px";

    // Build Element
    cardContentContainer.appendChild(lessonNameText);
    cardContentContainer.appendChild(lessonTranslatedNameText);
    cardContentContainer.appendChild(lessonLanguageText);

    cardLink.appendChild(cardContentContainer);

    containerElement.appendChild(cardLink);

    // Add to Screen
    cardContainer.appendChild(containerElement);
}

window.onload = OnWindowLoad();