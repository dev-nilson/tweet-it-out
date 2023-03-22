import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "dev-nilson-tweet-it-out.firebaseapp.com",
  projectId: "dev-nilson-tweet-it-out",
  storageBucket: "dev-nilson-tweet-it-out.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
