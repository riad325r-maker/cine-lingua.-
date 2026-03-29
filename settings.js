// =============================================
//  CineLingua - Settings + Theme + William AI
// =============================================

// ===== THEME =====
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cl-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(btn => {
        const isLight = btn.innerHTML.includes('sun') || btn.dataset.theme === 'light';
        const isDark  = btn.innerHTML.includes('moon') || btn.dataset.theme === 'dark';
        btn.classList.toggle('active', (theme === 'light' && isLight) || (theme === 'dark' && isDark));
    });
    document.querySelectorAll('.settings-theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === theme);
    });
}

const _savedTheme = localStorage.getItem('cl-theme') || 'light';
document.documentElement.setAttribute('data-theme', _savedTheme);

// ===== SETTINGS PANEL =====
function openSettings() {
    document.getElementById('settingsOverlay')?.classList.add('show');
    document.getElementById('settingsPanel')?.classList.add('show');
    refreshNotifStatus();
}

function closeSettings() {
    document.getElementById('settingsOverlay')?.classList.remove('show');
    document.getElementById('settingsPanel')?.classList.remove('show');
}

function refreshNotifStatus() {
    const badge = document.getElementById('notifStatusBadge');
    const btn   = document.getElementById('notifEnableBtn');
    if (!badge || !btn) return;
    const perm = Notification.permission;
    badge.className = 'notif-status-badge ' + perm;
    badge.textContent = perm === 'granted' ? 'مفعّلة ✓' : perm === 'denied' ? 'محظورة' : 'غير محددة';
    if (perm === 'granted') {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> <span>الإشعارات مفعّلة</span>';
        btn.disabled = true;
    } else if (perm === 'denied') {
        btn.innerHTML = '<i class="fas fa-bell-slash"></i> <span>محظورة</span>';
        btn.disabled = true;
    } else {
        btn.innerHTML = '<i class="fas fa-bell"></i> <span>تفعيل الإشعارات</span>';
        btn.disabled = false;
    }
}

function injectSettingsPanel() {
    if (document.getElementById('settingsPanel')) return;
    const el = document.createElement('div');
    el.innerHTML = `
    <div id="settingsOverlay" class="settings-overlay" onclick="closeSettings()"></div>
    <div id="settingsPanel" class="settings-panel">
        <div class="settings-header">
            <div class="settings-header-left">
                <div class="settings-header-icon"><i class="fas fa-sliders-h"></i></div>
                <div>
                    <div class="settings-header-title">الإعدادات</div>
                    <div class="settings-header-sub">CineLingua</div>
                </div>
            </div>
            <button class="settings-close" onclick="closeSettings()"><i class="fas fa-times"></i></button>
        </div>
        <div class="settings-body">
            <div class="settings-section">
                <div class="settings-section-title"><i class="fas fa-palette"></i> <span>المظهر</span></div>
                <div class="settings-theme-row">
                    <button class="settings-theme-btn" data-theme="light" onclick="setTheme('light')">
                        <div class="settings-theme-preview light-preview">
                            <div class="preview-bar"></div><div class="preview-card"></div><div class="preview-card short"></div>
                        </div>
                        <i class="fas fa-sun"></i> <span>فاتح</span>
                    </button>
                    <button class="settings-theme-btn" data-theme="dark" onclick="setTheme('dark')">
                        <div class="settings-theme-preview dark-preview">
                            <div class="preview-bar"></div><div class="preview-card"></div><div class="preview-card short"></div>
                        </div>
                        <i class="fas fa-moon"></i> <span>داكن</span>
                    </button>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-section-title"><i class="fas fa-globe"></i> <span>اللغة</span></div>
                <div class="settings-lang-row">
                    <button class="settings-lang-btn" data-lang="ar" onclick="applyLanguage('ar')">
                        <span class="lang-flag">🌙</span>
                        <div class="lang-info"><span class="lang-name">العربية</span><span class="lang-native">Arabic</span></div>
                        <i class="fas fa-check lang-check"></i>
                    </button>
                    <button class="settings-lang-btn" data-lang="en" onclick="applyLanguage('en')">
                        <span class="lang-flag">🌐</span>
                        <div class="lang-info"><span class="lang-name">English</span><span class="lang-native">الإنجليزية</span></div>
                        <i class="fas fa-check lang-check"></i>
                    </button>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-section-title"><i class="fas fa-bell"></i> <span>الإشعارات</span></div>
                <div class="settings-notif-card">
                    <div class="settings-notif-top">
                        <span class="settings-notif-label">حالة الإشعارات</span>
                        <span id="notifStatusBadge" class="notif-status-badge default">غير محددة</span>
                    </div>
                    <button id="notifEnableBtn" class="notif-enable-btn" onclick="requestNotifFromSettings()">
                        <i class="fas fa-bell"></i> <span>تفعيل الإشعارات</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="settings-footer"><span>CineLingua</span> <span style="opacity:0.4">•</span> <span>v2.0</span></div>
    </div>`;
    document.body.appendChild(el);
    setTheme(_savedTheme);
    updateSettingsLangBtns();
}

