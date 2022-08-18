class Lesson {
    constructor(name, learning, learningFrom, content) {
        this.name = name;
        this.learning = learning;
        this.learningFrom = learningFrom;
        this.content = content;
    }
};

class Translation {
    constructor(to, from) {
        this.to = to;
        this.from = from;
    }
};

const Languages = {
    English: 0,
    Dutch: 1,
    Japanese: 2
};

// Basic
const BasicExampleTranslation = new Translation("Netherlands", "Nederland");
const BasicExampleTranslationTwo = new Translation("Dutch", "Nederlands");

const BasicContent = [ BasicExampleTranslation, BasicExampleTranslationTwo ];
let BasicExampleLesson = new Lesson("Basic Example", Languages.Dutch, Languages.English, BasicContent);

// Advanced
const AdvancedExampleTranslation = new Translation("Japan", ["にほん", "ニホン", "日本"]);
const AdvancedExampleTranslationTwo = new Translation("Japanese", ["にほん", "ニホン", "日本"]);

const AdvancedContent = [ AdvancedExampleTranslation, AdvancedExampleTranslationTwo ];
let AdvancedExampleLesson = new Lesson("Advanced Example", Languages.Japanese, Languages.English, AdvancedContent);