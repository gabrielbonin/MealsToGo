import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { Map } from "../../feature/maps/screens/map.screen";

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

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationsContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationsContextProvider>
    </FavoritesContextProvider>
  );
};
