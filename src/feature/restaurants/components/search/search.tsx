import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";

import * as S from "./search.styles";
import { LocationsContext } from "../../../../services/locations/locations.context";

const SearchComponent = () => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  return (
    <S.SearchContainer>
      <Searchbar
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
