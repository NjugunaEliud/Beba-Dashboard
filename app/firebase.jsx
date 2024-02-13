// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBxsMZTM-m_OXM99KH7BijpUfjufRAmYk0",
//   authDomain: "storage-79d9d.firebaseapp.com",
//   projectId: "storage-79d9d",
//   storageBucket: "storage-79d9d.appspot.com",
//   messagingSenderId: "170377959421",
//   appId: "1:170377959421:web:13eb0a7b75be877c89ab94",
//   measurementId: "G-54XF8TZSFX",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBMlM0WSfGNys0p7h-u-dz8GnNYCRqy8kQ",
  authDomain: "bidleo-398811.firebaseapp.com",
  projectId: "bidleo-398811",
  storageBucket: "bidleo-398811.appspot.com",
  messagingSenderId: "817959669152",
  appId: "1:817959669152:web:aef26d83e9eed7884e28c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
