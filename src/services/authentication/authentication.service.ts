import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  onAuthStateChanged,
} from "firebase/auth";

export const loginRequest = async (
  auth: Auth,
  email: string,
  password: string
) => {
  await signInWithEmailAndPassword(auth, email, password);
  console.log("auth: ", auth);
};

export const registerRequest = async (
  auth: Auth,
  email: string,
  password: string
) => {
  await createUserWithEmailAndPassword(auth, email, password);
};


