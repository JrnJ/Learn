//
// READ THIS!!!
//
// This is because I can read files in a github pages hosted site
// No node wont work either on github pages
// Dont forget to add these in lessons.js::GetAllLessons();

const JP_EN_HiraganaFile = "{\"id\":0,\"name\":\"Hiragana\",\"translatedName\":\"ひらがな\",\"learning\":2,\"learningFrom\":0,\"modes\":[{\"name\":\"No Dakuon\",\"rangeStart\":0,\"rangeEnd\":46},{\"name\":\"Only Dakuon\",\"rangeStart\":46,\"rangeEnd\":71}],\"content\":[{\"to\":\"a\",\"from\":[\"あ\",\"\",\"\"]},{\"to\":\"i\",\"from\":[\"い\",\"\",\"\"]},{\"to\":\"u\",\"from\":[\"う\",\"\",\"\"]},{\"to\":\"e\",\"from\":[\"え\",\"\",\"\"]},{\"to\":\"o\",\"from\":[\"お\",\"\",\"\"]},{\"to\":\"ka\",\"from\":[\"か\",\"\",\"\"]},{\"to\":\"ki\",\"from\":[\"き\",\"\",\"\"]},{\"to\":\"ku\",\"from\":[\"く\",\"\",\"\"]},{\"to\":\"ke\",\"from\":[\"け\",\"\",\"\"]},{\"to\":\"ko\",\"from\":[\"こ\",\"\",\"\"]},{\"to\":\"sa\",\"from\":[\"さ\",\"\",\"\"]},{\"to\":\"shi\",\"from\":[\"し\",\"\",\"\"]},{\"to\":\"su\",\"from\":[\"す\",\"\",\"\"]},{\"to\":\"se\",\"from\":[\"せ\",\"\",\"\"]},{\"to\":\"so\",\"from\":[\"そ\",\"\",\"\"]},{\"to\":\"ta\",\"from\":[\"た\",\"\",\"\"]},{\"to\":\"chi\",\"from\":[\"ち\",\"\",\"\"]},{\"to\":\"tsu\",\"from\":[\"つ\",\"\",\"\"]},{\"to\":\"te\",\"from\":[\"て\",\"\",\"\"]},{\"to\":\"to\",\"from\":[\"と\",\"\",\"\"]},{\"to\":\"na\",\"from\":[\"な\",\"\",\"\"]},{\"to\":\"ni\",\"from\":[\"に\",\"\",\"\"]},{\"to\":\"nu\",\"from\":[\"ぬ\",\"\",\"\"]},{\"to\":\"ne\",\"from\":[\"ね\",\"\",\"\"]},{\"to\":\"no\",\"from\":[\"の\",\"\",\"\"]},{\"to\":\"ha\",\"from\":[\"は\",\"\",\"\"]},{\"to\":\"hi\",\"from\":[\"ひ\",\"\",\"\"]},{\"to\":\"fu\",\"from\":[\"ふ\",\"\",\"\"]},{\"to\":\"he\",\"from\":[\"へ\",\"\",\"\"]},{\"to\":\"ho\",\"from\":[\"ほ\",\"\",\"\"]},{\"to\":\"ma\",\"from\":[\"ま\",\"\",\"\"]},{\"to\":\"mi\",\"from\":[\"み\",\"\",\"\"]},{\"to\":\"mu\",\"from\":[\"む\",\"\",\"\"]},{\"to\":\"me\",\"from\":[\"め\",\"\",\"\"]},{\"to\":\"mo\",\"from\":[\"も\",\"\",\"\"]},{\"to\":\"ya\",\"from\":[\"や\",\"\",\"\"]},{\"to\":\"yu\",\"from\":[\"ゆ\",\"\",\"\"]},{\"to\":\"yo\",\"from\":[\"よ\",\"\",\"\"]},{\"to\":\"ra\",\"from\":[\"ら\",\"\",\"\"]},{\"to\":\"ri\",\"from\":[\"り\",\"\",\"\"]},{\"to\":\"ru\",\"from\":[\"る\",\"\",\"\"]},{\"to\":\"re\",\"from\":[\"れ\",\"\",\"\"]},{\"to\":\"ro\",\"from\":[\"ろ\",\"\",\"\"]},{\"to\":\"wa\",\"from\":[\"わ\",\"\",\"\"]},{\"to\":\"wo\",\"from\":[\"を\",\"\",\"\"]},{\"to\":\"n\",\"from\":[\"ん\",\"\",\"\"]},{\"to\":\"ga\",\"from\":[\"が\",\"\",\"\"]},{\"to\":\"gi\",\"from\":[\"ぎ\",\"\",\"\"]},{\"to\":\"gu\",\"from\":[\"ぐ\",\"\",\"\"]},{\"to\":\"ge\",\"from\":[\"げ\",\"\",\"\"]},{\"to\":\"go\",\"from\":[\"ご\",\"\",\"\"]},{\"to\":\"za\",\"from\":[\"ざ\",\"\",\"\"]},{\"to\":\"ji\",\"from\":[\"じ\",\"\",\"\"]},{\"to\":\"zu\",\"from\":[\"ず\",\"\",\"\"]},{\"to\":\"ze\",\"from\":[\"ぜ\",\"\",\"\"]},{\"to\":\"zo\",\"from\":[\"ぞ\",\"\",\"\"]},{\"to\":\"da\",\"from\":[\"だ\",\"\",\"\"]},{\"to\":\"ji\",\"from\":[\"ぢ\",\"\",\"\"]},{\"to\":\"zu\",\"from\":[\"づ\",\"\",\"\"]},{\"to\":\"de\",\"from\":[\"で\",\"\",\"\"]},{\"to\":\"do\",\"from\":[\"ど\",\"\",\"\"]},{\"to\":\"ba\",\"from\":[\"ば\",\"\",\"\"]},{\"to\":\"bi\",\"from\":[\"び\",\"\",\"\"]},{\"to\":\"bu\",\"from\":[\"ぶ\",\"\",\"\"]},{\"to\":\"be\",\"from\":[\"べ\",\"\",\"\"]},{\"to\":\"bo\",\"from\":[\"ぼ\",\"\",\"\"]},{\"to\":\"pa\",\"from\":[\"ぱ\",\"\",\"\"]},{\"to\":\"pi\",\"from\":[\"ぴ\",\"\",\"\"]},{\"to\":\"pu\",\"from\":[\"ぷ\",\"\",\"\"]},{\"to\":\"pe\",\"from\":[\"ぺ\",\"\",\"\"]},{\"to\":\"po\",\"from\":[\"ぽ\",\"\",\"\"]}]}";

