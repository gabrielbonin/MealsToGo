import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
} from "firebase/auth";

export const loginRequest = async (
  auth: Auth,
  email: string,
  password: string
) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = async (
  auth: Auth,
  email: string,
  password: string
) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
