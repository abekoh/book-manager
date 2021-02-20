import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyArdRrm9eDG5KPzE0kvYPoJVWszT0YksRM',
  authDomain: 'book-manager-d71cb.firebaseapp.com',
  projectId: 'book-manager-d71cb',
  storageBucket: 'book-manager-d71cb.appspot.com',
  messagingSenderId: '378394387235',
  appId: '1:378394387235:web:3c458d408962b9d6d6e296',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
