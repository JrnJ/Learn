//
// READ THIS!!!
//
// This is because I cant read files in a github pages hosted site
// No node wont work either on github pages
// Dont forget to add these in lessons.js::GetAllLessons();

const JP_EN_HiraganaFile = "{\"id\":0,\"name\":\"Hiragana\",\"translatedName\":\"ひらがな\",\"learning\":2,\"learningFrom\":0,\"modes\":[{\"name\":\"No Dakuon\",\"rangeStart\":0,\"rangeEnd\":46},{\"name\":\"Only Dakuon\",\"rangeStart\":46,\"rangeEnd\":71}],\"content\":[{\"to\":\"a\",\"from\":[\"あ\",\"\",\"\"]},{\"to\":\"i\",\"from\":[\"い\",\"\",\"\"]},{\"to\":\"u\",\"from\":[\"う\",\"\",\"\"]},{\"to\":\"e\",\"from\":[\"え\",\"\",\"\"]},{\"to\":\"o\",\"from\":[\"お\",\"\",\"\"]},{\"to\":\"ka\",\"from\":[\"か\",\"\",\"\"]},{\"to\":\"ki\",\"from\":[\"き\",\"\",\"\"]},{\"to\":\"ku\",\"from\":[\"く\",\"\",\"\"]},{\"to\":\"ke\",\"from\":[\"け\",\"\",\"\"]},{\"to\":\"ko\",\"from\":[\"こ\",\"\",\"\"]},{\"to\":\"sa\",\"from\":[\"さ\",\"\",\"\"]},{\"to\":\"shi\",\"from\":[\"し\",\"\",\"\"]},{\"to\":\"su\",\"from\":[\"す\",\"\",\"\"]},{\"to\":\"se\",\"from\":[\"せ\",\"\",\"\"]},{\"to\":\"so\",\"from\":[\"そ\",\"\",\"\"]},{\"to\":\"ta\",\"from\":[\"た\",\"\",\"\"]},{\"to\":\"chi\",\"from\":[\"ち\",\"\",\"\"]},{\"to\":\"tsu\",\"from\":[\"つ\",\"\",\"\"]},{\"to\":\"te\",\"from\":[\"て\",\"\",\"\"]},{\"to\":\"to\",\"from\":[\"と\",\"\",\"\"]},{\"to\":\"na\",\"from\":[\"な\",\"\",\"\"]},{\"to\":\"ni\",\"from\":[\"に\",\"\",\"\"]},{\"to\":\"nu\",\"from\":[\"ぬ\",\"\",\"\"]},{\"to\":\"ne\",\"from\":[\"ね\",\"\",\"\"]},{\"to\":\"no\",\"from\":[\"の\",\"\",\"\"]},{\"to\":\"ha\",\"from\":[\"は\",\"\",\"\"]},{\"to\":\"hi\",\"from\":[\"ひ\",\"\",\"\"]},{\"to\":\"fu\",\"from\":[\"ふ\",\"\",\"\"]},{\"to\":\"he\",\"from\":[\"へ\",\"\",\"\"]},{\"to\":\"ho\",\"from\":[\"ほ\",\"\",\"\"]},{\"to\":\"ma\",\"from\":[\"ま\",\"\",\"\"]},{\"to\":\"mi\",\"from\":[\"み\",\"\",\"\"]},{\"to\":\"mu\",\"from\":[\"む\",\"\",\"\"]},{\"to\":\"me\",\"from\":[\"め\",\"\",\"\"]},{\"to\":\"mo\",\"from\":[\"も\",\"\",\"\"]},{\"to\":\"ya\",\"from\":[\"や\",\"\",\"\"]},{\"to\":\"yu\",\"from\":[\"ゆ\",\"\",\"\"]},{\"to\":\"yo\",\"from\":[\"よ\",\"\",\"\"]},{\"to\":\"ra\",\"from\":[\"ら\",\"\",\"\"]},{\"to\":\"ri\",\"from\":[\"り\",\"\",\"\"]},{\"to\":\"ru\",\"from\":[\"る\",\"\",\"\"]},{\"to\":\"re\",\"from\":[\"れ\",\"\",\"\"]},{\"to\":\"ro\",\"from\":[\"ろ\",\"\",\"\"]},{\"to\":\"wa\",\"from\":[\"わ\",\"\",\"\"]},{\"to\":\"wo\",\"from\":[\"を\",\"\",\"\"]},{\"to\":\"n\",\"from\":[\"ん\",\"\",\"\"]},{\"to\":\"ga\",\"from\":[\"が\",\"\",\"\"]},{\"to\":\"gi\",\"from\":[\"ぎ\",\"\",\"\"]},{\"to\":\"gu\",\"from\":[\"ぐ\",\"\",\"\"]},{\"to\":\"ge\",\"from\":[\"げ\",\"\",\"\"]},{\"to\":\"go\",\"from\":[\"ご\",\"\",\"\"]},{\"to\":\"za\",\"from\":[\"ざ\",\"\",\"\"]},{\"to\":\"ji\",\"from\":[\"じ\",\"\",\"\"]},{\"to\":\"zu\",\"from\":[\"ず\",\"\",\"\"]},{\"to\":\"ze\",\"from\":[\"ぜ\",\"\",\"\"]},{\"to\":\"zo\",\"from\":[\"ぞ\",\"\",\"\"]},{\"to\":\"da\",\"from\":[\"だ\",\"\",\"\"]},{\"to\":\"ji\",\"from\":[\"ぢ\",\"\",\"\"]},{\"to\":\"zu\",\"from\":[\"づ\",\"\",\"\"]},{\"to\":\"de\",\"from\":[\"で\",\"\",\"\"]},{\"to\":\"do\",\"from\":[\"ど\",\"\",\"\"]},{\"to\":\"ba\",\"from\":[\"ば\",\"\",\"\"]},{\"to\":\"bi\",\"from\":[\"び\",\"\",\"\"]},{\"to\":\"bu\",\"from\":[\"ぶ\",\"\",\"\"]},{\"to\":\"be\",\"from\":[\"べ\",\"\",\"\"]},{\"to\":\"bo\",\"from\":[\"ぼ\",\"\",\"\"]},{\"to\":\"pa\",\"from\":[\"ぱ\",\"\",\"\"]},{\"to\":\"pi\",\"from\":[\"ぴ\",\"\",\"\"]},{\"to\":\"pu\",\"from\":[\"ぷ\",\"\",\"\"]},{\"to\":\"pe\",\"from\":[\"ぺ\",\"\",\"\"]},{\"to\":\"po\",\"from\":[\"ぽ\",\"\",\"\"]}]}";

