import React, { createContext, useState } from "react";

import { loginRequest } from "../authentication/authentication.service";

import { Login } from "../../models/model";

interface AuthenticationContextProps {
  user: any | null;
  isAuth: boolean;
  error: any;
  isLoading: boolean;
  onLogin: (login: Login) => void;
}

export const AuthenticationContext = createContext<AuthenticationContextProps>({
  user: null,
  isAuth: false,
  error: null,
  isLoading: false,
  onLogin: () => {},
});

export const AuthenticationContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const onLogin = (login: Login) => {
    setIsLoading(true);
    loginRequest(login.email, login.password)
      .then((response: any) => {
        setIsLoading(false);
        setUser(response);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuth: !!user,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
