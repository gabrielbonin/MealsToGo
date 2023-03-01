import { Searchbar } from "react-native-paper";
import React, { useState } from "react";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import * as S from "./restaurants.styles";
import { Spacer } from "../../components/typography/spacer-components";
import { SafeArea } from "../../components/util/safe-area";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const mockRestaurant = [
    {
      name: "Some random restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      address: "100 some random street",
      openingHours: true,
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some random restaurant 2",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",

      address: "100 some random street",
      openingHours: true,
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some random restaurant 3",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",

      address: "100 some random street",
      openingHours: true,
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some random restaurant 4",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",

      address: "100 some random street",
      openingHours: true,
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some random restaurant 5",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",

      address: "100 some random street",
      openingHours: true,
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
  ];
  return (
    <SafeArea>
      <S.SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </S.SearchContainer>

      <S.RestaurantsList
        data={mockRestaurant}
        renderItem={() => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={mockRestaurant} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
