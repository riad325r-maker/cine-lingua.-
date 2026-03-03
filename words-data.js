// words-data.js
const WORDS_DATA = {
    beginner: [
        { id: 101, word: "hello", arabic: "مرحباً", pronunciation: "هالو", example: "Hello, how are you?", exampleArabic: "مرحباً، كيف حالك؟", category: "تحيات" },
        { id: 102, word: "goodbye", arabic: "وداعاً", pronunciation: "جود باي", example: "Say goodbye to your friends.", exampleArabic: "قل وداعاً لأصدقائك", category: "تحيات" },
        { id: 103, word: "please", arabic: "من فضلك", pronunciation: "بليز", example: "Can you help me, please?", exampleArabic: "هل يمكنك مساعدتي، من فضلك؟", category: "أدب" },
        { id: 104, word: "thank you", arabic: "شكراً لك", pronunciation: "ثانك يو", example: "Thank you for your help.", exampleArabic: "شكراً لك على مساعدتك", category: "أدب" },
        { id: 105, word: "yes", arabic: "نعم", pronunciation: "يس", example: "Yes, I understand.", exampleArabic: "نعم، أنا أفهم", category: "أساسيات" },
        { id: 106, word: "no", arabic: "لا", pronunciation: "نو", example: "No, I don't want to go.", exampleArabic: "لا، لا أريد الذهاب", category: "أساسيات" },
        { id: 107, word: "name", arabic: "اسم", pronunciation: "نيم", example: "My name is Ahmed.", exampleArabic: "اسمي أحمد", category: "تعارف" },
        { id: 108, word: "friend", arabic: "صديق", pronunciation: "فريند", example: "He is my best friend.", exampleArabic: "هو صديقي المفضل", category: "علاقات" },
        { id: 109, word: "family", arabic: "عائلة", pronunciation: "فاميلي", example: "I love my family.", exampleArabic: "أنا أحب عائلتي", category: "علاقات" },
        { id: 110, word: "mother", arabic: "أم", pronunciation: "ماذر", example: "My mother cooks food.", exampleArabic: "أمي تطبخ الطعام", category: "عائلة" },
        { id: 111, word: "father", arabic: "أب", pronunciation: "فاذر", example: "My father works hard.", exampleArabic: "أبي يعمل بجد", category: "عائلة" },
        { id: 112, word: "brother", arabic: "أخ", pronunciation: "براذر", example: "I play with my brother.", exampleArabic: "ألعب مع أخي", category: "عائلة" },
        { id: 113, word: "sister", arabic: "أخت", pronunciation: "سيستر", example: "My sister is younger.", exampleArabic: "أختي أصغر مني", category: "عائلة" },
        { id: 114, word: "house", arabic: "منزل", pronunciation: "هاوس", example: "We live in a big house.", exampleArabic: "نعيش في منزل كبير", category: "مكان" },
        { id: 115, word: "car", arabic: "سيارة", pronunciation: "كار", example: "The car is red.", exampleArabic: "السيارة حمراء", category: "مواصلات" },
        { id: 116, word: "water", arabic: "ماء", pronunciation: "ووتر", example: "Drink water every day.", exampleArabic: "اشرب الماء كل يوم", category: "طعام" },
        { id: 117, word: "food", arabic: "طعام", pronunciation: "فود", example: "The food is delicious.", exampleArabic: "الطعام لذيذ", category: "طعام" },
        { id: 118, word: "eat", arabic: "يأكل", pronunciation: "إيت", example: "I eat breakfast at 7.", exampleArabic: "أتناول الفطور الساعة 7", category: "أفعال" },
        { id: 119, word: "drink", arabic: "يشرب", pronunciation: "درينك", example: "Drink your milk.", exampleArabic: "اشرب حليبك", category: "أفعال" },
        { id: 120, word: "sleep", arabic: "ينام", pronunciation: "سليب", example: "Sleep early tonight.", exampleArabic: "نم مبكراً الليلة", category: "أفعال" }
    ],
    intermediate: [
        { id: 201, word: "understand", arabic: "يفهم", pronunciation: "أندرستاند", example: "I understand the lesson now.", exampleArabic: "أنا أفهم الدرس الآن", category: "أفعال" },
        { id: 202, word: "interesting", arabic: "مثير للاهتمام", pronunciation: "إينترستينج", example: "This book is very interesting.", exampleArabic: "هذا الكتاب مثير جداً للاهتمام", category: "صفات" },
        { id: 203, word: "different", arabic: "مختلف", pronunciation: "ديفرنت", example: "We have different opinions.", exampleArabic: "لدينا آراء مختلفة", category: "صفات" },
        { id: 204, word: "important", arabic: "مهم", pronunciation: "إمبورتنت", example: "Education is important.", exampleArabic: "التعليم مهم", category: "صفات" },
        { id: 205, word: "believe", arabic: "يؤمن", pronunciation: "بيليف", example: "I believe in you.", exampleArabic: "أنا أؤمن بك", category: "أفعال" },
        { id: 206, word: "remember", arabic: "يتذكر", pronunciation: "ريميمبر", example: "Remember to call me.", exampleArabic: "تذكر أن تتصل بي", category: "أفعال" },
        { id: 207, word: "forget", arabic: "ينسى", pronunciation: "فورجيت", example: "Don't forget your keys.", exampleArabic: "لا تنس مفاتيحك", category: "أفعال" },
        { id: 208, word: "promise", arabic: "يعد", pronunciation: "بروميس", example: "I promise to help you.", exampleArabic: "أعدك بمساعدتك", category: "أفعال" },
        { id: 209, word: "decide", arabic: "يقرر", pronunciation: "ديسايد", example: "I decided to learn English.", exampleArabic: "قررت أن أتعلم الإنجليزية", category: "أفعال" },
        { id: 210, word: "travel", arabic: "يسافر", pronunciation: "ترافل", example: "I want to travel to London.", exampleArabic: "أريد السفر إلى لندن", category: "سفر" }
    ],
    advanced: [
        { id: 301, word: "nevertheless", arabic: "مع ذلك", pronunciation: "نيفرذايليس", example: "It was difficult; nevertheless, I succeeded.", exampleArabic: "كان صعباً؛ مع ذلك، نجحت", category: "روابط" },
        { id: 302, word: "consequently", arabic: "وبالتالي", pronunciation: "كونسيكوينتلي", example: "He didn't study; consequently, he failed.", exampleArabic: "لم يدرس؛ وبالتالي، رسب", category: "روابط" },
        { id: 303, word: "significant", arabic: "كبير/مهم", pronunciation: "سيجنتفيكنت", example: "There was a significant change.", exampleArabic: "كان هناك تغيير كبير", category: "صفات" }
    ],
    daily_phrases: [
        { phrase: "How are you?", arabic: "كيف حالك؟", pronunciation: "هاو آر يو", situation: "تحية" },
        { phrase: "I'm fine, thank you", arabic: "أنا بخير، شكراً", pronunciation: "آيم فاين، ثانك يو", situation: "رد على تحية" },
        { phrase: "What's your name?", arabic: "ما اسمك؟", pronunciation: "واتس يور نيم", situation: "تعارف" },
        { phrase: "Nice to meet you", arabic: "تشرفت بمقابلتك", pronunciation: "نايس تو ميت يو", situation: "تعارف" },
        { phrase: "Where are you from?", arabic: "من أين أنت؟", pronunciation: "وير آر يو فروم", situation: "تعارف" }
    ]
};

function getWordsByLevel(level) {
    if (level === 'beginner') return WORDS_DATA.beginner;
    if (level === 'intermediate') return WORDS_DATA.intermediate;
    if (level === 'advanced') return WORDS_DATA.advanced;
    return [];
}

function searchWords(query) {
    query = query.toLowerCase();
    let results = [];
    const allWords = [...WORDS_DATA.beginner, ...WORDS_DATA.intermediate, ...WORDS_DATA.advanced];
    return allWords.filter(item => item.word.toLowerCase().includes(query) || item.arabic.includes(query));
}

function getRandomWord() {
    const allWords = [...WORDS_DATA.beginner, ...WORDS_DATA.intermediate, ...WORDS_DATA.advanced];
    return allWords[Math.floor(Math.random() * allWords.length)];
         }
