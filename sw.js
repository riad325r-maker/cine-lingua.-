importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBUqx2f4jmg-XSshWA_AcDSMPcttPPBs_E",
    authDomain: "cinelingua-d4c2b.firebaseapp.com",
    projectId: "cinelingua-d4c2b",
    storageBucket: "cinelingua-d4c2b.firebasestorage.app",
    messagingSenderId: "569970499890",
    appId: "1:569970499890:web:9cf03df25e37745d44f72b"
});

const messaging = firebase.messaging();

const CACHE_VERSION = '1.3.0';
const CACHE_NAME    = `cinelingua-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `cinelingua-dynamic-${CACHE_VERSION}`;

// ✅ المسار الصحيح لـ GitHub Pages
const BASE = '/cine-lingua.-';

const STATIC_ASSETS = [
    BASE + '/',
    BASE + '/index.html',
    BASE + '/lessons.html',
    BASE + '/stories.html',
    BASE + '/tenses.html',
    BASE + '/quiz.html',
    BASE + '/download.html',
    BASE + '/offline.html',
    BASE + '/manifest.json',
    BASE + '/style.css',
    BASE + '/translation.js',
    BASE + '/settings.js',
    BASE + '/theme.js',
    BASE + '/notifications.json',
    BASE + '/beginner-data.js',
    BASE + '/intermediate-data.js',
    BASE + '/advanced-data.js',
    BASE + '/stories-data.js',
    BASE + '/tenses-data.js',
    BASE + '/words-data.js',
    'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// ===== FIREBASE BACKGROUND MESSAGING =====
messaging.onBackgroundMessage(payload => {
    const { title, body, image } = payload.notification;
    self.registration.showNotification(title, {
        body,
        icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        image: image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
        dir: 'rtl', lang: 'ar',
        vibrate: [200, 100, 200, 100, 200],
        tag: 'cinelingua-notif',
        renotify: true,
        actions: [
            { action: 'open',  title: '📚 تعلم الآن' },
            { action: 'close', title: 'لاحقاً' }
        ]
    });
});

// ===== NOTIFICATION CLICK =====
self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (event.action === 'close') return;
    const url = 'https://riad325r-maker.github.io/cine-lingua.-/';
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
            for (const c of list) {
                if (c.url.includes('riad325r-maker') && 'focus' in c) return c.focus();
            }
            return clients.openWindow(url);
        })
    );
});

// ===== INSTALL =====
self.addEventListener('install', event => {
    console.log(`✅ SW ${CACHE_VERSION} installing...`);
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('📦 Caching all assets...');
            return Promise.allSettled(
                STATIC_ASSETS.map(url =>
                    cache.add(url).catch(err => console.warn('⚠️ Failed:', url, err))
                )
            );
        })
    );
});

// ===== ACTIVATE =====
self.addEventListener('activate', event => {
    event.waitUntil(
        (async () => {
            await self.clients.claim();

            const keys = await caches.keys();
            const old  = keys.filter(k =>
                k.startsWith('cinelingua-') && k !== CACHE_NAME && k !== DYNAMIC_CACHE
            );
            if (old.length) await Promise.all(old.map(k => caches.delete(k)));

            console.log(`✅ SW ${CACHE_VERSION} activated!`);

            const allClients = await self.clients.matchAll({ includeUncontrolled: true });
            allClients.forEach(c => c.postMessage({ type: 'NEW_VERSION', version: CACHE_VERSION }));

            if ('periodicSync' in self.registration) {
                try {
                    await self.registration.periodicSync.register('cinelingua-sync', {
                        minInterval: 60 * 60 * 1000
                    });
                } catch (e) {}
            }
        })()
    );
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const url = event.request.url;

    // HTML — Network First
    if (event.request.mode === 'navigate' || url.endsWith('.html')) {
        event.respondWith(
            fetch(event.request)
                .then(res => {
                    if (res && res.status === 200) {
                        caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
                    }
                    return res;
                })
                .catch(async () => {
                    const cached = await caches.match(event.request);
                    return cached || caches.match(BASE + '/offline.html');
                })
        );
        return;
    }

    // JS/CSS/Images — Cache First
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) {
                refreshInBackground(event.request);
                return cached;
            }
            return fetch(event.request).then(res => {
                if (res && res.status === 200) {
                    caches.open(DYNAMIC_CACHE).then(c => c.put(event.request, res.clone()));
                }
                return res;
            }).catch(() => {
                if (url.endsWith('.html')) return caches.match(BASE + '/offline.html');
                return new Response('Offline', { status: 503 });
            });
        })
    );
});

function refreshInBackground(request) {
    fetch(request).then(res => {
        if (res && res.status === 200) {
            caches.open(DYNAMIC_CACHE).then(c => c.put(request, res));
        }
    }).catch(() => {});
}

// ===== PERIODIC SYNC =====
self.addEventListener('periodicsync', event => {
    if (event.tag === 'cinelingua-sync') {
        event.waitUntil(checkForUpdates());
    }
});

async function checkForUpdates() {
    try {
        const res = await fetch(BASE + '/notifications.json?t=' + Date.now(), { cache: 'no-store' });
        if (!res || res.status !== 200) return;
        const data = await res.clone().json();

        if (data.update?.enabled) {
            self.registration.showNotification(data.update.title || '📚 تحديث جديد!', {
                body: data.update.body || 'تمت إضافة محتوى جديد',
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                tag: 'content-update',
                actions: [
                    { action: 'refresh', title: '🔄 تحديث الآن' },
                    { action: 'later',   title: '⏰ لاحقاً' }
                ]
            });
        }

        const cache = await caches.open(CACHE_NAME);
        await Promise.allSettled(
            STATIC_ASSETS
                .filter(u => !u.startsWith('https://fonts') && !u.startsWith('https://cdnjs'))
                .map(url =>
                    fetch(url, { cache: 'no-store' })
                        .then(r => { if (r && r.status === 200) cache.put(url, r); })
                        .catch(() => {})
                )
        );
        console.log('✅ Cache refreshed');
    } catch (e) {
        console.log('Update check failed:', e);
    }
}

// ===== MESSAGE =====
self.addEventListener('message', event => {
    if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
    if (event.data?.type === 'CHECK_VERSION') {
        event.ports[0]?.postMessage({ version: CACHE_VERSION });
    }
});
