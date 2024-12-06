import { getAllLessonsData } from './lessonloader.js';
import { LanguageCodes } from './lesson.js'

const lessonCardContainer = document.querySelector('#lessonCardContainer');

window.addEventListener('DOMContentLoaded', async () => {
    const lessons = await getAllLessonsData();

    lessons.lessons.forEach(lesson => {
        lessonCardContainer.appendChild(createLessonCard(lesson));
    })
});

const createLessonCard = (lesson) => {
    // Create Element
    const card = document.createElement('li');

    // Create Card Link
    const cardLink = document.createElement('a');
    cardLink.href = "./customize.html?exercise=" + lesson.name;

    // Create Button
    const button = document.createElement('button');
    button.classList.add('lessonCard');

    const lessonNameText = document.createElement('span');
    lessonNameText.textContent = lesson.name;

    const lessonTranslatedNameText = document.createElement('span');
    lessonTranslatedNameText.textContent = lesson.translatedName;

    const lessonLanguageText = document.createElement('span');
    lessonLanguageText.textContent = Object.keys(LanguageCodes)[lesson.learning] + '-' + Object.keys(LanguageCodes)[lesson.learningFrom];
    lessonLanguageText.classList.add('grey');

    // Build Element
    button.appendChild(lessonNameText);
    button.appendChild(lessonTranslatedNameText);
    button.appendChild(lessonLanguageText);

    cardLink.appendChild(button);

    card.appendChild(cardLink);

    return card;
}