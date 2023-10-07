// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqwVv7QVsH6K-hx-doycT5PS4PDoixW8k",
    authDomain: "fir-20970.firebaseapp.com", 
    projectId: "fir-20970",
    storageBucket: "fir-20970.appspot.com",
    messagingSenderId: "78069576535",
    appId: "1:78069576535:web:50b053cef7decd74bf8412",
    measurementId: "G-49RE1TW4T9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);