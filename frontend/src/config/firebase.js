import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB1trGWh7ePT6-wWR1ROJWR2Pbd0ve3D3k',
  authDomain: 'hatap-7d3d3.firebaseapp.com',
  databaseURL: 'https://hatap-7d3d3.firebaseio.com',
  projectId: 'hatap-7d3d3',
  storageBucket: 'hatap-7d3d3.appspot.com',
  messagingSenderId: '182132082009',
  appId: '1:182132082009:web:c556574ccecc074565f848',
  measurementId: 'G-89XNWZZFVZ',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
