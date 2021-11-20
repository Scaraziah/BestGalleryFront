import { initializeApp } from "firebase/app"
import { getStorage, ref } from "firebase/storage";



// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIA0pbhqibNqqlMWE9fYo9LFz2LyKCSPI",
  authDomain: "capstone-331701.firebaseapp.com",
  projectId: "capstone-331701",
  storageBucket: "capstone-331701.appspot.com",
  messagingSenderId: "708271532540",
  appId: "1:708271532540:web:b77b85e82874e8cf366a79",
  measurementId: "G-QGWFXKTCV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const storageRef = ref(storage);
// const imagesRef = ref(storage, 'images');
// const spaceRef = ref(storage, 'images/space.jpg');

const storage = getStorage(app);

  export { storage, app as default };