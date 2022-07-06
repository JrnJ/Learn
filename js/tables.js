class JPTranslation {
    constructor(english, hiragana, katakana, kanji) {
        this.english = english;
        this.hiragana = hiragana;
        this.katakana = katakana;
        this.kanji = kanji;
    }
};

const StrToLesson = (value) => {
    switch (value) {
        // Characters
        case "Hiragana":
            return HiraganaRomanTable;

            // Regular
        case "Numbers":
            return TtNumbers;
        case "Colors":
            return TtColors;
        case "WindDirections":
            return TtWindDirections;
    }
}

// <Characters> //
const HiraganaRomanTable = [
    // Primary
    new JPTranslation("a", "あ", "", ""), new JPTranslation("i", "い", "", ""), new JPTranslation("u", "う", "", ""), new JPTranslation("e", "え", "", ""), new JPTranslation("o", "お", "", ""),
    new JPTranslation("ka", "か", "", ""), new JPTranslation("ki", "き", "", ""), new JPTranslation("ku", "く", "", ""), new JPTranslation("ke", "け", "", ""), new JPTranslation("ko", "こ", "", ""),
    new JPTranslation("sa", "さ", "", ""), new JPTranslation("shi", "し", "", ""), new JPTranslation("su", "す", "", ""), new JPTranslation("se", "せ", "", ""), new JPTranslation("so", "そ", "", ""),
    new JPTranslation("ta", "た", "", ""), new JPTranslation("chi", "ち", "", ""), new JPTranslation("tsu", "つ", "", ""), new JPTranslation("te", "て", "", ""), new JPTranslation("to", "と", "", ""),
    new JPTranslation("na", "な", "", ""), new JPTranslation("ni", "に", "", ""), new JPTranslation("nu", "ぬ", "", ""), new JPTranslation("ne", "ね", "", ""), new JPTranslation("no", "の", "", ""),
    new JPTranslation("ha", "は", "", ""), new JPTranslation("hi", "ひ", "", ""), new JPTranslation("fu", "ふ", "", ""), new JPTranslation("he", "へ", "", ""), new JPTranslation("ho", "ほ", "", ""),
    new JPTranslation("ma", "ま", "", ""), new JPTranslation("mi", "み", "", ""), new JPTranslation("mu", "む", "", ""), new JPTranslation("me", "め", "", ""), new JPTranslation("mo", "も", "", ""),
    new JPTranslation("ya", "や", "", ""), new JPTranslation("yu", "ゆ", "", ""), new JPTranslation("yo", "よ", "", ""),
    new JPTranslation("ra", "ら", "", ""), new JPTranslation("ri", "り", "", ""), new JPTranslation("ru", "る", "", ""), new JPTranslation("re", "れ", "", ""), new JPTranslation("ro", "ろ", "", ""),
    new JPTranslation("wa", "わ", "", ""), new JPTranslation("wo", "を", "", ""),
    new JPTranslation("n", "ん", "", ""),
    // Dakuon
    // new JPTranslation("ga", "が", "", ""), new JPTranslation("gi", "ぎ", "", ""), new JPTranslation("gu", "ぐ", "", ""), new JPTranslation("ge", "げ", "", ""), new JPTranslation("go", "ご", "", ""),
    // new JPTranslation("za", "ざ", "", ""), new JPTranslation("ji", "じ", "", ""), new JPTranslation("zu", "ず", "", ""), new JPTranslation("ze", "ぜ", "", ""), new JPTranslation("zo", "ぞ", "", ""),
    // new JPTranslation("da", "だ", "", ""), new JPTranslation("ji", "ぢ", "", ""), new JPTranslation("zu", "づ", "", ""), new JPTranslation("de", "で", "", ""), new JPTranslation("do", "ど", "", ""),
    // new JPTranslation("ba", "ば", "", ""), new JPTranslation("bi", "び", "", ""), new JPTranslation("bu", "ぶ", "", ""), new JPTranslation("be", "べ", "", ""), new JPTranslation("bo", "ぼ", "", ""),
    // new JPTranslation("pa", "ぱ", "", ""), new JPTranslation("pi", "ぴ", "", ""), new JPTranslation("pu", "ぷ", "", ""), new JPTranslation("pe", "ぺ", "", ""), new JPTranslation("po", "ぽ", "", ""),
];
// </Characters> //

const TtEmptyExample = [
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
];

const TtNumbers = [
    new JPTranslation("0", "れい", "", ""),
    new JPTranslation("1", "いち", "", ""),
    new JPTranslation("2", "に", "", ""),
    new JPTranslation("3", "さん", "", ""),
    new JPTranslation("4", "よん", "", ""),
    new JPTranslation("5", "ご", "", ""),
    new JPTranslation("6", "ろく", "", ""),
    new JPTranslation("7", "なな", "", ""),
    new JPTranslation("8", "はち", "", ""),
    new JPTranslation("9", "きゅ", "", ""),
];

const TtColors = [
    new JPTranslation("red", "あか", "", ""),
    new JPTranslation("orange", "おれんじ", "", ""),
    new JPTranslation("yellow", "きいろい", "", ""),
    new JPTranslation("green", "みどり", "", ""),
    // new JPTranslation("lime", "", "", ""),
    new JPTranslation("blue", "あお", "", ""),
    new JPTranslation("light blue", "みずいろ", "", ""),
    // new JPTranslation("aqua", "", "", ""),
    // new JPTranslation("cyan", "", "", ""),
    new JPTranslation("pink", "ももいろ", "", ""),
    new JPTranslation("purple", "むらさき", "", ""),
    new JPTranslation("brown", "ちゃいろ", "", ""),
    new JPTranslation("white", "しろ", "", ""),
    new JPTranslation("black", "くろい", "", ""),
    new JPTranslation("grey", "はいいろ", "", ""),

    // Metals
    new JPTranslation("gold", "きんいろ", "", ""),
    new JPTranslation("silver", "ぎんいろ", "", ""),
    new JPTranslation("rainbow", "にじいろ", "", ""),
];

const TtWindDirections = [
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
];

const TtEverydayObjects = [
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
    new JPTranslation("", "", "", ""),
];