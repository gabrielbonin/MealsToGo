import React, { useState, createContext, useEffect, useContext } from "react";
import { Restaurant } from "./model";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationsContext } from "../locations/locations.context";

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
  const { coordinate } = useContext(LocationsContext);

  const retrieveRestaurants = (loc: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
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
    if (coordinate) {
      const formattedLocation = `${coordinate.lat},${coordinate.lng}`;
      retrieveRestaurants(formattedLocation);
    }
  }, [coordinate]);

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