function updateSettingsLangBtns() {
    const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : (localStorage.getItem('cl-language') || 'ar');
    document.querySelectorAll('.settings-lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    const theme = localStorage.getItem('cl-theme') || 'light';
    document.querySelectorAll('.settings-theme-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.theme === theme));
}

async function requestNotifFromSettings() {
    if (!('Notification' in window)) return;
    const result = await Notification.requestPermission();
    refreshNotifStatus();
    if (result === 'granted' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification('CineLingua 🎓', {
                body: 'تم تفعيل الإشعارات! سنذكّرك يومياً 🔔',
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                vibrate: [200, 100, 200]
            });
        });
    }
}

// =============================================
//  WILLIAM AI — Floating Button + Chat Popup
// =============================================

const WILLIAM_KEY   = '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';
const WILLIAM_MODEL = 'llama-3.3-70b-versatile';
const WILLIAM_URL   = 'https://api.groq.com/openai/v1/chat/completions';

const WILLIAM_SYSTEM = `You are William, a sharp and friendly AI assistant built into CineLingua, an English learning app for Arabic speakers.

Your personality:
- Calm, intelligent, slightly witty — like a knowledgeable friend
- You speak naturally and conversationally, not like a textbook
- You can talk about anything: English, general knowledge, opinions, life, tech, etc.

Language rules:
- If the user writes in Arabic, reply in Arabic
- If the user writes in English, reply in English
- If the user mixes, follow their lead

English correction rules (IMPORTANT):
- Only correct the user if they make a clear grammar mistake OR use a word/phrase with the wrong meaning
- When correcting, do it naturally WITHIN your reply — don't make a big deal of it
- Format: after your normal reply, add a small note like:
  "✏️ بالمناسبة: [wrong] → [correct] — [brief tip in Arabic]"
- If their English is fine, do NOT mention corrections at all. Just reply normally.
- Never correct spelling of names, slang, or intentional informal writing.

Keep replies concise and natural. Be real, not robotic.`;

let williamHistory = [];
let williamOpen = false;

