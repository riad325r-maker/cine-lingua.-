// translations.js
const translations = {
    ar: { siteName: "CineLingua", home: "الرئيسية", lessons: "الكلمات", stories: "القصص", quiz: "الاختبارات", dashboard: "لوحة التحكم" },
    en: { siteName: "CineLingua", home: "Home", lessons: "Lessons", stories: "Stories", quiz: "Quiz", dashboard: "Dashboard" }
};
let currentLanguage = localStorage.getItem('language') || 'ar';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage);
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    document.getElementById('currentLang').textContent = currentLanguage === 'ar' ? 'English' : 'العربية';
}