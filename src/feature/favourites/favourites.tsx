import React, { useContext } from "react";
import * as S from "./favourites.style";

import { FavoritesContext } from "../../services/favourites/favourites.context";
import { Restaurant } from "../../services/restaurants/model";

interface FavoriteProps {
  restaurant: Restaurant;
}

export const FavoriteComponent = ({ restaurant }: FavoriteProps) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find((r) => r.place_id === restaurant.place_id);
  return (
    <S.FavoriteButton
      onPress={() => {
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant);
      }}
    >
      <S.FavoriteIcon
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </S.FavoriteButton>
  );
};
