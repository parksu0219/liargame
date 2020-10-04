import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/remote-config";

// firebaseConfig
const config = {
  apiKey: "AIzaSyBjZzldlYtV8HpdEgWH6-v-4tNxrcYbnK8",
  authDomain: "liar-game-85144.firebaseapp.com",
  databaseURL: "https://liar-game-85144.firebaseio.com",
  projectId: "liar-game-85144",
  storageBucket: "liar-game-85144.appspot.com",
  messagingSenderId: "847081075490",
  appId: "1:847081075490:web:959ea4ec6adb2aba8fab7b",
  measurementId: "G-F002Y7MVLP",
};

firebase.initializeApp(config);

export const remoteConfig = firebase.remoteConfig();

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000
};




// export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;
