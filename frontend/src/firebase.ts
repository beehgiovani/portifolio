import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNOGuuaatIGBPeoRhivf7b0Q20PVrae8g",
  authDomain: "portifolio-25cfa.firebaseapp.com",
  projectId: "portifolio-25cfa",
  storageBucket: "portifolio-25cfa.firebasestorage.app",
  messagingSenderId: "749806314241",
  appId: "1:749806314241:web:d78af500407f9a596f7100",
  measurementId: "G-VG3XJTNX62"
};

const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export default app;
