import React, { createContext, useState, useEffect } from "react";
import { Restaurant } from "../restaurants/model";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const saveFavorites = async (value: Restaurant[] | []) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const getFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error reading", e);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

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
