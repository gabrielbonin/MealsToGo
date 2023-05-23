import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email: string, password: string) => {
  signInWithEmailAndPassword(getAuth(), email, password);
};
