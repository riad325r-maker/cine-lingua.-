const admin = require('firebase-admin');
const fs = require('fs');

// تحميل الـ Service Account من environment variable
let serviceAccount;
try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    // تنظيف الـ JSON
    const cleaned = raw.trim().replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    serviceAccount = JSON.parse(cleaned);
    // إصلاح الـ private_key
    if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
} catch(e) {
    console.error('❌ Failed to parse service account:', e.message);
    console.error('Raw value starts with:', process.env.FIREBASE_SERVICE_ACCOUNT?.substring(0, 50));
    process.exit(1);
}

// تحميل إعدادات الإشعارات
let notifications;
try {
    notifications = JSON.parse(fs.readFileSync('notifications.json', 'utf8'));
} catch(e) {
    console.error('❌ Failed to read notifications.json:', e.message);
    process.exit(1);
}

// تهيئة Firebase
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const now = new Date();
const hour = now.getUTCHours();
const minute = now.getUTCMinutes();

console.log(`⏰ Current UTC time: ${hour}:${minute}`);

async function sendToTopic(title, body, image) {
    const message = {
        notification: { title, body },
        webpush: {
            notification: {
                title, body,
                icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                image: image || 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
                dir: 'rtl',
                vibrate: [200, 100, 200],
                actions: [
                    { action: 'open', title: '📚 تعلم الآن' },
                    { action: 'close', title: 'لاحقاً' }
                ]
            },
            fcm_options: { link: 'https://riad325r-maker.github.io/cine-lingua.-/' }
        },
        topic: 'all-users'
    };

    try {
        const res = await admin.messaging().send(message);
        console.log('✅ Notification sent:', res);
    } catch (e) {
        console.error('❌ Send error:', e.message);
        process.exit(1);
    }
}

async function main() {
    // إشعار التحديث
    if (notifications.update && notifications.update.enabled) {
        console.log('📢 Sending update notification...');
        await sendToTopic(
            notifications.update.title,
            notifications.update.body,
            notifications.update.image
        );
        return;
    }

    // إشعارات التذكير
    let sent = false;
    for (const reminder of notifications.reminders) {
        if (!reminder.enabled) continue;
        if (reminder.hour === hour && (reminder.minute || 0) === minute) {
            console.log(`📢 Sending reminder: ${reminder.title}`);
            await sendToTopic(reminder.title, reminder.body, reminder.image);
            sent = true;
        }
    }

    if (!sent) {
        console.log(`ℹ️ No reminders scheduled for ${hour}:${minute} UTC`);
        // للاختبار — أرسل أول reminder مفعّل
        const firstEnabled = notifications.reminders.find(r => r.enabled);
        if (firstEnabled && process.env.FORCE_SEND === 'true') {
            console.log('🧪 Force sending first enabled reminder for testing...');
            await sendToTopic(firstEnabled.title, firstEnabled.body, firstEnabled.image);
        }
    }
}

main();
