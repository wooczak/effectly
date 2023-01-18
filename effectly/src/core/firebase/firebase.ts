import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDy9Ufx3skb3hYjAU7NoOJZjIuyfvb9ZFU',
  authDomain: 'effectly-frb.firebaseapp.com',
  projectId: 'effectly-frb',
  storageBucket: 'effectly-frb.appspot.com',
  messagingSenderId: '216387321584',
  appId: '1:216387321584:web:7ab5dbb5d2c0b58ecf4c35',
  measurementId: 'G-ZYEB5WGRYG',
}

const app = initializeApp(config)

export const auth = getAuth(app);
export const database = getFirestore(app)
