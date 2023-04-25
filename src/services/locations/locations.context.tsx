import React, { createContext, useState } from "react";

import { locationRequest, locationTransform } from "./locations.service";
import { Coordinate } from "../restaurants/model";

interface LocationContextProps {
  location: Coordinate | null;
  isLoading: boolean;
  keyword: string;
  error: any | null;
  search: (searchKeyword: string) => void;
}

export const LocationsContext = createContext<LocationContextProps>({
  location: null,
  keyword: "",
  isLoading: false,
  error: null,
  search: () => {},
});

export const LocationsContextProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState("antwerp");
  const [location, setLocation] = useState<Coordinate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (!searchKeyword.length) {
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationsContext.Provider
      value={{
        location,
        keyword,
        isLoading,
        error,
        search: onSearch,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
