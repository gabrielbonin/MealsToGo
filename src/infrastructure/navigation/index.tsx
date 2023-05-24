import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuth } = useContext(AuthenticationContext);
  console.log(isAuth);
  return (
    <NavigationContainer>
      {isAuth ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