const JP_EN_ColorsFile = "{\"id\":0,\"name\":\"Colors\",\"translatedName\":\"色\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"red\",\"from\":[\"あか\",\"\",\"\"]},{\"to\":\"orange\",\"from\":[\"おれんじ\",\"\",\"\"]},{\"to\":\"yellow\",\"from\":[\"きいろい\",\"\",\"\"]},{\"to\":\"green\",\"from\":[\"みどり\",\"\",\"\"]},{\"to\":\"blue\",\"from\":[\"あお\",\"\",\"\"]},{\"to\":\"light blue\",\"from\":[\"みずいろ\",\"\",\"\"]},{\"to\":\"pink\",\"from\":[\"ももいろ\",\"\",\"\"]},{\"to\":\"purple\",\"from\":[\"むらさき\",\"\",\"\"]},{\"to\":\"brown\",\"from\":[\"ちゃいろ\",\"\",\"\"]},{\"to\":\"white\",\"from\":[\"しろ\",\"\",\"\"]},{\"to\":\"black\",\"from\":[\"くろい\",\"\",\"\"]},{\"to\":\"gray\",\"from\":[\"はいいろ\",\"\",\"\"]},{\"to\":\"gold\",\"from\":[\"きんいろ\",\"\",\"\"]},{\"to\":\"silver\",\"from\":[\"ぎんいろ\",\"\",\"\"]},{\"to\":\"rainbow\",\"from\":[\"にじいろ\",\"\",\"\"]}]}";

const JP_EN_NumbersFile = "{\"id\":0,\"name\":\"Numbers\",\"translatedName\":\"数字\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"0\",\"from\":[\"れい\",\"\",\"\"]},{\"to\":\"1\",\"from\":[\"いち\",\"\",\"\"]},{\"to\":\"2\",\"from\":[\"に\",\"\",\"\"]},{\"to\":\"3\",\"from\":[\"さん\",\"\",\"\"]},{\"to\":\"4\",\"from\":[\"よん\",\"\",\"\"]},{\"to\":\"5\",\"from\":[\"ご\",\"\",\"\"]},{\"to\":\"6\",\"from\":[\"ろく\",\"\",\"\"]},{\"to\":\"7\",\"from\":[\"なな\",\"\",\"\"]},{\"to\":\"8\",\"from\":[\"はち\",\"\",\"\"]},{\"to\":\"9\",\"from\":[\"きゅ\",\"\",\"\"]},{\"to\":\"10\",\"from\":[\"じょお\",\"\",\"\"]}]}";

