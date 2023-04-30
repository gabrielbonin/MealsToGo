import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import * as S from "./search.style";
import { LocationsContext } from "../../../../services/locations/locations.context";

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <S.SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Search for a location"
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
