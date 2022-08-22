class Lesson {
    constructor(id, name, translatedName, learning, learningFrom, content) {
        this.id = id; // Int
        this.name = name; // String
        this.translatedName = translatedName; // String
        this.learning = learning; // Int
        this.learningFrom = learningFrom; // Int
        this.content = content; // Array of Translation
    }
};

class Translation {
    constructor(to, from) {
        this.to = to; // String
        this.from = from; // String
    }
};

class Dictionary {
    constructor(name, id) {
        this.name = name;
        this.id = id;
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

let Lessons = [];

function GetAllLessons() {
    // Lessons.push(BasicExampleLessonFile);
    Lessons.push(JSON.parse(JP_EN_HiraganaFile));
    Lessons.push(JSON.parse(JP_EN_NumbersFile));
    Lessons.push(JSON.parse(JP_EN_ColorsFile));
}

const GetLessonByName = (name) => {
    // for (let i = 0; i < Lessons.length; i++) {
    //     if (Lessons[i].name == name)
    //         return Lessons[i];
    // }
    // return null;

    switch (name) {
        case "Hiragana": return JSON.parse(AdvancedExampleLessonFile);
        case "Numbers": return JSON.parse(AdvancedExampleLessonFile);
        case "Colors": return JSON.parse(AdvancedExampleLessonFile);
    }
}