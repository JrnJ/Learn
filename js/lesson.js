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
    Lessons.push(JSON.parse(AdvancedExampleLessonFile));
}

const GetLessonByName = (name) => {
    // for (let i = 0; i < Lessons.length; i++) {
    //     if (Lessons[i].name == name)
    //         return Lessons[i];
    // }
    // return null;

    switch (name) {
        case "Advanced Example": return JSON.parse(AdvancedExampleLessonFile);
    }
}