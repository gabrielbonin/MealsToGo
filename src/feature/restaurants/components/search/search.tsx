import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import * as S from "./search.styles";
import { LocationsContext } from "../../../../services/locations/locations.context";

interface SearchComponentProps {
  isFavouritesToggled: boolean;
  onFavouritesToggle: () => void;
}

const SearchComponent = ({
  isFavouritesToggled,
  onFavouritesToggle,
}: SearchComponentProps) => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <S.SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
        value={searchQuery}
      />
    </S.SearchContainer>
  );
};

export default SearchComponent;
