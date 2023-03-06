import { Searchbar } from "react-native-paper";
import React, { useContext, useState } from "react";
import { RestaurantInfo } from "../components/restaurant-info-card.component";
import * as S from "./restaurants.styles";
import { Spacer } from "../../components/typography/spacer-components";
import { SafeArea } from "../../components/util/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";

export const RestaurantScreen = () => {
  const { error, isLoading, restaurants } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");
  console.log("RESTAURANTES: ", restaurants);
  console.log("ERROR: ", error);
  return (
    <SafeArea>
      {isLoading && (
        <ActivityIndicator
          animating={true}
          color="#115881"
          size="large"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      )}
      <S.SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </S.SearchContainer>

      <S.RestaurantsList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
