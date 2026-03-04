// advanced-quiz.js - 50 سؤال للمستوى المتقدم
const ADVANCED_QUIZ = [
    // ========== كلمات متقدمة جداً ==========
    {
        question: "ما معنى كلمة 'Nevertheless'؟",
        options: ["لأن", "مع ذلك", "بينما", "لذلك"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Consequently'؟",
        options: ["وبالتالي", "على الرغم من", "بسبب", "لكن"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Furthermore'؟",
        options: ["أخيراً", "علاوة على ذلك", "أولاً", "ثانياً"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Ambiguous'؟",
        options: ["واضح", "غامض", "سهل", "صعب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Comprehensive'؟",
        options: ["ناقص", "شامل", "بسيط", "معقد"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Sophisticated'؟",
        options: ["بسيط", "متطور", "قديم", "حديث"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Inevitable'؟",
        options: ["ممكن", "مستحيل", "لا مفر منه", "متوقع"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Significant'؟",
        options: ["صغير", "كبير", "مهم", "ضئيل"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Controversial'؟",
        options: ["متفق عليه", "مثير للجدل", "واضح", "بسيط"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Hypothetical'؟",
        options: ["حقيقي", "افتراضي", "مؤكد", "محتمل"],
        correct: 1
    },
    
    // ========== أزمنة متقدمة ==========
    {
        question: "اختر الجملة الصحيحة في المستقبل التام",
        options: ["I will finish by 5pm", "I will have finished by 5pm", "I will be finishing by 5pm", "I finish by 5pm"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في المستقبل التام المستمر",
        options: ["By December, I will work here for 5 years", "By December, I will have worked here for 5 years", "By December, I will have been working here for 5 years", "By December, I am working here for 5 years"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة في الماضي التام المستمر",
        options: ["She was tired because she worked", "She was tired because she had worked", "She was tired because she had been working", "She was tired because she was working"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'I wish I _____ (know) the answer'",
        options: ["know", "knew", "have known", "had known"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة: 'If I _____ (be) you, I would go'",
        options: ["am", "was", "were", "be"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'She suggested that he _____ (see) a doctor'",
        options: ["sees", "saw", "see", "has seen"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'It's time we _____ (go) home'",
        options: ["go", "went", "have gone", "are going"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة: 'I'd rather you _____ (not/tell) anyone'",
        options: ["don't tell", "didn't tell", "haven't told", "hadn't told"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة: 'By next year, she _____ (study) for 5 years'",
        options: ["will study", "will have studied", "will have been studying", "will be studying"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة: 'He acted as if he _____ (know) everything'",
        options: ["knows", "knew", "has known", "had known"],
        correct: 1
    },
    
    // ========== جمل شرطية ==========
    {
        question: "اختر الجملة الصحيحة (شرط حقيقي)",
        options: ["If it rains, I will stay home", "If it rained, I would stay home", "If it had rained, I would have stayed home", "If it rain, I stay home"],
        correct: 0
    },
    {
        question: "اختر الجملة الصحيحة (شرط غير حقيقي في الحاضر)",
        options: ["If I am rich, I will buy a car", "If I was rich, I would buy a car", "If I were rich, I would buy a car", "If I had been rich, I would have bought a car"],
        correct: 2
    },
    {
        question: "اختر الجملة الصحيحة (شرط غير حقيقي في الماضي)",
        options: ["If I knew, I would tell you", "If I had known, I would have told you", "If I know, I will tell you", "If I know, I tell you"],
        correct: 1
    },
    
    // ========== المبني للمجهول ==========
    {
        question: "اختر الجملة الصحيحة في المبني للمجهول",
        options: ["Someone stole my car", "My car was stolen", "My car is stolen", "My car has stolen"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في المبني للمجهول",
        options: ["They are building a new hospital", "A new hospital is being built", "A new hospital is built", "A new hospital was built"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في المبني للمجهول",
        options: ["Shakespeare wrote Hamlet", "Hamlet was written by Shakespeare", "Hamlet is written by Shakespeare", "Hamlet has written by Shakespeare"],
        correct: 1
    },
    
    // ========== كلام منقول ==========
    {
        question: "اختر الجملة الصحيحة في الكلام المنقول: 'He said, 'I am tired''",
        options: ["He said he is tired", "He said he was tired", "He said he has been tired", "He said he had been tired"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في الكلام المنقول: 'She said, 'I will call you''",
        options: ["She said she will call me", "She said she would call me", "She said she calls me", "She said she called me"],
        correct: 1
    },
    {
        question: "اختر الجملة الصحيحة في الكلام المنقول: 'They said, 'We have finished''",
        options: ["They said they have finished", "They said they had finished", "They said they finished", "They said they were finishing"],
        correct: 1
    },
    
    // ========== كلمات متقدمة ==========
    {
        question: "ما معنى كلمة 'Ubiquitous'؟",
        options: ["نادر", "موجود في كل مكان", "غالي", "رخيص"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Ephemeral'؟",
        options: ["دائم", "مؤقت", "قوي", "ضعيف"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Ambivalent'؟",
        options: ["متأكد", "متردد", "سعيد", "حزين"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Candid'؟",
        options: ["صادق", "كاذب", "غامض", "واضح"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Diligent'؟",
        options: ["كسول", "مجتهد", "سريع", "بطيء"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Meticulous'؟",
        options: ["مهمل", "دقيق", "سريع", "بطيء"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Pragmatic'؟",
        options: ["عاطفي", "واقعي", "مثالي", "عقلاني"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Skeptical'؟",
        options: ["مصدق", "متشكك", "مؤمن", "جازم"],
        correct: 1
    },
    
    // ========== ترجمة جمل متقدمة ==========
    {
        question: "اختر الترجمة الصحيحة: 'لو كنت أعرف، لأخبرتك'",
        options: ["If I know, I will tell you", "If I knew, I would tell you", "If I had known, I would have told you", "If I know, I tell you"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'يُقال إنه غني'",
        options: ["He is said to be rich", "He says he is rich", "They say he is rich", "He is rich"],
        correct: 0
    },
    {
        question: "اختر الترجمة الصحيحة: 'كان يجب أن أدرس أكثر'",
        options: ["I should study more", "I should have studied more", "I must study more", "I had to study more"],
        correct: 1
    },
    {
        question: "اختر الترجمة الصحيحة: 'ربما يكون قد نسي'",
        options: ["He forgot", "He may forget", "He may have forgotten", "He might forget"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'لا داعي للقلق'",
        options: ["You don't worry", "You needn't worry", "You mustn't worry", "You shouldn't worry"],
        correct: 1
    }
];

console.log('✅ advanced-quiz.js loaded with', ADVANCED_QUIZ.length, 'سؤال');