function injectWilliam() {
    if (document.getElementById('williamBtn')) return;

    const css = document.createElement('style');
    css.textContent = `
#williamBtn {
    position: fixed; bottom: 24px; right: 24px;
    width: 54px; height: 54px; border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    border: none; color: white;
    font-size: 0.72rem; font-weight: 800; letter-spacing: 0.03em;
    cursor: pointer; z-index: 8000;
    box-shadow: 0 4px 20px rgba(99,102,241,0.5);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
    font-family: 'Plus Jakarta Sans', sans-serif; user-select: none;
}
#williamBtn:hover { transform: scale(1.12); box-shadow: 0 6px 28px rgba(99,102,241,0.65); }
#williamBtn.open { transform: rotate(45deg) scale(1.05); }
.w-pulse {
    position: absolute; inset: -4px; border-radius: 50%;
    border: 2px solid rgba(99,102,241,0.4);
    animation: w-pulse 2.5s infinite;
}
@keyframes w-pulse {
    0%{transform:scale(1);opacity:0.7}
    70%{transform:scale(1.35);opacity:0}
    100%{transform:scale(1.35);opacity:0}
}
#williamPopup {
    position: fixed; bottom: 90px; right: 24px;
    width: 360px; max-width: calc(100vw - 32px);
    height: 520px; max-height: calc(100vh - 110px);
    background: var(--bg-card, #fff);
    border-radius: 1.5rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(99,102,241,0.12);
    z-index: 7999; display: flex; flex-direction: column; overflow: hidden;
    transform: scale(0.85) translateY(20px); opacity: 0; pointer-events: none;
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease;
    font-family: 'Plus Jakarta Sans', sans-serif;
}
#williamPopup.show { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }
.w-header { background: linear-gradient(135deg,#6366f1,#ec4899); padding: 0.9rem 1.1rem; display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
.w-avatar { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; color: white; flex-shrink: 0; }
.w-header-info { flex: 1; }
.w-name { font-size: 0.95rem; font-weight: 800; color: white; }
.w-status { font-size: 0.72rem; color: rgba(255,255,255,0.75); display: flex; align-items: center; gap: 0.3rem; }
.w-status::before { content:''; width:6px; height:6px; background:#4ade80; border-radius:50%; display:inline-block; animation:w-blink 2s infinite; }
@keyframes w-blink{0%,100%{opacity:1}50%{opacity:0.3}}
.w-close-btn { width:28px; height:28px; border-radius:50%; background:rgba(255,255,255,0.18); border:none; color:white; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:0.8rem; transition:background 0.2s,transform 0.2s; }
.w-close-btn:hover { background:rgba(255,255,255,0.32); transform:rotate(90deg); }
.w-clear-btn { width:28px; height:28px; border-radius:50%; background:rgba(255,255,255,0.12); border:none; color:rgba(255,255,255,0.75); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:0.75rem; transition:background 0.2s; }
.w-clear-btn:hover { background:rgba(255,255,255,0.25); color:white; }
.w-messages { flex:1; overflow-y:auto; padding:1rem 0.9rem; display:flex; flex-direction:column; gap:0.75rem; scroll-behavior:smooth; background:var(--bg-primary,#f8fafc); }
.w-messages::-webkit-scrollbar{width:3px}
.w-messages::-webkit-scrollbar-thumb{background:var(--border,#e2e8f0);border-radius:2px}
.w-msg { display:flex; gap:0.5rem; animation:w-in 0.22s ease; }
@keyframes w-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.w-msg.user { flex-direction:row-reverse; }
.w-bubble { max-width:82%; padding:0.6rem 0.9rem; border-radius:1rem; font-size:0.84rem; line-height:1.6; white-space:pre-wrap; word-break:break-word; }
.w-msg.ai .w-bubble { background:var(--bg-card,#fff); border:1px solid var(--border,#e2e8f0); color:var(--text-primary,#0f172a); border-bottom-right-radius:0.3rem; }
.w-msg.user .w-bubble { background:linear-gradient(135deg,#6366f1,#818cf8); color:white; border-bottom-left-radius:0.3rem; direction:ltr; text-align:left; }
.w-typing { display:flex; gap:4px; align-items:center; padding:0.6rem 0.9rem; background:var(--bg-card,#fff); border:1px solid var(--border,#e2e8f0); border-radius:1rem; border-bottom-right-radius:0.3rem; width:fit-content; }
.w-dot { width:6px; height:6px; border-radius:50%; background:#6366f1; animation:w-bounce 1.2s infinite; }
.w-dot:nth-child(2){animation-delay:0.2s}
.w-dot:nth-child(3){animation-delay:0.4s}
@keyframes w-bounce{0%,60%,100%{transform:translateY(0);opacity:0.5}30%{transform:translateY(-5px);opacity:1}}
.w-input-area { padding:0.7rem 0.9rem; background:var(--bg-card,#fff); border-top:1px solid var(--border,#e2e8f0); display:flex; gap:0.5rem; align-items:flex-end; flex-shrink:0; }
.w-input-wrap { flex:1; background:var(--bg-secondary,#f1f5f9); border-radius:1.2rem; border:1.5px solid var(--border,#e2e8f0); padding:0.5rem 0.8rem; transition:border-color 0.2s; }
.w-input-wrap:focus-within { border-color:#6366f1; background:var(--bg-card,#fff); }
#williamInput { width:100%; border:none; background:transparent; color:var(--text-primary,#0f172a); font-size:0.85rem; font-family:inherit; resize:none; outline:none; max-height:80px; line-height:1.5; }
#williamInput::placeholder { color:var(--text-tertiary,#94a3b8); }
.w-send-btn { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,#6366f1,#ec4899); border:none; color:white; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:0.85rem; flex-shrink:0; transition:transform 0.2s,opacity 0.2s; box-shadow:0 2px 10px rgba(99,102,241,0.4); }
.w-send-btn:hover:not(:disabled){transform:scale(1.1)}
.w-send-btn:disabled{opacity:0.4;cursor:not-allowed;transform:none}
.w-welcome{text-align:center;padding:1.5rem 1rem;color:var(--text-secondary,#64748b)}
.w-welcome .w-wicon{font-size:2rem;margin-bottom:0.5rem}
.w-welcome p{font-size:0.82rem;line-height:1.6}
`;
    document.head.appendChild(css);

    const wrap = document.createElement('div');
    wrap.innerHTML = `
<button id="williamBtn" onclick="toggleWilliam()" title="William AI">
    <span class="w-pulse"></span>AI
</button>
<div id="williamPopup">
    <div class="w-header">
        <div class="w-avatar">W</div>
        <div class="w-header-info">
            <div class="w-name">William</div>
            <div class="w-status">جاهز</div>
        </div>
        <button class="w-clear-btn" onclick="williamClear()" title="مسح"><i class="fas fa-trash-alt"></i></button>
        <button class="w-close-btn" onclick="toggleWilliam()"><i class="fas fa-times"></i></button>
    </div>
    <div class="w-messages" id="williamMessages">
        <div class="w-welcome">
            <div class="w-wicon">👋</div>
            <p>أنا William، مساعدك الذكي.<br>اسألني أي شي — إنجليزي، عربي، أو أي موضوع.</p>
        </div>
    </div>
    <div class="w-input-area">
        <div class="w-input-wrap">
            <textarea id="williamInput" rows="1" placeholder="اكتب رسالتك..." onkeydown="williamKey(event)" oninput="williamResize(this)"></textarea>
        </div>
        <button class="w-send-btn" id="williamSend" onclick="williamSend()">
            <i class="fas fa-paper-plane"></i>
        </button>
    </div>
</div>`;
    document.body.appendChild(wrap);
}

