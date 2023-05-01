import React, { createContext, useState } from "react";
import { Restaurant } from "../restaurants/model";

interface IFavoritesContext {
  favorites: Restaurant[] | [];
  addToFavorites: (restaurant: Restaurant) => void;
  removeFromFavorites: (restaurant: Restaurant) => void;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Restaurant[] | []>([]);

  const add = (restaurant: Restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: Restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.place_id !== restaurant.place_id
    );
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
