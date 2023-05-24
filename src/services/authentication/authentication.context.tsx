import React, { createContext, useState } from "react";

import {
  loginRequest,
  registerRequest,
} from "../authentication/authentication.service";

import { Auth } from "firebase/auth";

interface AuthenticationContextProps {
  user: any | null;
  isAuth: boolean;
  error: string | null;
  isLoading: boolean;
  onLogin: (auth: Auth, email: string, password: string) => void;
  onRegister: (
    auth: Auth,
    email: string,
    password: string,
    repeatPassword: string
  ) => void;
  onLogout: (auth: Auth) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextProps>({
  user: null,
  isAuth: false,
  error: null,
  isLoading: false,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
});

export const AuthenticationContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);

  const onLogin = async (auth: Auth, email: string, password: string) => {
    setIsLoading(true);
    try {
      await loginRequest(auth, email, password);
      const responseUser = auth.currentUser;
      setUser(responseUser);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.toString());
    }
  };

  const onRegister = async (
    auth: Auth,
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Passwords don't match");
      setIsLoading(false);
      return;
    }

    try {
      await registerRequest(auth, email, password);
      const responseUser = auth.currentUser;
      setUser(responseUser);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.toString());
    }
  };

  const onLogout = async (auth: Auth) => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {}
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuth: !!user,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
