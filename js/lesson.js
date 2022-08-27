class Lesson {
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

class Translation {
    constructor(to, from) {
        this.to = to; // String
        this.from = from; // String
    }
};

class LessonMode {
    constructor(name, rangeStart, rangeEnd) {
        this.name = name; // String
        this.rangeStart = rangeStart; // Int
        this.rangeEnd = rangeEnd; // Int
    }
}

class Dictionary {
    constructor(name, id) {
        this.name = name; // String
        this.id = id; // Int/Other
    }
};

const Languages = Object.freeze({
    English: 0,
    Dutch: 1,
    Japanese: 2
});

const LanguageCodes = Object.freeze({
    EN: 0,
    NL: 1,
    JP: 2
});

let AllLessons = [];

function GetAllLessons() {
    AllLessons.push(JSON.parse(JP_EN_HiraganaFile));
    AllLessons.push(JSON.parse(JP_EN_NumbersFile));
    AllLessons.push(JSON.parse(JP_EN_ColorsFile));
}

const GetLessonByName = (name) => {
    switch (name) {
        case "Hiragana": return JSON.parse(JP_EN_HiraganaFile);
        case "Numbers": return JSON.parse(JP_EN_NumbersFile);
        case "Colors": return JSON.parse(JP_EN_ColorsFile);
    }
}