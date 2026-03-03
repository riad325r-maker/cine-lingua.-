// assets/js/data/quiz-data.js
// جميع أسئلة الاختبارات مصنفة حسب المستوى والنوع

export const QUIZ_DATA = {
    // ========== اختبارات المفردات ==========
    vocabulary: {
        beginner: [
            {
                id: 1,
                question: "ماذا تعني كلمة 'Hello'؟",
                options: ["مرحباً", "وداعاً", "شكراً", "من فضلك"],
                correct: 0,
                explanation: "Hello تستخدم للتحية"
            },
            {
                id: 2,
                question: "ماذا تعني كلمة 'Goodbye'؟",
                options: ["مرحباً", "وداعاً", "تصبح على خير", "مساء الخير"],
                correct: 1,
                explanation: "Goodbye = وداعاً"
            },
            {
                id: 3,
                question: "ماذا تعني كلمة 'Please'؟",
                options: ["شكراً", "عفواً", "من فضلك", "آسف"],
                correct: 2,
                explanation: "Please = من فضلك"
            },
            {
                id: 4,
                question: "ماذا تعني كلمة 'Thank you'؟",
                options: ["شكراً", "عفواً", "من فضلك", "آسف"],
                correct: 0,
                explanation: "Thank you = شكراً"
            },
            {
                id: 5,
                question: "ماذا تعني كلمة 'Yes'؟",
                options: ["نعم", "لا", "ربما", "دائماً"],
                correct: 0,
                explanation: "Yes = نعم"
            },
            {
                id: 6,
                question: "ماذا تعني كلمة 'No'؟",
                options: ["نعم", "لا", "ربما", "أبداً"],
                correct: 1,
                explanation: "No = لا"
            },
            {
                id: 7,
                question: "ماذا تعني كلمة 'Book'؟",
                options: ["قلم", "كتاب", "دفتر", "ممحاة"],
                correct: 1,
                explanation: "Book = كتاب"
            },
            {
                id: 8,
                question: "ماذا تعني كلمة 'Pen'؟",
                options: ["قلم", "كتاب", "مسطرة", "مقص"],
                correct: 0,
                explanation: "Pen = قلم"
            },
            {
                id: 9,
                question: "ماذا تعني كلمة 'Eat'؟",
                options: ["يشرب", "يأكل", "ينام", "يمشي"],
                correct: 1,
                explanation: "Eat = يأكل"
            },
            {
                id: 10,
                question: "ماذا تعني كلمة 'Drink'؟",
                options: ["يشرب", "يأكل", "ينام", "يمشي"],
                correct: 0,
                explanation: "Drink = يشرب"
            },
            {
                id: 11,
                question: "ماذا تعني كلمة 'Sleep'؟",
                options: ["يأكل", "يشرب", "ينام", "يلعب"],
                correct: 2,
                explanation: "Sleep = ينام"
            },
            {
                id: 12,
                question: "ماذا تعني كلمة 'Walk'؟",
                options: ["يركض", "يمشي", "يقفز", "يجلس"],
                correct: 1,
                explanation: "Walk = يمشي"
            },
            {
                id: 13,
                question: "ماذا تعني كلمة 'Run'؟",
                options: ["يركض", "يمشي", "يقفز", "يجلس"],
                correct: 0,
                explanation: "Run = يركض"
            },
            {
                id: 14,
                question: "ماذا تعني كلمة 'Happy'؟",
                options: ["حزين", "سعيد", "متعب", "جائع"],
                correct: 1,
                explanation: "Happy = سعيد"
            },
            {
                id: 15,
                question: "ماذا تعني كلمة 'Sad'؟",
                options: ["حزين", "سعيد", "متعب", "غاضب"],
                correct: 0,
                explanation: "Sad = حزين"
            },
            {
                id: 16,
                question: "ماذا تعني كلمة 'Big'؟",
                options: ["صغير", "كبير", "طويل", "قصير"],
                correct: 1,
                explanation: "Big = كبير"
            },
            {
                id: 17,
                question: "ماذا تعني كلمة 'Small'؟",
                options: ["صغير", "كبير", "طويل", "قصير"],
                correct: 0,
                explanation: "Small = صغير"
            },
            {
                id: 18,
                question: "ماذا تعني كلمة 'Hot'؟",
                options: ["بارد", "حار", "دافئ", "مثلج"],
                correct: 1,
                explanation: "Hot = حار"
            },
            {
                id: 19,
                question: "ماذا تعني كلمة 'Cold'؟",
                options: ["بارد", "حار", "دافئ", "مثلج"],
                correct: 0,
                explanation: "Cold = بارد"
            },
            {
                id: 20,
                question: "ماذا تعني كلمة 'Red'؟",
                options: ["أحمر", "أزرق", "أخضر", "أصفر"],
                correct: 0,
                explanation: "Red = أحمر"
            },
            {
                id: 21,
                question: "ماذا تعني كلمة 'Blue'؟",
                options: ["أحمر", "أزرق", "أخضر", "أصفر"],
                correct: 1,
                explanation: "Blue = أزرق"
            },
            {
                id: 22,
                question: "ماذا تعني كلمة 'Green'؟",
                options: ["أحمر", "أزرق", "أخضر", "أصفر"],
                correct: 2,
                explanation: "Green = أخضر"
            },
            {
                id: 23,
                question: "ماذا تعني كلمة 'Yellow'؟",
                options: ["أحمر", "أزرق", "أخضر", "أصفر"],
                correct: 3,
                explanation: "Yellow = أصفر"
            },
            {
                id: 24,
                question: "ماذا تعني كلمة 'Cat'؟",
                options: ["كلب", "قطة", "فأر", "طائر"],
                correct: 1,
                explanation: "Cat = قطة"
            },
            {
                id: 25,
                question: "ماذا تعني كلمة 'Dog'؟",
                options: ["كلب", "قطة", "فأر", "طائر"],
                correct: 0,
                explanation: "Dog = كلب"
            }
        ],
        intermediate: [
            {
                id: 101,
                question: "ماذا تعني كلمة 'Beautiful'؟",
                options: ["قبيح", "جميل", "غالي", "رخيص"],
                correct: 1,
                explanation: "Beautiful = جميل"
            },
            {
                id: 102,
                question: "ماذا تعني كلمة 'Ugly'؟",
                options: ["قبيح", "جميل", "غالي", "رخيص"],
                correct: 0,
                explanation: "Ugly = قبيح"
            },
            {
                id: 103,
                question: "ماذا تعني كلمة 'Expensive'؟",
                options: ["غالي", "رخيص", "جديد", "قديم"],
                correct: 0,
                explanation: "Expensive = غالي"
            },
            {
                id: 104,
                question: "ماذا تعني كلمة 'Cheap'؟",
                options: ["غالي", "رخيص", "جديد", "قديم"],
                correct: 1,
                explanation: "Cheap = رخيص"
            },
            {
                id: 105,
                question: "ماذا تعني كلمة 'Understand'؟",
                options: ["ينسى", "يفهم", "يسمع", "يرى"],
                correct: 1,
                explanation: "Understand = يفهم"
            },
            {
                id: 106,
                question: "ماذا تعني كلمة 'Remember'؟",
                options: ["ينسى", "يتذكر", "يسمع", "يرى"],
                correct: 1,
                explanation: "Remember = يتذكر"
            },
            {
                id: 107,
                question: "ماذا تعني كلمة 'Forget'؟",
                options: ["ينسى", "يتذكر", "يسمع", "يرى"],
                correct: 0,
                explanation: "Forget = ينسى"
            },
            {
                id: 108,
                question: "ماذا تعني كلمة 'Travel'؟",
                options: ["يعمل", "يسافر", "يدرس", "يلعب"],
                correct: 1,
                explanation: "Travel = يسافر"
            },
            {
                id: 109,
                question: "ماذا تعني كلمة 'Arrive'؟",
                options: ["يغادر", "يصل", "يسافر", "يعود"],
                correct: 1,
                explanation: "Arrive = يصل"
            },
            {
                id: 110,
                question: "ماذا تعني كلمة 'Leave'؟",
                options: ["يغادر", "يصل", "يسافر", "يعود"],
                correct: 0,
                explanation: "Leave = يغادر"
            },
            {
                id: 111,
                question: "ماذا تعني كلمة 'Borrow'؟",
                options: ["يعير", "يقترض", "يشتري", "يبيع"],
                correct: 1,
                explanation: "Borrow = يقترض"
            },
            {
                id: 112,
                question: "ماذا تعني كلمة 'Lend'؟",
                options: ["يعير", "يقترض", "يشتري", "يبيع"],
                correct: 0,
                explanation: "Lend = يعير"
            },
            {
                id: 113,
                question: "ماذا تعني كلمة 'Win'؟",
                options: ["يخسر", "يربح", "يلعب", "يتسابق"],
                correct: 1,
                explanation: "Win = يربح"
            },
            {
                id: 114,
                question: "ماذا تعني كلمة 'Lose'؟",
                options: ["يخسر", "يربح", "يلعب", "يتسابق"],
                correct: 0,
                explanation: "Lose = يخسر"
            },
            {
                id: 115,
                question: "اختر الترجمة الصحيحة: 'I have been studying for 2 hours'",
                options: ["درست ساعتين", "أدرس منذ ساعتين", "سأدرس ساعتين", "أدرس كل ساعتين"],
                correct: 1,
                explanation: "I have been studying = أدرس منذ"
            },
            {
                id: 116,
                question: "اختر الترجمة الصحيحة: 'She has gone to London'",
                options: ["ذهبت إلى لندن", "زارت لندن", "تعيش في لندن", "ستذهب للندن"],
                correct: 0,
                explanation: "Has gone = ذهبت"
            }
        ],
        advanced: [
            {
                id: 201,
                question: "ماذا تعني كلمة 'Nevertheless'؟",
                options: ["لذلك", "مع ذلك", "بسبب", "أيضاً"],
                correct: 1,
                explanation: "Nevertheless = مع ذلك"
            },
            {
                id: 202,
                question: "ماذا تعني كلمة 'Consequently'؟",
                options: ["وبالتالي", "مع ذلك", "بسبب", "أيضاً"],
                correct: 0,
                explanation: "Consequently = وبالتالي"
            },
            {
                id: 203,
                question: "ماذا تعني كلمة 'Therefore'؟",
                options: ["لذلك", "مع ذلك", "بسبب", "أيضاً"],
                correct: 0,
                explanation: "Therefore = لذلك"
            },
            {
                id: 204,
                question: "ماذا تعني كلمة 'However'؟",
                options: ["لذلك", "مع ذلك", "بسبب", "أيضاً"],
                correct: 1,
                explanation: "However = مع ذلك"
            },
            {
                id: 205,
                question: "ماذا تعني كلمة 'Significant'؟",
                options: ["صغير", "كبير/مهم", "ضعيف", "قوي"],
                correct: 1,
                explanation: "Significant = كبير/مهم"
            },
            {
                id: 206,
                question: "ماذا تعني كلمة 'Approximately'؟",
                options: ["بالضبط", "تقريباً", "حوالي", "تقريباً"],
                correct: 1,
                explanation: "Approximately = تقريباً"
            },
            {
                id: 207,
                question: "ماذا تعني كلمة 'Controversial'؟",
                options: ["متفق عليه", "مثير للجدل", "واضح", "غامض"],
                correct: 1,
                explanation: "Controversial = مثير للجدل"
            },
            {
                id: 208,
                question: "ماذا تعني كلمة 'Ambiguous'؟",
                options: ["واضح", "غامض", "بسيط", "معقد"],
                correct: 1,
                explanation: "Ambiguous = غامض"
            },
            {
                id: 209,
                question: "ماذا تعني كلمة 'Superficial'؟",
                options: ["عميق", "سطحي", "مهم", "ثانوي"],
                correct: 1,
                explanation: "Superficial = سطحي"
            },
            {
                id: 210,
                question: "ماذا تعني كلمة 'Profound'؟",
                options: ["عميق", "سطحي", "مهم", "ثانوي"],
                correct: 0,
                explanation: "Profound = عميق"
            }
        ]
    },

    // ========== اختبارات القواعد ==========
    grammar: {
        beginner: [
            {
                id: 301,
                question: "أي جملة صحيحة؟",
                options: ["He go to school", "He goes to school", "He going to school", "He gone to school"],
                correct: 1,
                explanation: "مع He نستخدم goes"
            },
            {
                id: 302,
                question: "أي جملة صحيحة؟",
                options: ["She like coffee", "She likes coffee", "She liking coffee", "She is like coffee"],
                correct: 1,
                explanation: "مع She نستخدم likes"
            },
            {
                id: 303,
                question: "أي جملة صحيحة؟",
                options: ["I am a student", "I is a student", "I are a student", "I be student"],
                correct: 0,
                explanation: "مع I نستخدم am"
            },
            {
                id: 304,
                question: "أي جملة صحيحة؟",
                options: ["You is my friend", "You are my friend", "You am my friend", "You be my friend"],
                correct: 1,
                explanation: "مع You نستخدم are"
            },
            {
                id: 305,
                question: "اختر الفعل الماضي لكلمة 'Go'",
                options: ["Goed", "Went", "Gone", "Goes"],
                correct: 1,
                explanation: "الماضي من Go هو Went"
            },
            {
                id: 306,
                question: "اختر الفعل الماضي لكلمة 'Eat'",
                options: ["Eated", "Ate", "Eaten", "Eats"],
                correct: 1,
                explanation: "الماضي من Eat هو Ate"
            },
            {
                id: 307,
                question: "اختر الفعل الماضي لكلمة 'See'",
                options: ["Seed", "Saw", "Seen", "Sees"],
                correct: 1,
                explanation: "الماضي من See هو Saw"
            },
            {
                id: 308,
                question: "اختر الفعل الماضي لكلمة 'Drink'",
                options: ["Drinked", "Drank", "Drunk", "Drinks"],
                correct: 1,
                explanation: "الماضي من Drink هو Drank"
            },
            {
                id: 309,
                question: "أي جملة صحيحة في المضارع المستمر؟",
                options: ["I am eat", "I eating", "I am eating", "I eats"],
                correct: 2,
                explanation: "المضارع المستمر = am/is/are + ing"
            },
            {
                id: 310,
                question: "أي جملة صحيحة في الماضي؟",
                options: ["I was happy", "I were happy", "I am happy", "I is happy"],
                correct: 0,
                explanation: "مع I في الماضي نستخدم was"
            }
        ],
        intermediate: [
            {
                id: 401,
                question: "أي جملة صحيحة؟",
                options: ["I have been to London", "I have gone to London", "I was to London", "I am to London"],
                correct: 0,
                explanation: "I have been = لقد زرت"
            },
            {
                id: 402,
                question: "أي جملة صحيحة؟",
                options: ["She has lived here since 2010", "She have lived here since 2010", "She is lived here since 2010", "She was lived here since 2010"],
                correct: 0,
                explanation: "مع She نستخدم has"
            },
            {
                id: 403,
                question: "اختر الجملة الصحيحة في المستقبل",
                options: ["I will go tomorrow", "I go tomorrow", "I am go tomorrow", "I going tomorrow"],
                correct: 0,
                explanation: "المستقبل = will + الفعل"
            },
            {
                id: 404,
                question: "اختر الجملة الصحيحة في الماضي المستمر",
                options: ["I was watching TV", "I watched TV", "I am watching TV", "I watch TV"],
                correct: 0,
                explanation: "الماضي المستمر = was/were + ing"
            },
            {
                id: 405,
                question: "اختر الجملة الصحيحة",
                options: ["I have saw that movie", "I have seen that movie", "I have see that movie", "I have seeing that movie"],
                correct: 1,
                explanation: "التام = have/has + past participle"
            },
            {
                id: 406,
                question: "اختر حرف الجر الصحيح",
                options: ["I'm interested in music", "I'm interested at music", "I'm interested on music", "I'm interested for music"],
                correct: 0,
                explanation: "Interested in = مهتم بـ"
            },
            {
                id: 407,
                question: "اختر حرف الجر الصحيح",
                options: ["She's good at math", "She's good in math", "She's good on math", "She's good for math"],
                correct: 0,
                explanation: "Good at = جيد في"
            },
            {
                id: 408,
                question: "أي جملة صحيحة؟",
                options: ["If it rains, I will stay home", "If it will rain, I stay home", "If it rain, I will stay", "If it raining, I stay"],
                correct: 0,
                explanation: "الجمل الشرطية = If + present, will"
            }
        ],
        advanced: [
            {
                id: 501,
                question: "أي جملة صحيحة؟",
                options: ["If I was rich", "If I were rich", "If I am rich", "If I be rich"],
                correct: 1,
                explanation: "في الحالات الافتراضية نستخدم were"
            },
            {
                id: 502,
                question: "أي جملة صحيحة؟",
                options: ["I wish I knew the answer", "I wish I know the answer", "I wish I known the answer", "I wish I was know"],
                correct: 0,
                explanation: "بعد wish نستخدم الماضي"
            },
            {
                id: 503,
                question: "اختر الجملة الصحيحة في المبني للمجهول",
                options: ["The cake was eaten", "The cake ate", "The cake is eat", "The cake eating"],
                correct: 0,
                explanation: "المبني للمجهول = was/were + past participle"
            },
            {
                id: 504,
                question: "اختر الجملة الصحيحة في التام",
                options: ["By next year, I will have graduated", "By next year, I will graduate", "By next year, I have graduated", "By next year, I graduated"],
                correct: 0,
                explanation: "Future Perfect = will have + past participle"
            },
            {
                id: 505,
                question: "أي جملة صحيحة؟",
                options: ["She suggested that he go", "She suggested that he goes", "She suggested that he went", "She suggested that he is going"],
                correct: 0,
                explanation: "بعد suggest نستخدم المصدر بدون to"
            },
            {
                id: 506,
                question: "أي جملة صحيحة؟",
                options: ["It's time we left", "It's time we leave", "It's time we have left", "It's time we are leaving"],
                correct: 0,
                explanation: "It's time + past simple"
            },
            {
                id: 507,
                question: "اختر الجملة الصحيحة",
                options: ["I'd rather you didn't do that", "I'd rather you don't do that", "I'd rather you not do that", "I'd rather you aren't doing that"],
                correct: 0,
                explanation: "I'd rather + past simple"
            }
        ]
    },

    // ========== اختبارات شاملة (متنوعة) ==========
    mixed: {
        beginner: [
            {
                id: 601,
                question: "اختر الترجمة الصحيحة: 'My name is Ahmed'",
                options: ["اسمي أحمد", "أنا أحمد", "هذا أحمد", "أحمد هنا"],
                correct: 0,
                explanation: "My name is = اسمي"
            },
            {
                id: 602,
                question: "كم حرف في كلمة 'Hello'؟",
                options: ["3", "4", "5", "6"],
                correct: 2,
                explanation: "Hello = 5 أحرف"
            },
            {
                id: 603,
                question: "ما هو جمع كلمة 'Book'؟",
                options: ["Books", "Bookes", "Bookies", "Booker"],
                correct: 0,
                explanation: "Books = كتب"
            },
            {
                id: 604,
                question: "ما هو مفرد كلمة 'Children'؟",
                options: ["Child", "Childs", "Childrens", "Childes"],
                correct: 0,
                explanation: "Child = طفل"
            },
            {
                id: 605,
                question: "اختر الضمير المناسب: '... am a teacher'",
                options: ["I", "You", "He", "She"],
                correct: 0,
                explanation: "مع am نستخدم I"
            }
        ],
        intermediate: [
            {
                id: 701,
                question: "اختر الجملة الصحيحة",
                options: ["I have 20 years old", "I am 20 years old", "I is 20 years old", "I are 20 years old"],
                correct: 1,
                explanation: "I am = أنا عمري"
            },
            {
                id: 702,
                question: "ما هو عكس كلمة 'Happy'؟",
                options: ["Sad", "Big", "Small", "Fast"],
                correct: 0,
                explanation: "عكس happy = sad"
            },
            {
                id: 703,
                question: "اختر المرادف الصحيح لكلمة 'Fast'",
                options: ["Slow", "Quick", "Big", "Small"],
                correct: 1,
                explanation: "Fast = Quick"
            },
            {
                id: 704,
                question: "أي جملة صحيحة؟",
                options: ["There is two books", "There are two books", "There am two books", "There be two books"],
                correct: 1,
                explanation: "مع الجمع نستخدم there are"
            },
            {
                id: 705,
                question: "اختر السؤال الصحيح",
                options: ["Where you live?", "Where do you live?", "Where does you live?", "Where are you live?"],
                correct: 1,
                explanation: "السؤال = Where do + فاعل + فعل"
            }
        ],
        advanced: [
            {
                id: 801,
                question: "ما معنى idiom 'Break a leg'؟",
                options: ["اكسر رجلك", "حظ سعيد", "تعال هنا", "اذهب بعيداً"],
                correct: 1,
                explanation: "Break a leg = حظ سعيد (في المسرح)"
            },
            {
                id: 802,
                question: "ما معنى 'Once in a blue moon'؟",
                options: ["مرة واحدة", "نادراً جداً", "كل يوم", "دائماً"],
                correct: 1,
                explanation: "Once in a blue moon = نادراً جداً"
            },
            {
                id: 803,
                question: "ما معنى 'Piece of cake'؟",
                options: ["قطعة كعكة", "شيء سهل", "شيء صعب", "لذيذ"],
                correct: 1,
                explanation: "Piece of cake = شيء سهل"
            },
            {
                id: 804,
                question: "ما معنى 'Hit the books'؟",
                options: ["ضرب الكتب", "يذاكر بجد", "يرمي الكتب", "يشتري كتب"],
                correct: 1,
                explanation: "Hit the books = يذاكر بجد"
            },
            {
                id: 805,
                question: "ما معنى 'Under the weather'؟",
                options: ["تحت الطقس", "مريض قليلاً", "تحت المطر", "سعيد"],
                correct: 1,
                explanation: "Under the weather = مريض قليلاً"
            }
        ]
    }
};

// دوال مساعدة للوصول للأسئلة
export function getQuizQuestions(type, level) {
    return QUIZ_DATA[type]?.[level] || [];
}

export function getRandomQuestions(type, level, count = 5) {
    const questions = getQuizQuestions(type, level);
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function getMixedQuestions(level, count = 10) {
    const vocab = getQuizQuestions('vocabulary', level) || [];
    const grammar = getQuizQuestions('grammar', level) || [];
    const mixed = [...vocab, ...grammar].sort(() => 0.5 - Math.random());
    return mixed.slice(0, count);
}