const admin = require('firebase-admin');

try {
  // فك تشفير service account
  const serviceAccount = JSON.parse(
    Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString()
  );
  console.log('✅ تم فك تشفير service account');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log('✅ تم تهيئة Firebase');

} catch (error) {
  console.error('❌ خطأ في التهيئة:', error.message);
  process.exit(1);
}

async function sendNotification() {
  try {
    // جرب ترسل لـ topic أو condition
    const message = {
      notification: {
        title: '🎬 CineLingua',
        body: 'وقت جلسة تعلمك اليومية! 📚'
      },
      // بدل topic جرب condition
      condition: "'all-users' in topics || 'all' in topics",
      webpush: {
        notification: {
          icon: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
          badge: 'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
          vibrate: [200, 100, 200],
          actions: [
            { action: 'open', title: '📚 تعلم الآن' },
            { action: 'close', title: 'لاحقاً' }
          ]
        }
      }
    };

    console.log('📤 جاري إرسال الإشعار...');
    const response = await admin.messaging().send(message);
    console.log('✅ تم الإرسال:', JSON.stringify(response, null, 2));
    
  } catch (error) {
    console.error('❌ خطأ في الإرسال:', {
      message: error.message,
      code: error.code,
      details: error.details
    });
    process.exit(1);
  }
}

sendNotification();