const JP_EN_HiraganaCombination = "{\"id\":0,\"name\":\"Hiragana Combination\",\"translatedName\":\"組み合わせ\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"kya\",\"from\":[\"きゃ\",\"\",\"\"]},{\"to\":\"kyu\",\"from\":[\"きゅ\",\"\",\"\"]},{\"to\":\"kyo\",\"from\":[\"きょ\",\"\",\"\"]},{\"to\":\"gya\",\"from\":[\"ぎゃ\",\"\",\"\"]},{\"to\":\"gyu\",\"from\":[\"ぎゅ\",\"\",\"\"]},{\"to\":\"gyo\",\"from\":[\"ぎょ\",\"\",\"\"]},{\"to\":\"sha\",\"from\":[\"しゃ\",\"\",\"\"]},{\"to\":\"shu\",\"from\":[\"しゅ\",\"\",\"\"]},{\"to\":\"sho\",\"from\":[\"しょ\",\"\",\"\"]},{\"to\":\"ja\",\"from\":[\"じゃ\",\"\",\"\"]},{\"to\":\"ju\",\"from\":[\"じゅ\",\"\",\"\"]},{\"to\":\"jo\",\"from\":[\"じょ\",\"\",\"\"]},{\"to\":\"cha\",\"from\":[\"ちゃ\",\"\",\"\"]},{\"to\":\"chu\",\"from\":[\"ちゅ\",\"\",\"\"]},{\"to\":\"cho\",\"from\":[\"ちょ\",\"\",\"\"]},{\"to\":\"nya\",\"from\":[\"にゃ\",\"\",\"\"]},{\"to\":\"nyu\",\"from\":[\"にゅ\",\"\",\"\"]},{\"to\":\"nyo\",\"from\":[\"にょ\",\"\",\"\"]},{\"to\":\"hya\",\"from\":[\"ひゃ\",\"\",\"\"]},{\"to\":\"hyu\",\"from\":[\"ひゅ\",\"\",\"\"]},{\"to\":\"hyo\",\"from\":[\"ひょ\",\"\",\"\"]},{\"to\":\"bya\",\"from\":[\"びゃ\",\"\",\"\"]},{\"to\":\"byu\",\"from\":[\"びゅ\",\"\",\"\"]},{\"to\":\"byo\",\"from\":[\"びょ\",\"\",\"\"]},{\"to\":\"pya\",\"from\":[\"ぴゃ\",\"\",\"\"]},{\"to\":\"pyu\",\"from\":[\"ぴゅ\",\"\",\"\"]},{\"to\":\"pyo\",\"from\":[\"ぴょ\",\"\",\"\"]},{\"to\":\"mya\",\"from\":[\"みゃ\",\"\",\"\"]},{\"to\":\"myu\",\"from\":[\"みゅ\",\"\",\"\"]},{\"to\":\"myo\",\"from\":[\"みょ\",\"\",\"\"]},{\"to\":\"rya\",\"from\":[\"りゃ\",\"\",\"\"]},{\"to\":\"ryu\",\"from\":[\"りゅ\",\"\",\"\"]},{\"to\":\"ryo\",\"from\":[\"りょ\",\"\",\"\"]}]}";

const JP_EN_EverydayObjects = "{\"id\":0,\"name\":\"Everyday Objects\",\"translatedName\":\"Everyday Objects\",\"learning\":\"2\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"Bed\",\"from\":[\"べっど\",\"\",\"\"]},{\"to\":\"Pillow\",\"from\":[\"まくら\",\"\",\"\"]},{\"to\":\"Lamp\",\"from\":[\"らんぷ\",\"\",\"\"]},{\"to\":\"Window\",\"from\":[\"まど\",\"\",\"\"]},{\"to\":\"Tree\",\"from\":[\"き\",\"\",\"\"]},{\"to\":\"Plant\",\"from\":[\"しょくぶつ\",\"\",\"\"]},{\"to\":\"Road\",\"from\":[\"みち\",\"\",\"\"]},{\"to\":\"Car\",\"from\":[\"じどうしゃ\",\"\",\"\"]},{\"to\":\"Train\",\"from\":[\"でんしゃ\",\"\",\"\"]},{\"to\":\"Shoes\",\"from\":[\"くつ\",\"\",\"\"]},{\"to\":\"Sock\",\"from\":[\"くつした\",\"\",\"\"]},{\"to\":\"Sun\",\"from\":[\"たいよう\",\"\",\"\"]},{\"to\":\"Moon\",\"from\":[\"つき\",\"\",\"\"]}]}"

