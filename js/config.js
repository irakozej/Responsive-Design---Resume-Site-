// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEXIafdSSrXyX3vNrka_9GAKBw9Qm8mvM",
  authDomain: "capstone-project-95d79.firebaseapp.com",
  projectId: "capstone-project-95d79",
  storageBucket: "capstone-project-95d79.appspot.com",
  messagingSenderId: "642731536809",
  appId: "1:642731536809:web:438e035013628b1db614b8",
  measurementId: "G-87Z56SQESL",
};

/* Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
