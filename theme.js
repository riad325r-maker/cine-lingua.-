// theme.js
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

window.setTheme = function(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerHTML.includes(theme === 'light' ? 'sun' : 'moon'));
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.innerHTML = `
            <button class="theme-toggle-btn ${savedTheme === 'light' ? 'active' : ''}" onclick="setTheme('light')"><i class="fas fa-sun"></i></button>
            <button class="theme-toggle-btn ${savedTheme === 'dark' ? 'active' : ''}" onclick="setTheme('dark')"><i class="fas fa-moon"></i></button>
        `;
    }
});