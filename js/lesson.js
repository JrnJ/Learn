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
        this.from = from; // Array of String
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
let JSON_LESSON = [];

function GetAllLessons() {
    AllLessons.push(JSON.parse(JP_EN_HiraganaFile));
    AllLessons.push(JSON.parse(JP_EN_HiraganaCombination));
    AllLessons.push(JSON.parse(JP_EN_NumbersFile));
    AllLessons.push(JSON.parse(JP_EN_ColorsFile));
    AllLessons.push(JSON.parse(JP_EN_EverydayObjects));
    AllLessons.push(JSON.parse(ITIL_GEN));
    AllLessons.push(JSON.parse(ITIL_DOEL));
}

const GetLessonByName = (name) => {
    switch (name) {
        case "Any": return JSON.parse(JSON_LESSON);
        case "Hiragana": return JSON.parse(JP_EN_HiraganaFile);
        case "Hiragana Combination": return JSON.parse(JP_EN_HiraganaCombination);
        case "Numbers": return JSON.parse(JP_EN_NumbersFile);
        case "Colors": return JSON.parse(JP_EN_ColorsFile);
        case "Everyday Objects": return JSON.parse(JP_EN_EverydayObjects);
        case "ITIL_GEN": return JSON.parse(ITIL_GEN);
        case "ITIL_DOEL": return JSON.parse(ITIL_DOEL);
    }
}