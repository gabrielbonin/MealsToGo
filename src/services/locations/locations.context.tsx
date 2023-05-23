import React, { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./locations.service";
import { Coordinate, Viewport, Location } from "../../models/model";

interface LocationContextProps {
  coordinate?: Coordinate | null;
  viewport?: Viewport | null;
  location: Location | null;
  isLoading: boolean;
  keyword: string;
  error: any | null;
  search: (searchKeyword: string) => void;
}

export const LocationsContext = createContext<LocationContextProps>({
  coordinate: null,
  location: null,
  viewport: null,
  keyword: "",
  isLoading: false,
  error: null,
  search: () => {},
});

export const LocationsContextProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState("antwerp");
  const [data, setData] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setData(result.formattedResponse);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationsContext.Provider
      value={{
        coordinate: data?.result.geometry.location,
        viewport: data?.result.geometry.viewport,
        location: data,
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
