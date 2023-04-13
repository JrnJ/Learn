const lessonCardContainer = document.getElementById('lessonCardContainer');

function OnWindowLoad() {
    GetAllLessons();
    
    for (let i = 0; i < AllLessons.length; i++) {
        AllLessons[i].id = i;
        addLessonCardToContainer(AllLessons[i]);
    }
}

const addLessonCardToContainer = (lesson) => {
    // Create Element
    const card = document.createElement('li');

    // Create Card Link
    const cardLink = document.createElement('a');
    cardLink.href = "./customize.html?exercise=" + lesson.name;

    // Create Button
    const button = document.createElement('button');
    button.classList = ['lessonCard'];

    const lessonNameText = document.createElement('span');
    lessonNameText.textContent = lesson.name;

    const lessonTranslatedNameText = document.createElement('span');
    lessonTranslatedNameText.textContent = lesson.translatedName;

    const lessonLanguageText = document.createElement('span');
    lessonLanguageText.textContent = Object.keys(LanguageCodes)[lesson.learning] + '-' + Object.keys(LanguageCodes)[lesson.learningFrom];
    lessonLanguageText.classList = ['grey'];

    // Build Element
    button.appendChild(lessonNameText);
    button.appendChild(lessonTranslatedNameText);
    button.appendChild(lessonLanguageText);

    cardLink.appendChild(button);

    card.appendChild(cardLink);

    // Add to Screen
    lessonCardContainer.appendChild(card);
}

window.onload = OnWindowLoad();