const ITIL_GEN = "{\"id\":0,\"name\":\"ITIL_GEN\",\"translatedName\":\"Hoofdstuk & Proces\",\"learning\":\"1\",\"learningFrom\":\"1\",\"modes\":null,\"content\":[{\"to\":\"Servicestrategiefase, Serviceontwerpfase, Servicetransitiefase, Serviceproductiefase, Continue serviceverbeteringsfase\",\"from\":[\"Noem hoofdstukken in volgorde\",\"\",\"\"]},{\"to\":\"Strategiemanagement voor IT-services. Serviceportfoliomanagement. Financieel management voor IT-services. Demandmanagement. Klantrelatiebeheer.\",\"from\":[\"Processen Servicestrategiefase\",\"\",\"\"]},{\"to\":\"1. Ontwerpcoördinatie. 2. Servicecatalogusmanagement. 3. Servicelevelmanagement. 4. Capaciteitsmanagement. 5. Availabilitymanagement. 6. IT-service continuity management (ITSCM). 7. Information security management. 8. Leveranciersmanagement.\",\"from\":[\"Processen Serviceontwerpfase\",\"\",\"\"]},{\"to\":\"1. Transitieplanning en -ondersteuning. 2. Changemanagement. 3. Serviceasset- en configuratiemanagement. 4. Release & deployment management. 5. Service validation & testing. 6. Change evaluation. 7. Kennismanagement.\",\"from\":[\"Processen Servicetransitiefase\",\"\",\"\"]},{\"to\":\"1. Eventmanagement. 2. Incidentmanagement. 3. Problemmanagement. 4. Request Fulfillment. 5. Accessmanagement.\",\"from\":[\"Processen Serviceproductiefase\",\"\",\"\"]}]}";

