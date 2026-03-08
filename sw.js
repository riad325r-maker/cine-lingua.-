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
