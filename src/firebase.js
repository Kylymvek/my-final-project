import firebase from "firebase/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAQWbQsaKr-hNhz4j8vBgNziP3PkE5Eqy0",
  authDomain: "final-project-kylym.firebaseapp.com",
  projectId: "final-project-kylym",
  storageBucket: "final-project-kylym.appspot.com",
  messagingSenderId: "516606361797",
  appId: "1:516606361797:web:41937dc809618ab42e70ac",
});

export default app;
