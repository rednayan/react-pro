import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import { getFirestore } from '@firebase/firestore'
import {getStorage} from 'firebase/storage'

const app = firebase.initializeApp({
    // apiKey: "AIzaSyBucfyRHQwhxk5yUS1YPf6QcOapENeSiHc",
    // authDomain: "auth-dev-2497c.firebaseapp.com",
    // projectId: "auth-dev-2497c",
    // storageBucket: "auth-dev-2497c.appspot.com",
    // messagingSenderId: "631296540059",
    // appId: "1:631296540059:web:f842e7f95d38188f97753e"
    apiKey: "AIzaSyBEH_5COEZcYBv7ZUYxDezzQhqN_MT9umM",
    authDomain: "react-pro-5ba36.firebaseapp.com",
    projectId: "react-pro-5ba36",
    storageBucket: "react-pro-5ba36.appspot.com",
    messagingSenderId: "1069344052828",
    appId: "1:1069344052828:web:16786f9acb70b6d1177899"
})

export const auth = app.auth();
export const db = getFirestore(app); 
export const storage = getStorage(app);
export default app;