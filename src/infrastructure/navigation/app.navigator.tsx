import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { getAuth } from "firebase/auth";

import { SafeArea } from "../../feature/components/util/safe-area";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { Map } from "../../feature/maps/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Button } from "react-native-paper";
import { FavoritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationsContextProvider } from "../../services/locations/locations.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }: any) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    headerShown: false,
    tabBarInactiveTintColor: "gray",
  };
};

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  const auth = getAuth();
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button onPress={() => onLogout(auth)}>Logout</Button>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationsContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationsContextProvider>
    </FavoritesContextProvider>
  );
};
