// beginner-quiz.js - 50 سؤال للمستوى المبتدئ
const BEGINNER_QUIZ = [
    // ========== كلمات أساسية ==========
    {
        question: "ما معنى كلمة 'Book'؟",
        options: ["قلم", "كتاب", "دفتر", "مكتب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'House'؟",
        options: ["منزل", "سيارة", "مدرسة", "حديقة"],
        correct: 0
    },
    {
        question: "ما معنى كلمة 'Water'؟",
        options: ["خبز", "حليب", "ماء", "عصير"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Car'؟",
        options: ["قطار", "سيارة", "دراجة", "طائرة"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Teacher'؟",
        options: ["طبيب", "مهندس", "معلم", "محام"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Apple'؟",
        options: ["موز", "تفاح", "برتقال", "عنب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Dog'؟",
        options: ["قطة", "كلب", "فأر", "حصان"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Cat'؟",
        options: ["كلب", "قطة", "فأر", "طائر"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Food'؟",
        options: ["شراب", "طعام", "فواكه", "خضروات"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Drink'؟",
        options: ["يأكل", "يشرب", "ينام", "يلعب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Eat'؟",
        options: ["يشرب", "يأكل", "ينام", "يلعب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Sleep'؟",
        options: ["يأكل", "يشرب", "ينام", "يلعب"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Play'؟",
        options: ["يعمل", "يدرس", "يلعب", "ينام"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Work'؟",
        options: ["يلعب", "يعمل", "يدرس", "ينام"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Study'؟",
        options: ["يعمل", "يلعب", "يدرس", "ينام"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Happy'؟",
        options: ["حزين", "سعيد", "غاضب", "متعب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Sad'؟",
        options: ["سعيد", "حزين", "غاضب", "متعب"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Angry'؟",
        options: ["سعيد", "حزين", "غاضب", "متعب"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Tired'؟",
        options: ["سعيد", "حزين", "غاضب", "متعب"],
        correct: 3
    },
    {
        question: "ما معنى كلمة 'Big'؟",
        options: ["صغير", "كبير", "طويل", "قصير"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Small'؟",
        options: ["كبير", "صغير", "طويل", "قصير"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Hot'؟",
        options: ["بارد", "حار", "دافئ", "مثلج"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Cold'؟",
        options: ["حار", "بارد", "دافئ", "مثلج"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Good'؟",
        options: ["سيء", "جيد", "وسخ", "نظيف"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Bad'؟",
        options: ["جيد", "سيء", "نظيف", "وسخ"],
        correct: 1
    },
    
    // ========== ترجمة جمل ==========
    {
        question: "اختر الترجمة الصحيحة: 'أنا أدرس الإنجليزية'",
        options: ["I study English", "I eat English", "I play English", "I sleep English"],
        correct: 0
    },
    {
        question: "اختر الترجمة الصحيحة: 'هي تعمل في مستشفى'",
        options: ["He works in hospital", "She works in hospital", "They work in hospital", "We work in hospital"],
        correct: 1
    },
    {
        question: "اختر الترجمة الصحيحة: 'نحن نلعب كرة القدم'",
        options: ["I play football", "He plays football", "We play football", "They play football"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'هم يدرسون في المدرسة'",
        options: ["I study at school", "He studies at school", "We study at school", "They study at school"],
        correct: 3
    },
    {
        question: "اختر الترجمة الصحيحة: 'أنت تأكل التفاح'",
        options: ["I eat apple", "You eat apple", "He eats apple", "She eats apple"],
        correct: 1
    },
    {
        question: "اختر الترجمة الصحيحة: 'أخي يلعب في الحديقة'",
        options: ["My brother plays in the park", "My sister plays in the park", "My father works in the park", "My mother cooks in the park"],
        correct: 0
    },
    {
        question: "اختر الترجمة الصحيحة: 'أمي تطبخ الطعام'",
        options: ["My father cooks food", "My mother cooks food", "My brother cooks food", "My sister cooks food"],
        correct: 1
    },
    {
        question: "اختر الترجمة الصحيحة: 'أبي يعمل بجد'",
        options: ["My mother works hard", "My brother works hard", "My father works hard", "My sister works hard"],
        correct: 2
    },
    {
        question: "اختر الترجمة الصحيحة: 'أختي تقرأ كتاباً'",
        options: ["My brother reads a book", "My sister reads a book", "My mother reads a book", "My father reads a book"],
        correct: 1
    },
    {
        question: "اختر الترجمة الصحيحة: 'نحن نشرب الماء'",
        options: ["I drink water", "You drink water", "We drink water", "They drink water"],
        correct: 2
    },
    
    // ========== قواعد بسيطة ==========
    {
        question: "ما هو النفي الصحيح لـ 'I like coffee'؟",
        options: ["I not like coffee", "I don't like coffee", "I doesn't like coffee", "I no like coffee"],
        correct: 1
    },
    {
        question: "ما هو النفي الصحيح لـ 'He plays football'؟",
        options: ["He don't play football", "He doesn't play football", "He not play football", "He no play football"],
        correct: 1
    },
    {
        question: "ما هو السؤال الصحيح لـ 'You like pizza'؟",
        options: ["Do you like pizza?", "Does you like pizza?", "Are you like pizza?", "Is you like pizza?"],
        correct: 0
    },
    {
        question: "ما هو السؤال الصحيح لـ 'She works in an office'؟",
        options: ["Do she work in an office?", "Does she work in an office?", "Is she work in an office?", "Are she work in an office?"],
        correct: 1
    },
    {
        question: "أي جملة صحيحة في المضارع البسيط؟",
        options: ["He go to school", "He goes to school", "He going to school", "He went to school"],
        correct: 1
    },
    {
        question: "أي جملة صحيحة في المضارع البسيط؟",
        options: ["They plays football", "They play football", "They playing football", "They played football"],
        correct: 1
    },
    {
        question: "اختر الضمير المناسب: '_____ am a student'",
        options: ["I", "You", "He", "She"],
        correct: 0
    },
    {
        question: "اختر الضمير المناسب: '_____ is a doctor' (للمذكر)",
        options: ["I", "You", "He", "She"],
        correct: 2
    },
    {
        question: "اختر الضمير المناسب: '_____ are my friends'",
        options: ["I", "He", "She", "They"],
        correct: 3
    },
    {
        question: "اختر الفعل الصحيح: 'She _____ to school every day'",
        options: ["go", "goes", "going", "went"],
        correct: 1
    },
    
    // ========== كلمات إضافية ==========
    {
        question: "ما معنى كلمة 'Morning'؟",
        options: ["مساء", "صباح", "ليل", "ظهر"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Night'؟",
        options: ["صباح", "مساء", "ليل", "ظهر"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Day'؟",
        options: ["ليل", "يوم", "أسبوع", "شهر"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Week'؟",
        options: ["يوم", "شهر", "أسبوع", "سنة"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Month'؟",
        options: ["أسبوع", "شهر", "سنة", "يوم"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Year'؟",
        options: ["شهر", "أسبوع", "سنة", "يوم"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Red'؟",
        options: ["أزرق", "أحمر", "أخضر", "أصفر"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Blue'؟",
        options: ["أحمر", "أزرق", "أخضر", "أصفر"],
        correct: 1
    },
    {
        question: "ما معنى كلمة 'Green'؟",
        options: ["أحمر", "أزرق", "أخضر", "أصفر"],
        correct: 2
    },
    {
        question: "ما معنى كلمة 'Yellow'؟",
        options: ["أحمر", "أزرق", "أخضر", "أصفر"],
        correct: 3
    }
];

console.log('✅ beginner-quiz.js loaded with', BEGINNER_QUIZ.length, 'سؤال');
