// assets/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnZGheBuw2S-dJUZ6f1jsx9e2ODv-gkX4",
    authDomain: "project-9ca8a.firebaseapp.com",
    projectId: "project-9ca8a",
    storageBucket: "project-9ca8a.firebasestorage.app",
    messagingSenderId: "1001751197267",
    appId: "1:1001751197267:web:d6c56c243d0f3d678f38a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };