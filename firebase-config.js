// firebase-config.js
// Firebase projenizi oluşturduktan sonra bu değerleri doldurun
// Firebase Console: https://console.firebase.google.com
// Authentication > Sign-in method > Email/Password'u aktive edin
// Firestore Database oluşturun

const firebaseConfig = {
  apiKey: "AIzaSyCHgH-RXYfZJ1wvMjrpFezlM9COJ3UB8a0",
  authDomain: "yds-work-word.firebaseapp.com",
  databaseURL: "https://yds-work-word-default-rtdb.firebaseio.com",
  projectId: "yds-work-word",
  storageBucket: "yds-work-word.firebasestorage.app",
  messagingSenderId: "785988237719",
  appId: "1:785988237719:web:adb9169a3e9b022f506cd2"
};

// Bu satırları değiştirmeyiniz
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
