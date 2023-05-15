import React from "react";
import * as S from "./favourites-bar.style";
import CompactRestaurantInfo from "../restaurants/components/compact-restaurant-info/compact-restaurant-info";
import { Restaurant } from "../../services/restaurants/model";
import { Spacer } from "../components/typography/spacer-components";
import { Text } from "../components/typography/text-component";
import { TouchableOpacity } from "react-native";

interface FavouritesBarProps {
  favourites: Restaurant[];
  navigation: any;
}

export const FavouritesBar = ({
  favourites,
  navigation,
}: FavouritesBarProps) => {
  return (
    <S.FavouritesWrapper>
      <Spacer variant="left.large">
        {favourites && favourites.length ? (
          <Text variant="label">Favoritos</Text>
        ) : (
          <Text variant="label">Sem restaurantes favoritos aqui</Text>
        )}
      </Spacer>
      <S.FavouriteWrapper>
        <S.FavouritesList
          data={favourites}
          horizontal
          scrollEventThrottle={32}
          renderItem={({ item }: { item: Restaurant }) => (
            <Spacer position="left" size="large">
              <TouchableOpacity
                onPress={() => {
                  console.log(item);
                  navigation.navigate("RestaurantDetailScreen", {
                    restaurant: item,
                  });
                }}
              >
                <CompactRestaurantInfo restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          )}
        />
      </S.FavouriteWrapper>
    </S.FavouritesWrapper>
  );
};
