import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqXcAmCgTguUW4uI4xClp65fMSzV0WdMU",
  authDomain: "netflix-clone-2f5cd.firebaseapp.com",
  projectId: "netflix-clone-2f5cd",
  storageBucket: "netflix-clone-2f5cd.firebasestorage.app",
  messagingSenderId: "139288872725",
  appId: "1:139288872725:web:0e692ee4c6d1a9b16d4b1c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;