const ITIL_DOEL = "{\"id\":0,\"name\":\"ITIL_DOEL\",\"translatedName\":\"Doelen\",\"learning\":\"1\",\"learningFrom\":\"1\",\"modes\":null,\"content\":[{\"to\":\"In staat zijn het vermogen te ontwikkelen om een strategisch voordeel te behalen en te behouden.\",\"from\":[\"Strategiemanagement\",\"\",\"\"]},{\"to\":\"Toezien dan een serviceprovider de juiste mix van services levert tegen de juiste prijs.\",\"from\":[\"Serviceportfoliomanagement\",\"\",\"\"]},{\"to\":\"Het niveau te garanderen van financieren tot ontwerpen, ontwikkelen en leveren van services dat past binnen de strategie van de organisatie.\",\"from\":[\"Financieel Management voor IT-Services\",\"\",\"\"]},{\"to\":\"Het begrijpen van en anticiperen op en beïnvloeden van de vraag van de klant naar services en er met capaciteiten voor zorgen dat de serviceprovider capaciteit heeft om aan de vraag te voldoen.\",\"from\":[\"Demand management\",\"\",\"\"]},{\"to\":\"Het komen tot en onderhouden van een zakelijke relatie tussen de serviceprovider en de klant op basis van begrip voor de klant en diens bedrijfsbehoeften. & Vaststellen van de klantbehoeften en zorgen dat de serviceprovider hieraan kan voldoen in een situatie waarin de bedrijfsbehoeften constant veranderen.\",\"from\":[\"Klantrelatiebeheer\",\"\",\"\"]},{\"to\":\"Zorgen dat doelen en doelstellingen van de serviceontwerpfase worden gerealiseerd.\",\"from\":[\"Ontwerpcoördinatie\",\"\",\"\"]},{\"to\":\"Een consistente informatiebron te zijn voor alle overeengekomen services.\",\"from\":[\"Servicecatalogusmanagement (SCM)\",\"\",\"\"]},{\"to\":\"Zorgen dat een afgesproken IT-servicelevel wordt geleverd voor alle lopende IT-services.\",\"from\":[\"Servicelevelmanagement (SLM)\",\"\",\"\"]},{\"to\":\"Zorgen dat benodigde IT-capaciteit wordt geleverd voor huidige en toekomstige behoeften van klanten.\",\"from\":[\"Capaciteitsmanagement\",\"\",\"\"]},{\"to\":\"Zeker stellen dat een waarin service beschikbaar is voldoet aan de huidige en toekomstige behoeften van de business.\",\"from\":[\"Availabilitymanagement\",\"\",\"\"]},{\"to\":\"Zorgen dat er ondersteuning wordt geven aan het business-continuïteitsmanagementproces door te zorgen dat de technische en IT-servicefaciliteiten weer beschikbaar zijn binnen de vereiste tijd.\",\"from\":[\"IT-Service Continuity Management (ITSCM)\",\"\",\"\"]},{\"to\":\"De security van IT en organisatie op een lijn te brengen.\",\"from\":[\"Information Security Management\",\"\",\"\"]},{\"to\":\"Het voorzien van een planning voor de transitie van services en de coördinatie van alle resources die daarvoor nodig zijn.\",\"from\":[\"Transitieplanning en transitieondersteuning\",\"\",\"\"]},{\"to\":\"Ervoor zorgen dat de hele levenscyclus van wijzigingen wordt beheerst.\",\"from\":[\"Changemanagement\",\"\",\"\"]},{\"to\":\"Ervoor zorgen dat de assets die noodzakelijk zijn om services te leveren onder controle worden gehouden en ervoor zorgen dat er accurate en betrouwbare informatie over die assets beschikbaar is.\",\"from\":[\"Serviceasset- en configurationmanagement (SACM)\",\"\",\"\"]},{\"to\":\"Het maken van plannen en tijdschema’s voor en de beheersing van bouwen, testen en uitrol van releases.\",\"from\":[\"Release & Deployment management\",\"\",\"\"]},{\"to\":\"Zekerstellen dat nieuwe of gewijzigde IT-services volledig in lijn zijn met ontwerpspecificaties.\",\"from\":[\"Service validation & testing\",\"\",\"\"]},{\"to\":\"Op een consistente en gestandaardiseerde wijze vaststellen of een service gewenste prestaties kan leveren.\",\"from\":[\"Change evaluation\",\"\",\"\"]},{\"to\":\"Ervoor zorgen dat je niet opnieuw dingen gaat onderzoeken als die al onderzocht zijn.\",\"from\":[\"Kennismanagement\",\"\",\"\"]},{\"to\":\"Het beheersen van events in hun levenscyclus.\",\"from\":[\"Eventmanagement\",\"\",\"\"]},{\"to\":\"In geval van incidenten deze zo snel mogelijk herstellen.\",\"from\":[\"Incidentmanagement\",\"\",\"\"]},{\"to\":\"Managen van de levenscyclus van alle problemen.\",\"from\":[\"Problemmanagement\",\"\",\"\"]},{\"to\":\"Managen van de levenscyclus van alle service requests.\",\"from\":[\"Request Fulfillment\",\"\",\"\"]},{\"to\":\"Alleen gebruikers met rechten toegang te verlenen tot een of meerdere services.\",\"from\":[\"Access management\",\"\",\"\"]}]}";

const ITIL_ALL = "{\"id\":0,\"name\":\"ITIL_ALL\",\"translatedName\":\"ITIL_ALL\",\"learning\":\"1\",\"learningFrom\":\"1\",\"modes\":null,\"content\":[{\"to\":\"Ontwikkeled, niet beschikbaar klant\",\"from\":[\"Servicepijlijn\",\"\",\"\"]},{\"to\":\"Operationeel, beschikbaar klant\",\"from\":[\"Servicecatalogus\",\"\",\"\"]},{\"to\":\"Levenssyclus applicaties beheren\",\"from\":[\"Applicatieportfolio\",\"\",\"\"]},{\"to\":\"Klanten vastleggen\",\"from\":[\"Klantportfolio\",\"\",\"\"]},{\"to\":\"Impact analyseren van services\",\"from\":[\"Servicemodellen\",\"\",\"\"]},{\"to\":\"Boekhouding aantonen\",\"from\":[\"Compliance\",\"\",\"\"]},{\"to\":\"De rol zegt het al\",\"from\":[\"Architecten\",\"\",\"\"]},{\"to\":\"Verbetering\",\"from\":[\"Plan\",\"\",\"\"]},{\"to\":\"RfC -> regulier + CAB\",\"from\":[\"Normale wijziging\",\"\",\"\"]},{\"to\":\"Storing verhelpen, geen CAB\",\"from\":[\"Noodwijziging\",\"\",\"\"]},{\"to\":\"Voorag geautoriseerd\",\"from\":[\"Standaard Wijziging\",\"\",\"\"]},{\"to\":\"Raised reason return risk resources responsible releationship\",\"from\":[\"Zeven R's van changemamagemenr\",\"\",\"\"]},{\"to\":\"Verzameling assets\",\"from\":[\"Release\",\"\",\"\"]},{\"to\":\"Data Info Kennis Wijsheid\",\"from\":[\"DIKW\",\"\",\"\"]},{\"to\":\"Observeren\",\"from\":[\"Monitoren\",\"\",\"\"]},{\"to\":\"Analuseren produceren distribureren\",\"from\":[\"Rapporteren\",\"\",\"\"]},{\"to\":\"Managen bruikbaarheid\",\"from\":[\"Controle\",\"\",\"\"]},{\"to\":\"Toestandswijziging\",\"from\":[\"Event\",\"\",\"\"]},{\"to\":\"Ongeplanned\",\"from\":[\"Incident\",\"\",\"\"]},{\"to\":\"Oke\",\"from\":[\"Leer de 7 stappen\",\"\",\"\"]}]}";

