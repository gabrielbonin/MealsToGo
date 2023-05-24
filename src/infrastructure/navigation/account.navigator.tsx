import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../feature/account/screens/account.screen";
import { LoginScreen } from "../../feature/account/screens/login.screen";
import { RegisterScreen } from "../../feature/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={AccountScreen}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: false,
        }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