const JP_EN_ColorsFile = "{\"id\":0,\"name\":\"Colors\",\"translatedName\":\"色\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"red\",\"from\":[\"あか\",\"\",\"\"]},{\"to\":\"orange\",\"from\":[\"おれんじ\",\"\",\"\"]},{\"to\":\"yellow\",\"from\":[\"きいろい\",\"\",\"\"]},{\"to\":\"green\",\"from\":[\"みどり\",\"\",\"\"]},{\"to\":\"blue\",\"from\":[\"あお\",\"\",\"\"]},{\"to\":\"light blue\",\"from\":[\"みずいろ\",\"\",\"\"]},{\"to\":\"pink\",\"from\":[\"ももいろ\",\"\",\"\"]},{\"to\":\"purple\",\"from\":[\"むらさき\",\"\",\"\"]},{\"to\":\"brown\",\"from\":[\"ちゃいろ\",\"\",\"\"]},{\"to\":\"white\",\"from\":[\"しろ\",\"\",\"\"]},{\"to\":\"black\",\"from\":[\"くろい\",\"\",\"\"]},{\"to\":\"gray\",\"from\":[\"はいいろ\",\"\",\"\"]},{\"to\":\"gold\",\"from\":[\"きんいろ\",\"\",\"\"]},{\"to\":\"silver\",\"from\":[\"ぎんいろ\",\"\",\"\"]},{\"to\":\"rainbow\",\"from\":[\"にじいろ\",\"\",\"\"]}]}";

const JP_EN_NumbersFile = "{\"id\":0,\"name\":\"Numbers\",\"translatedName\":\"数字\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"0\",\"from\":[\"れい\",\"\",\"\"]},{\"to\":\"1\",\"from\":[\"いち\",\"\",\"\"]},{\"to\":\"2\",\"from\":[\"に\",\"\",\"\"]},{\"to\":\"3\",\"from\":[\"さん\",\"\",\"\"]},{\"to\":\"4\",\"from\":[\"よん\",\"\",\"\"]},{\"to\":\"5\",\"from\":[\"ご\",\"\",\"\"]},{\"to\":\"6\",\"from\":[\"ろく\",\"\",\"\"]},{\"to\":\"7\",\"from\":[\"なな\",\"\",\"\"]},{\"to\":\"8\",\"from\":[\"はち\",\"\",\"\"]},{\"to\":\"9\",\"from\":[\"きゅ\",\"\",\"\"]},{\"to\":\"10\",\"from\":[\"じょお\",\"\",\"\"]}]}";