const ITIL_H4 = "{\"id\":0,\"name\":\"ITIL-H4\",\"translatedName\":\"ITIL-H4\",\"learning\":\"1\",\"learningFrom\":\"1\",\"modes\":null,\"content\":[{\"to\":\"Voorspellen en beheren van inkomsten en uitgaven\",\"from\":[\"Budgetteren\",\"\",\"\"]},{\"to\":\"Proces waarom is geld uitgegeven\",\"from\":[\"Boekhouden\",\"\",\"\"]},{\"to\":\"Servces in rekening brengen\",\"from\":[\"Doorbelasten\",\"\",\"\"]},{\"to\":\"Personeel, processen, producten, partners\",\"from\":[\"4 P's serviceontwerp\",\"\",\"\"]},{\"to\":\"Functionele, Beheer- en operationele, gebruikers\",\"from\":[\"Ontwikkeleisen (3)\",\"\",\"\"]},{\"to\":\"Operationele, tactsche, strategische\",\"from\":[\"Data classificaties (3)\",\"\",\"\"]},{\"to\":\"Service Design package, Serviceontwerppakket\",\"from\":[\"SDP\",\"\",\"\"]},{\"to\":\"Gemiddelde tijd tussen storingen\",\"from\":[\"MTBF\",\"\",\"\"]},{\"to\":\"Gemiddelde tijd tussen incidenten\",\"from\":[\"MTBSI\",\"\",\"\"]},{\"to\":\"Gemiddelde tijd tot herstel van de service\",\"from\":[\"MTRS\",\"\",\"\"]},{\"to\":\"Actieve, passieve, heterogene, homogene\",\"from\":[\"Redundanties (4)\",\"\",\"\"]},{\"to\":\"Availability\",\"from\":[\"AMIS\",\"\",\"\"]},{\"to\":\"Businessimpactanalyse, klantbehoeften en risico impact\",\"from\":[\"BIA,\",\"\",\"\"]},{\"to\":\"Top!\",\"from\":[\"Neem 236 door\",\"\",\"\"]},{\"to\":\"de algehele testmethode en de toewijzing van  vereiste resources\",\"from\":[\"teststrategie\",\"\",\"\"]},{\"to\":\"bestaat uit een testplan\",\"from\":[\"testmodel\",\"\",\"\"]}]}";

