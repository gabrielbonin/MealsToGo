import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantScreen } from "../../feature/restaurants/screens/restaurants.screen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => {
          return <Text>Restaurant Detail</Text>;
        }}
      />
    </RestaurantStack.Navigator>
  );
};
