import {initializeApp} from 'firebase/app';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBn8JsEZKpZ6MHWJuBVFBGNzLB-dfhzDiI',
  authDomain: 'fir-e147b.firebaseapp.com',
  projectId: 'fir-e147b',
  storageBucket: 'fir-e147b.appspot.com',
  messagingSenderId: '869898158267',
  appId: '1:869898158267:web:4d94d61a3bf5b37086e99e',
  measurementId: 'G-TTL2DGXM4K',
};
const app = initializeApp(firebaseConfig);
initializeFirestore(app, {experimentalAutoDetectlongPolling: true});
export const db = getFirestore(app);
