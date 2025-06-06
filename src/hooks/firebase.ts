import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Firebase 설정 객체
const firebaseConfig = {
  apiKey: "AIzaSyAUkPYW13RX9yybkxjmz1t51YxG66u-210",
  authDomain: "family-budget-tracker-95d5e.firebaseapp.com",
  projectId: "family-budget-tracker-95d5e",
  storageBucket: "family-budget-tracker-95d5e.firebasestorage.app",
  messagingSenderId: "1000473516966",
  appId: "1:1000473516966:web:aee768d61b9500cb084d67"
}

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig)

// Firestore 데이터베이스 가져오기
export const db = getFirestore(app)

// Authentication 가져오기
export const auth = getAuth(app)

export default app