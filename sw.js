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

// ===== إضافة كود BACKGROUND SYNC =====
// هذا الكود يخلي التطبيق يشتغل في الخلفية حتى لو مقفول

self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'cinelingua-sync') {
        event.waitUntil(
            (async () => {
                console.log('🔄 CineLingua شغال في الخلفية!');
                
                // هنا نقدر نحدث البيانات أو نرسل إشعارات
                try {
                    // جيب كل العملاء المفتوحين
                    const clients = await self.clients.matchAll();
                    clients.forEach(client => {
                        client.postMessage({
                            type: 'BACKGROUND_SYNC',
                            timestamp: Date.now()
                        });
                    });
                    
                    // اختياري: نحدث البيانات من السيرفر
                    // await updateContent();
                    
                } catch (error) {
                    console.log('خطأ في background sync:', error);
                }
            })()
        );
    }
});

// تسجيل الـ periodic sync عند تفعيل السيرفس وركر
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            // نمسك السيرفس وركر القديم
            await self.clients.claim();
            
            if ('periodicSync' in self.registration) {
                try {
                    // نسجل طلب تشغيل كل ساعة
                    await self.registration.periodicSync.register('cinelingua-sync', {
                        minInterval: 60 * 60 * 1000 // نطلب كل ساعة (المتصفح يقرر)
                    });
                    console.log('✅ CineLingua مسجل للعمل في الخلفية');
                } catch (error) {
                    console.log('❌ Periodic sync not supported:', error);
                }
            } else {
                console.log('⚠️ Periodic sync غير مدعوم في هذا المتصفح');
            }
        })()
    );
});

// وظيفة اختيارية لتحديث المحتوى
async function updateContent() {
    try {
        const response = await fetch('https://api.cinelingua.com/updates');
        const data = await response.json();
        
        // لو في تحديث جديد، نرسل إشعار
        if (data.hasUpdate) {
            self.registration.showNotification('📚 تحديث جديد!', {
                body: data.message,
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                tag: 'content-update'
            });
        }
    } catch (error) {
        console.log('فشل تحديث المحتوى:', error);
    }
}
