// import { Lesson, Translation, LessonMode, Dictionary, Languages, LanguageCodes } from './lesson.js';

export class Lesson {
    constructor(id, name, translatedName, learning, learningFrom, modes, content) {
        this.id = id; // Int
        this.name = name; // String
        this.translatedName = translatedName; // String
        this.learning = learning; // Int
        this.learningFrom = learningFrom; // Int
        this.modes = modes; // Array of LessonMode
        this.content = content; // Array of Translation
    }
};

export class Translation {
    constructor(to, from) {
        this.to = to; // String
        this.from = from; // Array of String
    }
};

export class LessonMode {
    constructor(name, rangeStart, rangeEnd) {
        this.name = name; // String
        this.rangeStart = rangeStart; // Int
        this.rangeEnd = rangeEnd; // Int
    }
}

export class Dictionary {
    constructor(name, id) {
        this.name = name; // String
        this.id = id; // Int/Other
    }
};

export const Languages = Object.freeze({
    English: 0,
    Dutch: 1,
    Japanese: 2
});

export const LanguageCodes = Object.freeze({
    EN: 0,
    NL: 1,
    JP: 2
});