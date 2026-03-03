// auth-check.js
import { auth } from './assets/js/firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const protectedPages = ['dashboard.html', 'lessons.html', 'stories.html', 'quiz.html', 'profile.html', 'level-test.html'];
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

onAuthStateChanged(auth, (user) => {
    if (protectedPages.includes(currentPage) && !user) window.location.href = 'index.html';
    if (currentPage === 'index.html' && user) window.location.href = 'dashboard.html';
});