import { Searchbar } from "react-native-paper";
import React, { useState } from "react";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import * as S from "./restaurants.styles";

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
    <S.Container>
      <S.SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </S.SearchContainer>
      <S.ListContainer>
        <RestaurantInfo restaurant={mockRestaurant} />
      </S.ListContainer>
    </S.Container>
  );
};
