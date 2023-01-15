import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState } from "react";
import { RestaurantInfo } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const mockRestaurant = {
    name: "Some random restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    ],
    address: "100 some random street",
    openingHours: true,
    rating: 4,
    isClosedTemporarily: true,
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo restaurant={mockRestaurant} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 20,
  },
  list: {
    padding: 20,
    backgroundColor: "blue",
    flex: 1,
  },
});
