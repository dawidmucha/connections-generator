import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API,
  authDomain: "connections-generator.firebaseapp.com",
  projectId: "connections-generator",
  storageBucket: "connections-generator.appspot.com",
  messagingSenderId: "42394091091",
  appId: "1:42394091091:web:f3be51cef5359e3f42d0a6",
  measurementId: "G-5ZB768NMK0"
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export default db