const ITIL = "{\"id\":0,\"name\":\"ITIL\",\"translatedName\":\"ITIL\",\"learning\":\"0\",\"learningFrom\":\"0\",\"modes\":null,\"content\":[{\"to\":\"SP volgt voor defineren en uitvoeren\",\"from\":[\"Servicestrategie\",\"\",\"\"]},{\"to\":\"Identificeren, doorvoeren uitvoeren processen\",\"from\":[\"IT-servicemanagementstrategie\",\"\",\"\"]},{\"to\":\"services van SP beschrijven in zakelijke waarden. verzameling services SP beheert\",\"from\":[\"Serviceportfolio\",\"\",\"\"]},{\"to\":\"DB services ontwikkeled niet voor klant\",\"from\":[\"Servicepijplijn\",\"\",\"\"]},{\"to\":\"DB operationele services voor klant\",\"from\":[\"Servicecatalogus\",\"\",\"\"]},{\"to\":\"Gestopte services, kosten veel\",\"from\":[\"Uitgefaseerde services\",\"\",\"\"]},{\"to\":\"Verzameling tools en DB voor beheren confgegevens van ISP\",\"from\":[\"CMS\",\"\",\"\"]},{\"to\":\"DB applicaties\",\"from\":[\"Applicatieportfolio\",\"\",\"\"]},{\"to\":\"DB klanten van ISP\",\"from\":[\"Klantportfolio\",\"\",\"\"]},{\"to\":\"DB contracten / overeenkomstem\",\"from\":[\"Klantovereenkomstenportfolio\",\"\",\"\"]},{\"to\":\"DB projecten\",\"from\":[\"Projectportfolio\",\"\",\"\"]},{\"to\":\"Impact analyse services\",\"from\":[\"Servicemodellen\",\"\",\"\"]},{\"to\":\"Bouw, test naar servicecatalogus\",\"from\":[\"Servicetransitie\",\"\",\"\"]},{\"to\":\"Levert service aan servicecatalogus\",\"from\":[\"Serviceproductie\",\"\",\"\"]},{\"to\":\"Evalueert service aan eisen\",\"from\":[\"Continue serviceverbetering\",\"\",\"\"]},{\"to\":\"Voorspellen en beheren inkomsten en uitgaven\",\"from\":[\"Budgetteren\",\"\",\"\"]},{\"to\":\"Verantwoording afleggen van uitgaven\",\"from\":[\"Boekhouden\",\"\",\"\"]},{\"to\":\"Klantenin rekening brengen\",\"from\":[\"Doorbelasten\",\"\",\"\"]},{\"to\":\"Verwerving en toewzijzen geld voor doel\",\"from\":[\"Financiering\",\"\",\"\"]},{\"to\":\"Boekhoudkunde aantonen\",\"from\":[\"Compliance (naleving)\",\"\",\"\"]},{\"to\":\"Bevestigen eisen klant\",\"from\":[\"Serviceontwerp\",\"\",\"\"]},{\"to\":\"Service level requirements\",\"from\":[\"SLR\",\"\",\"\"]},{\"to\":\"Bedrijfsimpactanalyse\",\"from\":[\"BIA\",\"\",\"\"]},{\"to\":\"methode voor probleemoplossing\",\"from\":[\"Serviceontwikkelingslevenscyclus\",\"\",\"\"]},{\"to\":\"Onderhouden applicaties\",\"from\":[\"Applicatieonderhoud\",\"\",\"\"]},{\"to\":\"Computer  Assisted/Aided Software Engineering tools\",\"from\":[\"CASE-tools\",\"\",\"\"]},{\"to\":\"service design packages\",\"from\":[\"SDP's\",\"\",\"\"]},{\"to\":\" IT service continuity management\",\"from\":[\"ITSCM\",\"\",\"\"]},{\"to\":\"Servicelevelmanagement\",\"from\":[\"SLM\",\"\",\"\"]},{\"to\":\"servicelevelovereenkomsten, schriftelijke overeenkomst SP en klanten\",\"from\":[\"SLA\",\"\",\"\"]},{\"to\":\"operational level agreement\",\"from\":[\"OLA\",\"\",\"\"]},{\"to\":\"Underpinning Contracts\",\"from\":[\"UC\",\"\",\"\"]},{\"to\":\"Vermogen IT-service leveren\",\"from\":[\"Beschikbaarheid\",\"\",\"\"]},{\"to\":\"Zonder onderbreking uitoefenen\",\"from\":[\"Betrouwbaarheid\",\"\",\"\"]},{\"to\":\"Repareren service\",\"from\":[\"Onderhoudbaarheid\",\"\",\"\"]},{\"to\":\"Uptime\",\"from\":[\"MTBF\",\"\",\"\"]},{\"to\":\"Tijd wanneer een incident begint, todat een nieuw icident begint\",\"from\":[\"MTBSI\",\"\",\"\"]},{\"to\":\"Downtime\",\"from\":[\"MTRS\",\"\",\"\"]},{\"to\":\"Voor essentiele services\",\"from\":[\"Actieve redundantie\",\"\",\"\"]},{\"to\":\"Voor niet in gebruik services\",\"from\":[\"Passieve redundantie\",\"\",\"\"]},{\"to\":\"Verschillende services\",\"from\":[\"Heterogene redundantie\",\"\",\"\"]},{\"to\":\"Enkele service\",\"from\":[\"Homogene redundantie\",\"\",\"\"]},{\"to\":\"Availabilitymanagementinformatiesysteem, verzameling tools\",\"from\":[\"AMIS\",\"\",\"\"]},{\"to\":\"Major, Minor, Emergency\",\"from\":[\"Releasesoorten\",\"\",\"\"]},{\"to\":\"Early Life Support\",\"from\":[\"ELS\",\"\",\"\"]},{\"to\":\"Configuratie Item\",\"from\":[\"CI\",\"\",\"\"]},{\"to\":\"Wijzingsverzoek\",\"from\":[\"Change proposal\",\"\",\"\"]},{\"to\":\"Request for Change\",\"from\":[\"RfC\",\"\",\"\"]},{\"to\":\"Wijziging zijn data\",\"from\":[\"Changerecord\",\"\",\"\"]},{\"to\":\"Via RfC, regulier proces, CAB\",\"from\":[\"Normale wijziging\",\"\",\"\"]},{\"to\":\"Verstoring verhelpen, geen CAB\",\"from\":[\"Noodwijziging\",\"\",\"\"]},{\"to\":\"Vooraf geauthoriseerd door change management\",\"from\":[\"Standaard wijziging\",\"\",\"\"]},{\"to\":\"Change Advisory Board\",\"from\":[\"CAB\",\"\",\"\"]},{\"to\":\"Raised Reason Return Risk Resource Responsible Relearionship\",\"from\":[\"Zeven R's van changemanagement\",\"\",\"\"]},{\"to\":\"Resource met bijdrage aan service\",\"from\":[\"Serviceasset\",\"\",\"\"]},{\"to\":\"Serviceasset die gemanaged moet worden om IT-service te leveren\",\"from\":[\"CI\",\"\",\"\"]},{\"to\":\"Configuratiemanagementdatabase\",\"from\":[\"CMDB\",\"\",\"\"]},{\"to\":\"Configuratiemanagementsysteem\",\"from\":[\"CMS\",\"\",\"\"]},{\"to\":\"Service Knowledge Management System\",\"from\":[\"SKMS\",\"\",\"\"]},{\"to\":\"Deel van een service opgenomen in de release\",\"from\":[\"Release-eenheid\",\"\",\"\"]},{\"to\":\"Een of meerder release-eenheden\",\"from\":[\"Releasepakket\",\"\",\"\"]},{\"to\":\"Testmethode en benodigde resources\",\"from\":[\"Teststrategie\",\"\",\"\"]},{\"to\":\"Testplan en testscripts (Zoals dusk)\",\"from\":[\"Testmodel\",\"\",\"\"]},{\"to\":\"Data Informatie Kennis Wijsheid\",\"from\":[\"DIKW\",\"\",\"\"]},{\"to\":\"Toestandswijziging CI of IT-service\",\"from\":[\"Event\",\"\",\"\"]},{\"to\":\"Manier voor welke stappen er gezet moeten worden\",\"from\":[\"Incidentmodellen\",\"\",\"\"]},{\"to\":\"Onbekende oorzaak\",\"from\":[\"Probleem\",\"\",\"\"]},{\"to\":\"Gedocumenteerd\",\"from\":[\"Bekende fout\",\"\",\"\"]},{\"to\":\"Tijdelijke oplossing\",\"from\":[\"Workaround\",\"\",\"\"]},{\"to\":\"Known Error Database\",\"from\":[\"KEDB\",\"\",\"\"]},{\"to\":\"Tool voor rechten beheer\",\"from\":[\"Directory service\",\"\",\"\"]},{\"to\":\"Zonder onderbreking\",\"from\":[\"Continuous\",\"\",\"\"]},{\"to\":\"Opeenvolgend\",\"from\":[\"Continual\",\"\",\"\"]},{\"to\":\"Verbeterinitiatieve vastgelegd hierin\",\"from\":[\"CSI-register\",\"\",\"\"]},{\"to\":\"Key Performance Indicator, is het gewenste resultaat bereikt\",\"from\":[\"KPI\",\"\",\"\"]},{\"to\":\"Plan Do Check Act(Bijstellen)\",\"from\":[\"PDCA\",\"\",\"\"]},{\"to\":\"Kritieke succesfactor\",\"from\":[\"KSF\",\"\",\"\"]},{\"to\":\"Eerlijk transparant controleren\",\"from\":[\"(IT-)Goverance\",\"\",\"\"]},{\"to\":\"Service Improvement Plan\",\"from\":[\"SIP\",\"\",\"\"]},{\"to\":\"Return on investment\",\"from\":[\"ROI\",\"\",\"\"]},{\"to\":\"Value on investment\",\"from\":[\"VOI\",\"\",\"\"]},{\"to\":\"Wordt eerst bepaald, daarna nulmeting\",\"from\":[\"Baseline\",\"\",\"\"]},{\"to\":\"Hoe gaat het tot nu toe\",\"from\":[\"Nulmeting\",\"\",\"\"]}]}";

















// 