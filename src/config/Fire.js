import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAR2f4dtSz9iuWaHz1MFGFSftw4f2mHaHo",
  authDomain: "fir-login-7ab6e.firebaseapp.com",
  databaseURL: "https://fir-login-7ab6e.firebaseio.com",
  projectId: "fir-login-7ab6e",
  storageBucket: "",
  messagingSenderId: "813962820161",
  appId: "1:813962820161:web:e1adfc94f8b311fbcc24c0",
  measurementId: "G-Y1CMYDE1T8"
};

const fire = firebase.initializeApp(config);
export default fire;