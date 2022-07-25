import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import { getFirestore } from '@firebase/firestore'
import {getStorage} from 'firebase/storage'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
})

export const auth       = app.auth();
export const db         = getFirestore(app); 
export const storage    = getStorage(app);
export default app;