function toggleWilliam() {
    williamOpen = !williamOpen;
    document.getElementById('williamBtn').classList.toggle('open', williamOpen);
    document.getElementById('williamPopup').classList.toggle('show', williamOpen);
    if (williamOpen) setTimeout(() => document.getElementById('williamInput')?.focus(), 300);
}

function williamClear() {
    williamHistory = [];
    document.getElementById('williamMessages').innerHTML = `
        <div class="w-welcome">
            <div class="w-wicon">👋</div>
            <p>أنا William، مساعدك الذكي.<br>اسألني أي شي — إنجليزي، عربي، أو أي موضوع.</p>
        </div>`;
}

function williamKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); williamSend(); }
}

function williamResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 80) + 'px';
}

function wAddMsg(role, text) {
    const box = document.getElementById('williamMessages');
    box.querySelector('.w-welcome')?.remove();
    const el = document.createElement('div');
    el.className = 'w-msg ' + role;
    el.innerHTML = '<div class="w-bubble">' + text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</div>';
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
}

function wShowTyping() {
    const box = document.getElementById('williamMessages');
    const el = document.createElement('div');
    el.className = 'w-msg ai'; el.id = 'wTyping';
    el.innerHTML = '<div class="w-typing"><div class="w-dot"></div><div class="w-dot"></div><div class="w-dot"></div></div>';
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
}

function wHideTyping() { document.getElementById('wTyping')?.remove(); }

let williamBusy = false;

async function williamSend() {
    if (williamBusy) return;
    const input = document.getElementById('williamInput');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    williamResize(input);
    document.getElementById('williamSend').disabled = true;
    williamBusy = true;
    wAddMsg('user', text);
    williamHistory.push({ role: 'user', content: text });
    wShowTyping();
    try {
        const res = await fetch(WILLIAM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + WILLIAM_KEY },
            body: JSON.stringify({
                model: WILLIAM_MODEL,
                messages: [{ role: 'system', content: WILLIAM_SYSTEM }, ...williamHistory],
                temperature: 0.8,
                max_tokens: 600
            })
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || 'حدث خطأ، حاول مرة ثانية.';
        williamHistory.push({ role: 'assistant', content: reply });
        wHideTyping();
        wAddMsg('ai', reply);
    } catch(e) {
        wHideTyping();
        wAddMsg('ai', '⚠️ ما قدرت أتصل، تحقق من الاتصال.');
    }
    williamBusy = false;
    document.getElementById('williamSend').disabled = false;
    input.focus();
}

// =============================================
//  INIT
// =============================================
(function() {
    function init() {
        injectSettingsPanel();
        updateSettingsLangBtns();
        injectWilliam();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

setTheme(_savedTheme);
