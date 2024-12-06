import { getLessonByName } from './lessonloader.js';

const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

document.addEventListener('DOMContentLoaded', async () => {
    const lesson = await getLessonByName(exerciseParam);
    document.querySelector('#lessonName').textContent = lesson.name + " | " + lesson.translatedName + " " + lesson.content.length + " questions.";
    showLessonContent(lesson);
});

function showLessonContent(lesson) {
    // Create Table
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('overflow-x');

    const button = document.createElement('button');
    button.textContent = "Back to Lesson";
    button.id = "back-to-lesson";
    button.addEventListener('click', () => {
        window.location.href = "./customize.html?exercise=" + lesson.name
    });
    tableContainer.appendChild(button);

    const table = document.createElement('table');
    tableContainer.appendChild(table);

    // Create Table Header
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    tr.appendChild(createTableHeader("From"));
    tr.appendChild(createTableHeader("To"));

    thead.appendChild(tr);
    table.appendChild(thead);

    // Load Content
    const tbody = document.createElement('tbody');
    for (let i = 0; i < lesson.content.length; i++) {
        tbody.appendChild(createContentRow(lesson.content[i]));
    }
    table.appendChild(tbody);

    // Add to Page
    document.querySelector('#lesson-content-container').appendChild(tableContainer);

    return tableContainer;
}

function createTableHeader(content) {
    const th = document.createElement('th');
    th.textContent = content;
    return th;
}

function createContentRow(translation) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = translation.from[0];

    const td2 = document.createElement('td');
    td2.textContent = translation.to;

    tr.appendChild(td1);
    tr.appendChild(td2);
    return tr;
}