const JP_EN_HiraganaCombination = "{\"id\":0,\"name\":\"Hiragana Combination\",\"translatedName\":\"組み合わせ\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"kya\",\"from\":[\"きゃ\",\"\",\"\"]},{\"to\":\"kyu\",\"from\":[\"きゅ\",\"\",\"\"]},{\"to\":\"kyo\",\"from\":[\"きょ\",\"\",\"\"]},{\"to\":\"gya\",\"from\":[\"ぎゃ\",\"\",\"\"]},{\"to\":\"gyu\",\"from\":[\"ぎゅ\",\"\",\"\"]},{\"to\":\"gyo\",\"from\":[\"ぎょ\",\"\",\"\"]},{\"to\":\"sha\",\"from\":[\"しゃ\",\"\",\"\"]},{\"to\":\"shu\",\"from\":[\"しゅ\",\"\",\"\"]},{\"to\":\"sho\",\"from\":[\"しょ\",\"\",\"\"]},{\"to\":\"ja\",\"from\":[\"じゃ\",\"\",\"\"]},{\"to\":\"ju\",\"from\":[\"じゅ\",\"\",\"\"]},{\"to\":\"jo\",\"from\":[\"じょ\",\"\",\"\"]},{\"to\":\"cha\",\"from\":[\"ちゃ\",\"\",\"\"]},{\"to\":\"chu\",\"from\":[\"ちゅ\",\"\",\"\"]},{\"to\":\"cho\",\"from\":[\"ちょ\",\"\",\"\"]},{\"to\":\"nya\",\"from\":[\"にゃ\",\"\",\"\"]},{\"to\":\"nyu\",\"from\":[\"にゅ\",\"\",\"\"]},{\"to\":\"nyo\",\"from\":[\"にょ\",\"\",\"\"]},{\"to\":\"hya\",\"from\":[\"ひゃ\",\"\",\"\"]},{\"to\":\"hyu\",\"from\":[\"ひゅ\",\"\",\"\"]},{\"to\":\"hyo\",\"from\":[\"ひょ\",\"\",\"\"]},{\"to\":\"bya\",\"from\":[\"びゃ\",\"\",\"\"]},{\"to\":\"byu\",\"from\":[\"びゅ\",\"\",\"\"]},{\"to\":\"byo\",\"from\":[\"びょ\",\"\",\"\"]},{\"to\":\"pya\",\"from\":[\"ぴゃ\",\"\",\"\"]},{\"to\":\"pyu\",\"from\":[\"ぴゅ\",\"\",\"\"]},{\"to\":\"pyo\",\"from\":[\"ぴょ\",\"\",\"\"]},{\"to\":\"mya\",\"from\":[\"みゃ\",\"\",\"\"]},{\"to\":\"myu\",\"from\":[\"みゅ\",\"\",\"\"]},{\"to\":\"myo\",\"from\":[\"みょ\",\"\",\"\"]},{\"to\":\"rya\",\"from\":[\"りゃ\",\"\",\"\"]},{\"to\":\"ryu\",\"from\":[\"りゅ\",\"\",\"\"]},{\"to\":\"ryo\",\"from\":[\"りょ\",\"\",\"\"]}]}";

const JP_EN_EverydayObjects = "{\"id\":0,\"name\":\"Everyday Objects\",\"translatedName\":\"Everyday Objects\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"Bed\",\"from\":[\"べっど\",\"\",\"\"]},{\"to\":\"Pillow\",\"from\":[\"まくら\",\"\",\"\"]},{\"to\":\"Lamp\",\"from\":[\"らんぷ\",\"\",\"\"]},{\"to\":\"Window\",\"from\":[\"まど\",\"\",\"\"]},{\"to\":\"Tree\",\"from\":[\"き\",\"\",\"\"]},{\"to\":\"Plant\",\"from\":[\"しょくぶつ\",\"\",\"\"]},{\"to\":\"Road\",\"from\":[\"みち\",\"\",\"\"]},{\"to\":\"Car\",\"from\":[\"じどうしゃ\",\"\",\"\"]},{\"to\":\"Train\",\"from\":[\"でんしゃ\",\"\",\"\"]},{\"to\":\"Shoes\",\"from\":[\"くつ\",\"\",\"\"]},{\"to\":\"Sock\",\"from\":[\"くつした\",\"\",\"\"]},{\"to\":\"Sun\",\"from\":[\"たいよう\",\"\",\"\"]},{\"to\":\"Moon\",\"from\":[\"つき\",\"\",\"\"]}]}"
