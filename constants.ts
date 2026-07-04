import { Difficulty, Language } from './types';

export const MAX_MISTAKES = 6;

export const ALPHABETS: Record<Language, string[]> = {
    [Language.EN]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    [Language.RU]: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split(''),
    [Language.AM]: 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՈՒՓՔՕՖ'.split('')
};

// Representative subsets of word banks for each language and difficulty.
export const WORD_BANKS: Record<Language, Record<Difficulty, string[]>> = {
    [Language.EN]: {
        [Difficulty.EASY]: [
            "CAT", "DOG", "SUN", "RUN", "FUN", "HAT", "BAT", "RAT", "MAT", "PAT",
            "SIT", "FIT", "HIT", "LIT", "PIT", "BIT", "KIT", "RED", "BED", "FED",
            "LED", "WED", "PEN", "TEN", "MEN", "HEN", "DEN", "PIN", "TIN", "WIN",
            "FIN", "BIN", "SIN", "KIN", "LOG", "DOG", "FOG", "HOG", "JOG", "BOG",
            "BUG", "HUG", "MUG", "RUG", "TUG", "JUG", "DUG", "PUG", "CAR", "BAR",
            "FAR", "JAR", "TAR", "STAR", "MOON", "TREE", "BIRD", "FISH", "SHOE", "BOOK",
            "DOOR", "WALL", "BALL", "CALL", "FALL", "TALL", "HALL", "MALL", "MILK", "SILK",
            "COLD", "GOLD", "FOLD", "HOLD", "SOLD", "TOLD", "BOLD", "WIND", "MIND", "KIND",
            "FIND", "BIND", "BLIND", "HAND", "SAND", "BAND", "LAND", "GRAND", "STAND", "FAST",
            "LAST", "PAST", "CAST", "MAST", "VAST", "BLAST", "JUMP", "BUMP", "PUMP", "LUMP"
        ],
        [Difficulty.MEDIUM]: [
            "APPLE", "BANANA", "ORANGE", "GRAPE", "MELON", "LEMON", "PEACH", "PLUM", "BERRY", "CHERRY",
            "HOUSE", "MOUSE", "HORSE", "SHEEP", "SNAKE", "TIGER", "LION", "BEAR", "WOLF", "DEER",
            "CHAIR", "TABLE", "DESK", "COUCH", "LAMP", "CLOCK", "RADIO", "PHONE", "SCREEN", "BOARD",
            "PAPER", "PENCIL", "ERASER", "MARKER", "RULER", "PAINT", "BRUSH", "COLOR", "SHAPE", "LINE",
            "WATER", "RIVER", "OCEAN", "BEACH", "SAND", "SHELL", "WAVE", "TIDE", "BOAT", "SHIP",
            "TRAIN", "PLANE", "TRUCK", "BIKE", "WHEEL", "MOTOR", "ENGINE", "TRACK", "ROAD", "PATH",
            "BREAD", "CHEESE", "MEAT", "SALAD", "SOUP", "PIZZA", "PASTA", "SAUCE", "SPICE", "SUGAR",
            "SWEET", "SOUR", "BITTER", "SALTY", "FRESH", "STALE", "HOT", "COLD", "WARM", "COOL",
            "HAPPY", "SAD", "ANGRY", "TIRED", "BRAVE", "SCARED", "PROUD", "SHY", "CALM", "WILD",
            "SMART", "DUMB", "QUICK", "SLOW", "LOUD", "QUIET", "BRIGHT", "DARK", "LIGHT", "HEAVY"
        ],
        [Difficulty.HARD]: [
            "ELEPHANT", "GIRAFFE", "PENGUIN", "DOLPHIN", "WHALE", "SHARK", "OCTOPUS", "TURTLE", "LIZARD", "SPIDER",
            "COMPUTER", "KEYBOARD", "MONITOR", "PRINTER", "SCANNER", "SPEAKER", "CAMERA", "BATTERY", "CHARGER", "CABLE",
            "HOSPITAL", "DOCTOR", "NURSE", "PATIENT", "MEDICINE", "BANDAGE", "SYRINGE", "SURGERY", "CLINIC", "HEALTH",
            "MOUNTAIN", "VALLEY", "FOREST", "DESERT", "ISLAND", "CANYON", "VOLCANO", "GLACIER", "TUNDRA", "JUNGLE",
            "WEATHER", "CLIMATE", "TORNADO", "HURRICANE", "BLIZZARD", "DROUGHT", "FLOOD", "STORM", "THUNDER", "LIGHTNING",
            "SCIENCE", "PHYSICS", "CHEMISTRY", "BIOLOGY", "ASTRONOMY", "GEOLOGY", "ECOLOGY", "ANATOMY", "GENETICS", "BOTANY",
            "HISTORY", "ANCIENT", "MODERN", "CENTURY", "DECADE", "EMPIRE", "KINGDOM", "REPUBLIC", "NATION", "COUNTRY",
            "LANGUAGE", "GRAMMAR", "SPELLING", "VOCABULARY", "ALPHABET", "SYLLABLE", "SENTENCE", "PARAGRAPH", "CHAPTER", "ARTICLE",
            "MUSIC", "MELODY", "HARMONY", "RHYTHM", "TEMPO", "CHORD", "SCALE", "INSTRUMENT", "GUITAR", "PIANO",
            "SPORTS", "SOCCER", "BASKETBALL", "BASEBALL", "FOOTBALL", "TENNIS", "VOLLEYBALL", "HOCKEY", "GOLF", "SWIMMING"
        ],
        [Difficulty.EXPERT]: [
            "CHIMPANZEE", "HIPPOPOTAMUS", "RHINOCEROS", "CROCODILE", "ALLIGATOR", "CHAMELEON", "SALAMANDER", "CENTIPEDE", "MILLIPEDE", "SCORPION",
            "ARCHITECTURE", "ENGINEERING", "MATHEMATICS", "PHILOSOPHY", "PSYCHOLOGY", "SOCIOLOGY", "ANTHROPOLOGY", "ARCHAEOLOGY", "ECONOMICS", "POLITICS",
            "GOVERNMENT", "CONSTITUTION", "LEGISLATURE", "EXECUTIVE", "JUDICIARY", "DEMOCRACY", "DICTATORSHIP", "MONARCHY", "OLIGARCHY", "ANARCHY",
            "LITERATURE", "POETRY", "FICTION", "NONFICTION", "BIOGRAPHY", "AUTOBIOGRAPHY", "MYSTERY", "THRILLER", "ROMANCE", "FANTASY",
            "TECHNOLOGY", "INNOVATION", "INVENTION", "DISCOVERY", "RESEARCH", "DEVELOPMENT", "EXPERIMENT", "HYPOTHESIS", "THEORY", "PRINCIPLE",
            "ENVIRONMENT", "POLLUTION", "CONSERVATION", "SUSTAINABILITY", "RECYCLING", "RENEWABLE", "ENERGY", "RESOURCE", "HABITAT", "ECOSYSTEM",
            "ASTRONAUT", "SPACECRAFT", "SATELLITE", "TELESCOPE", "OBSERVATORY", "GALAXY", "UNIVERSE", "CONSTELLATION", "ASTEROID", "METEORITE",
            "SYMPHONY", "ORCHESTRA", "CONDUCTOR", "COMPOSER", "CONCERTO", "SONATA", "OPERA", "BALLET", "CHORUS", "CHOIR",
            "CHAMPIONSHIP", "TOURNAMENT", "COMPETITION", "VICTORY", "DEFEAT", "TROPHY", "MEDAL", "RECORD", "ATHLETE", "COACH",
            "EXTRAORDINARY", "UNBELIEVABLE", "MAGNIFICENT", "SPECTACULAR", "PHENOMENAL", "INCREDIBLE", "ASTONISHING", "REMARKABLE", "OUTSTANDING", "EXCEPTIONAL"
        ]
    },
    [Language.RU]: {
        [Difficulty.EASY]: [
            "ДОМ", "КОТ", "ЛЕС", "МИР", "СОК", "ЧАЙ", "СЫР", "НОС", "РОТ", "ГЛАЗ",
            "ДЕД", "ДЕНЬ", "НОЧЬ", "СОН", "ДРУГ", "БРАТ", "ВОДА", "РЕКА", "МОРЕ", "НЕБО",
            "СНЕГ", "ЛЕД", "ШАГ", "ГОД", "ВЕК", "ЧАС", "МИГ", "СВЕТ", "ЦВЕТ", "ЗВУК"
        ],
        [Difficulty.MEDIUM]: [
            "ЯБЛОКО", "СОБАКА", "КОШКА", "ДЕРЕВО", "ПТИЦА", "КНИГА", "ДВЕРЬ", "СТОЛ", "СТУЛ", "ЛАМПА",
            "ВРЕМЯ", "ГОРОД", "УЛИЦА", "МАШИНА", "ПОЕЗД", "ПЕСНЯ", "СЛОВО", "БУКВА", "ШКОЛА", "КЛАСС",
            "СОЛНЦЕ", "ЗВЕЗДА", "ОБЛАКО", "ДОЖДЬ", "ВЕТЕР", "ТРАВА", "ЦВЕТОК", "ЗЕМЛЯ", "ПЕСОК", "КАМЕНЬ"
        ],
        [Difficulty.HARD]: [
            "КОМПЬЮТЕР", "БОЛЬНИЦА", "ТЕЛЕФОН", "ИНТЕРНЕТ", "ИСКУССТВО", "ПРИРОДА", "ЖИВОТНОЕ", "РАСТЕНИЕ", "ПЛАНЕТА", "КОСМОС",
            "ИСТОРИЯ", "КУЛЬТУРА", "ОБЩЕСТВО", "ЧЕЛОВЕК", "РЕБЕНОК", "МУЖЧИНА", "ЖЕНЩИНА", "РОДИТЕЛИ", "СЕМЬЯ", "РАБОТА",
            "ПРАЗДНИК", "ПОДАРОК", "МУЗЫКА", "КАРТИНА", "ФИЛЬМ", "ТЕАТР", "АКТЕР", "РЕЖИССЕР", "ПИСАТЕЛЬ", "УЧЕНЫЙ"
        ],
        [Difficulty.EXPERT]: [
            "АРХИТЕКТУРА", "ЛИТЕРАТУРА", "ФИЛОСОФИЯ", "ПСИХОЛОГИЯ", "ЭКОНОМИКА", "ГОСУДАРСТВО", "ПРАВИТЕЛЬСТВО", "ДЕМОКРАТИЯ", "РЕСПУБЛИКА", "ИМПЕРИЯ",
            "ТЕХНОЛОГИЯ", "ИННОВАЦИЯ", "ИССЛЕДОВАНИЕ", "ЭКСПЕРИМЕНТ", "ТЕМПЕРАТУРА", "ЭЛЕКТРИЧЕСТВО", "УНИВЕРСИТЕТ", "ОБРАЗОВАНИЕ", "ИНФОРМАЦИЯ", "БЕЗОПАСНОСТЬ",
            "НЕЗАВИСИМОСТЬ", "СПРАВЕДЛИВОСТЬ", "ОТВЕТСТВЕННОСТЬ", "БЛАГОДАРНОСТЬ", "ВЕРОЯТНОСТЬ", "ВОЗМОЖНОСТЬ", "ДЕЙСТВИТЕЛЬНОСТЬ", "ЗАКОНОМЕРНОСТЬ", "ПРОИЗВОДСТВО", "ПРОМЫШЛЕННОСТЬ"
        ]
    },
    [Language.AM]: {
        [Difficulty.EASY]: [
            "ՏՈՒՆ", "ՇՈՒՆ", "ԿԱՏՈՒ", "ԾԱՌ", "ՋՈՒՐ", "ՀՈՒՐ", "ՕԴ", "ՀՈՂ", "ՔԱՐ", "ՍԱՐ",
            "ՁՈՐ", "ԳԵՏ", "ԼԻՃ", "ԾՈՎ", "ՕՐ", "ԳԻՇԵՐ", "ԼՈՒՅՍ", "ՄՈՒԹ", "ԴՈՒՌ", "ՊԱՏ",
            "ՀԱՑ", "ՄԻՍ", "ՊԱՆԻՐ", "ԿԱԹ", "ՄԱՅՐ", "ՀԱՅՐ", "ՔՈՒՅՐ", "ՏՂԱ", "ԿԻՆ", "ՄԱՐԴ"
        ],
        [Difficulty.MEDIUM]: [
            "ԽՆՁՈՐ", "ԱԹՈՌ", "ՍԵՂԱՆ", "ԳԻՐՔ", "ՏԵՏՐ", "ԳՐԻՉ", "ՄԱՏԻՏ", "ԴՊՐՈՑ", "ԴԱՍԱՐԱՆ", "ՈՒՍՈՒՑԻՉ",
            "ԱՇԱԿԵՐՏ", "ԸՆԿԵՐ", "ԵՂԲԱՅՐ", "ԸՆՏԱՆԻՔ", "ԱՐԵՎ", "ԼՈՒՍԻՆ", "ԱՍՏՂ", "ԱՄՊ", "ԱՆՁՐԵՎ", "ՔԱՄԻ",
            "ԾԱՂԻԿ", "ԽՈՏ", "ԱՆՏԱՌ", "ՔԱՂԱՔ", "ԳՅՈՒՂ", "ՓՈՂՈՑ", "ԱՅԳԻ", "ԽԱՆՈՒԹ", "ՇՈՒԿԱ", "ԳՆԱՑՔ"
        ],
        [Difficulty.HARD]: [
            "ՀԱՄԱԿԱՐԳԻՉ", "ՀԵՌԱԽՈՍ", "ՀԵՌՈՒՍՏԱՑՈՒՅՑ", "ԲԺՇԿՈՒԹՅՈՒՆ", "ՀԻՎԱՆԴԱՆՈՑ", "ԴԵՂԱՏՈՒՆ", "ԲՆՈՒԹՅՈՒՆ", "ԿԵՆԴԱՆԻ", "ԲՈՒՅՍ", "ՄՈԼՈՐԱԿ",
            "ՏԻԵԶԵՐՔ", "ՊԱՏՄՈՒԹՅՈՒՆ", "ՄՇԱԿՈՒՅԹ", "ՀԱՍԱՐԱԿՈՒԹՅՈՒՆ", "ՊԵՏՈՒԹՅՈՒՆ", "ՃԱՆԱՊԱՐՀ", "ՄԵՔԵՆԱ", "ԻՆՔՆԱԹԻՌ", "ՆԱՎԱՀԱՆԳԻՍՏ", "ՕԴԱՆԱՎԱԿԱՅԱՆ",
            "ԱՐՎԵՍՏ", "ԵՐԱԺՇՏՈՒԹՅՈՒՆ", "ՆԿԱՐՉՈՒԹՅՈՒՆ", "ԹԱՏՐՈՆ", "ԿԻՆՈԹԱՏՐՈՆ", "ԴԵՐԱՍԱՆ", "ԳՐՈՂ", "ԳԻՏՆԱԿԱՆ", "ԲԺԻՇԿ", "ՃԱՐՏԱՐԱԳԵՏ"
        ],
        [Difficulty.EXPERT]: [
            "ՃԱՐՏԱՐԱՊԵՏՈՒԹՅՈՒՆ", "ԳՐԱԿԱՆՈՒԹՅՈՒՆ", "ՓԻԼԻՍՈՓԱՅՈՒԹՅՈՒՆ", "ՀՈԳԵԲԱՆՈՒԹՅՈՒՆ", "ՏՆՏԵՍԱԳԻՏՈՒԹՅՈՒՆ", "ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ", "ԿԱՌԱՎԱՐՈՒԹՅՈՒՆ", "ԺՈՂՈՎՐԴԱՎԱՐՈՒԹՅՈՒՆ", "ՀԱՆՐԱՊԵՏՈՒԹՅՈՒՆ", "ՏԵԽՆՈԼՈԳԻԱ",
            "ՆՈՐԱՐԱՐՈՒԹՅՈՒՆ", "ՀԵՏԱԶՈՏՈՒԹՅՈՒՆ", "ԳԻՏԱՓՈՐՁ", "ՋԵՐՄԱՍՏԻՃԱՆ", "ԷԼԵԿՏՐԱԿԱՆՈՒԹՅՈՒՆ", "ՀԱՄԱԼՍԱՐԱՆ", "ԿՐԹՈՒԹՅՈՒՆ", "ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ", "ԱՆՎՏԱՆԳՈՒԹՅՈՒՆ", "ԱՐԴԱՐԱԴԱՏՈՒԹՅՈՒՆ",
            "ԱՆԿԱԽՈՒԹՅՈՒՆ", "ՊԱՏԱՍԽԱՆԱՏՎՈՒԹՅՈՒՆ", "ԵՐԱԽՏԱԳԻՏՈՒԹՅՈՒՆ", "ՀԱՎԱՆԱԿԱՆՈՒԹՅՈՒՆ", "ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆ", "ԻՐԱԿԱՆՈՒԹՅՈՒՆ", "ՕՐԻՆԱՉԱՓՈՒԹՅՈՒՆ", "ԱՐՏԱԴՐՈՒԹՅՈՒՆ", "ԱՐԴՅՈՒՆԱԲԵՐՈՒԹՅՈՒՆ", "ՇԻՆԱՐԱՐՈՒԹՅՈՒՆ"
        ]
    }
};