const CACHE_NAME = 'cinelingua-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/lessons.html',
    '/stories.html',
    '/tenses.html',
    '/quiz.html',
    '/download.html',
    '/manifest.json',
    '/notifications.json'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('activate', event => {
    self.clients.claim();
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request))
    );
});

self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {
        title: 'CineLingua 🎓',
        body: 'وقت تعلمك اليومي!'
    };
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
            badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
            image: data.image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
            dir: 'rtl', lang: 'ar',
            vibrate: [200, 100, 200, 100, 200],
            tag: 'cinelingua-notif',
            renotify: true,
            actions: [
                { action: 'open',  title: '📚 تعلم الآن' },
                { action: 'close', title: 'لاحقاً' }
            ],
            data: { url: 'https://riad325r-maker.github.io/cine-lingua.-/' }
        })
    );
});

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
