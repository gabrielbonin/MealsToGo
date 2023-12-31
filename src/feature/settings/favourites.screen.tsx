import React, { useContext } from "react";
import * as S from "./favourites.styles";
import RestaurantInfoCard from "../restaurants/components/restaurant-info-card/restaurant-info-card.component";
import { Restaurant } from "../../models/model";
import { Spacer } from "../components/typography/spacer-components";

import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../services/favourites/favourites.context";

export const FavouritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <S.FavouritesWrapper>
      <S.FavouriteWrapper>
        <S.FavouritesList
          data={favorites}
          scrollEventThrottle={32}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: { item: Restaurant }) => (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetailScreen", {
                    restaurant: item,
                  });
                }}
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          )}
        />
      </S.FavouriteWrapper>
    </S.FavouritesWrapper>
  );
};
