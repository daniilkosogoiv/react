import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCyx-Q4ep0SpiFmToIMne2c-fXawVYfBbY",
    authDomain: "react-js-4954a.firebaseapp.com",
    databaseURL: "https://react-js-4954a-default-rtdb.firebaseio.com",
    projectId: "react-js-4954a",
    storageBucket: "react-js-4954a.appspot.com",
    messagingSenderId: "578800459041",
    appId: "1:578800459041:web:6423900b31568955c8f260"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);