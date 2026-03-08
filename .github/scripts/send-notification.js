const admin = require('firebase-admin');
const fs = require('fs');

let serviceAccount;
try {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    const cleaned = raw.trim().replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    serviceAccount = JSON.parse(cleaned);
    if (serviceAccount.private_key) {
        serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');
    }
} catch(e) {
    console.error('❌ Failed to parse service account:', e.message);
    process.exit(1);
}

let notifications;
try {
    notifications = JSON.parse(fs.readFileSync('notifications.json', 'utf8'));
} catch(e) {
    console.error('❌ Failed to read notifications.json:', e.message);
    process.exit(1);
}

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const now = new Date();
const hour = now.getUTCHours();
const minute = now.getUTCMinutes();
console.log(`⏰ UTC time: ${hour}:${minute}`);

async function getAllTokens() {
    const snapshot = await db.collection('fcmTokens').get();
    return snapshot.docs.map(doc => doc.data().token).filter(Boolean);
}

async function sendToTokens(tokens, title, body, image) {
    if (tokens.length === 0) {
        console.log('⚠️ No tokens found');
        return;
    }

    console.log(`📤 Sending to ${tokens.length} device(s)...`);

    const messages = tokens.map(token => ({
        token,
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
        }
    }));

    // إرسال على دفعات
    const batchSize = 500;
    for (let i = 0; i < messages.length; i += batchSize) {
        const batch = messages.slice(i, i + batchSize);
        const res = await admin.messaging().sendEach(batch);
        console.log(`✅ Sent: ${res.successCount}, ❌ Failed: ${res.failureCount}`);

        // احذف الـ tokens الفاشلة
        for (let j = 0; j < res.responses.length; j++) {
            if (!res.responses[j].success) {
                const failedToken = batch[j].token;
                await db.collection('fcmTokens').doc(failedToken).delete();
                console.log('🗑️ Removed invalid token');
            }
        }
    }
}

async function main() {
    const tokens = await getAllTokens();
    console.log(`📱 Total tokens: ${tokens.length}`);

    if (notifications.update && notifications.update.enabled) {
        console.log('📢 Sending update notification...');
        await sendToTokens(tokens, notifications.update.title, notifications.update.body, notifications.update.image);
        return;
    }

    let sent = false;
    for (const reminder of notifications.reminders) {
        if (!reminder.enabled) continue;
        if (reminder.hour === hour && (reminder.minute || 0) === minute) {
            console.log(`📢 Sending: ${reminder.title}`);
            await sendToTokens(tokens, reminder.title, reminder.body, reminder.image);
            sent = true;
        }
    }

    if (!sent) {
        console.log(`ℹ️ No reminders for ${hour}:${minute} UTC`);
        if (process.env.FORCE_SEND === 'true') {
            const first = notifications.reminders.find(r => r.enabled);
            if (first) {
                console.log('🧪 Force sending for testing...');
                await sendToTokens(tokens, first.title, first.body, first.image);
            }
        }
    }
}

main().catch(e => { console.error('❌ Error:', e); process.exit(1); });
