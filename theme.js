// theme.js - kept for backward compatibility
// Main theme logic is now in settings.js
// This file ensures theme is applied before DOM loads

const _t = localStorage.getItem('cl-theme') || localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', _t);
// Migrate old key
if (localStorage.getItem('theme') && !localStorage.getItem('cl-theme')) {
    localStorage.setItem('cl-theme', localStorage.getItem('theme'));
}
