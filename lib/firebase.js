import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA-TWglohiZenuIDqVLZw_r6gBypiJPm9Y',
  authDomain: 'chatterbox-9c7e1.firebaseapp.com',
  databaseURL: 'https://chatterbox-9c7e1.firebaseio.com',
  storageBucket: 'chatterbox-9c7e1.appspot.com',
  messagingSenderId: '1084984042513',
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
