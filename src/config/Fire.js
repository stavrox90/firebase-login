import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBdWb6l1AC5jFKipbdz_cGp3JMfB20XIVs',
  authDomain: 'react-step-form-279ea.firebaseapp.com',
  databaseURL: 'https://react-step-form-279ea.firebaseio.com',
  projectId: 'react-step-form-279ea',
  storageBucket: '',
  messagingSenderId: '203921885995',
  appId: '1:203921885995:web:84d77c3c7f12cf428c936e',
  measurementId: 'G-M9R970T517',
};

const fire = firebase.initializeApp (config);
export default fire;
