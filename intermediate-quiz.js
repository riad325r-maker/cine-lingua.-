// intermediate-quiz.js - 50 سؤال للمستوى المتوسط
const INTERMEDIATE_QUIZ = [
    // ========== كلمات متقدمة ==========
    {
        question: "ما معنى كلمة 'Beautiful'؟",
        options: ["قبيح", "جميل", "طويل", "قصير"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Important'؟",
        options: ["صعب", "سهل", "مهم", "عادي"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Different'؟",
        options: ["متشابه", "مختلف", "جديد", "قديم"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Interesting'؟",
        options: ["ممل", "مثير للاهتمام", "صعب", "سهل"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Delicious'؟",
        options: ["مقزز", "لذيذ", "حار", "بارد"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Expensive'؟",
        options: ["رخيص", "غالي", "جديد", "قديم"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Cheap'؟",
        options: ["غالي", "رخيص", "جيد", "سيء"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Dangerous'؟",
        options: ["آمن", "خطير", "سهل", "صعب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Safe'؟",
        options: ["خطير", "آمن", "سريع", "بطيء"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Quick'؟",
        options: ["بطيء", "سريع", "طويل", "قصير"],
        correct: 1
    },
    
    // ========== أفعال متقدمة ==========
    {
        question: "ما معنى كلمة 'Understand'؟",
        options: ["يفهم", "يكتب", "يقرأ", "يتكلم"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Remember'؟",
        options: ["ينسى", "يتذكر", "يكرر", "يراجع"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Forget'؟",
        options: ["يتذكر", "ينسى", "يعرف", "يجهل"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Believe'؟",
        options: ["يشك", "يؤمن", "يعرف", "يظن"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Decide'؟",
        options: ["يتردد", "يقرر", "يفكر", "يحلم"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Promise'؟",
        options: ["يكذب", "يعد", "يهدد", "يسأل"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Explain'؟",
        options: ["يسأل", "يجيب", "يشرح", "يفهم"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Describe'؟",
        options: ["يكتب", "يقرأ", "يصف", "يرسم"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Improve'؟",
        options: ["يسيء", "يحسن", "يغير", "يكسر"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Prepare'؟",
        options: ["ينسى", "يهمل", "يحضر", "يجهز"],
        correct: 3
    },
    
    // ========== أزمنة متوسطة ==========
    {
        question: "اختر الجملة الصحيحة في المضارع التام",
        options: ["I have saw that movie", "I have seen that movie", "I has seen that movie", "I saw that movie"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في الماضي المستمر",
        options: ["I was watch TV when you called", "I was watching TV when you called", "I watched TV when you called", "I were watching TV when you called"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في المستقبل المستمر",
        options: ["I will work at 8pm", "I will be working at 8pm", "I am working at 8pm", "I work at 8pm"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في الماضي التام",
        options: ["When I arrived, they left", "When I arrived, they had left", "When I arrived, they have left", "When I arrived, they were left"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة: 'I _____ (study) English for 5 years'",
        options: ["study", "have studied", "studied", "am studying"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة: 'She _____ (work) here since 2020'",
        options: ["works", "worked", "has worked", "is working"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'They _____ (travel) to London last year'",
        options: ["travel", "traveled", "have traveled", "were traveling"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة: 'While I _____ (cook), he was reading'",
        options: ["cook", "cooked", "was cooking", "have cooked"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'By the time we arrived, the movie _____ (start)'",
        options: ["started", "has started", "had started", "was starting"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'I _____ (wait) for you for an hour'",
        options: ["wait", "waited", "have been waiting", "am waiting"],
        correct: 2
    },
    
    // ========== روابط وكلمات ربط ==========
    {
        question: "ما معنى كلمة 'However'؟",
        options: ["لذلك", "ومع ذلك", "بسبب", "لكن"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Although'؟",
        options: ["على الرغم من", "بسبب", "لذلك", "لكن"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Therefore'؟",
        options: ["ومع ذلك", "على الرغم من", "لذلك", "بسبب"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Because'؟",
        options: ["لكن", "لذلك", "بسبب", "على الرغم من"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'While'؟",
        options: ["بينما", "لكن", "لذلك", "بسبب"],
        correct: 0
    },
    
    // ========== ترجمة جمل متوسطة ==========
    {
        question: "اختر الترجمة الصحيحة: 'لقد عشت هنا منذ 5 سنوات'",
        options: ["I live here for 5 years", "I have lived here for 5 years", "I lived here for 5 years", "I am living here for 5 years"],
        correct: 1
    },
    {
        question: "اختر الترجمة الصحيحة: 'عندما وصلت، كانوا قد غادروا'",
        options: ["When I arrived, they left", "When I arrived, they have left", "When I arrived, they had left", "When I arrived, they were leaving"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'أنا أتعلم الإنجليزية منذ 3 سنوات'",
        options: ["I learn English for 3 years", "I have learned English for 3 years", "I have been learning English for 3 years", "I am learning English for 3 years"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'إذا كنت مكانك، لذهبت'",
        options: ["If I am you, I will go", "If I was you, I would go", "If I were you, I would go", "If I be you, I go"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'أتمنى لو كنت أعرف'",
        options: ["I wish I know", "I wish I knew", "I wish I have known", "I wish I was knowing"],
        correct: 1
    },
    
    // ========== كلمات إضافية ==========
    {
        question: "ما معنى كلمة 'Environment'؟",
        options: ["مناخ", "بيئة", "طقس", "طبيعة"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Government'؟",
        options: ["شعب", "حكومة", "دولة", "مدينة"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Education'؟",
        options: ["تعليم", "ثقافة", "علوم", "فنون"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Health'؟",
        options: ["مرض", "صحة", "علاج", "دواء"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Business'؟",
        options: ["عمل", "تجارة", "وظيفة", "شركة"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Experience'؟",
        options: ["خبرة", "تجربة", "معرفة", "مهارة"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Opportunity'؟",
        options: ["مشكلة", "فرصة", "تحدي", "هدف"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Information'؟",
        options: ["أخبار", "معلومات", "بيانات", "حقائق"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Difficult'؟",
        options: ["سهل", "صعب", "مستحيل", "ممكن"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Easy'؟",
        options: ["صعب", "سهل", "مستحيل", "عادي"],
        correct: 1
    }
];

console.log('✅ intermediate-quiz.js loaded with', INTERMEDIATE_QUIZ.length, 'سؤال');
