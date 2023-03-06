import React, { useState, createContext, useEffect, useMemo } from "react";
import { Restaurant } from "./model";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

interface RestaurantsContextProps {
  restaurants: Restaurant[] | [];
  isLoading: boolean;
  error: any | null;
}

export const RestaurantsContext = createContext<RestaurantsContextProps>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: any) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
