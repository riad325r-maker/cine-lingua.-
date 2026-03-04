// quiz-data.js - الملف الرئيسي للاختبارات
const QUIZ_DATA = {
    beginner: typeof BEGINNER_QUIZ !== 'undefined' ? BEGINNER_QUIZ : [],
    intermediate: typeof INTERMEDIATE_QUIZ !== 'undefined' ? INTERMEDIATE_QUIZ : [],
    advanced: typeof ADVANCED_QUIZ !== 'undefined' ? ADVANCED_QUIZ : []
};

// التحقق من التحميل
console.log('✅ quiz-data.js loaded');
console.log('📊 مبتدئ:', QUIZ_DATA.beginner.length, 'سؤال');
console.log('📊 متوسط:', QUIZ_DATA.intermediate.length, 'سؤال');
console.log('📊 متقدم:', QUIZ_DATA.advanced.length, 'سؤال');
