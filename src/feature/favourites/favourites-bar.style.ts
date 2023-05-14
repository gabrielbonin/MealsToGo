import styled from "styled-components/native";
import { FlatList } from "react-native";

export const FavouritesWrapper = styled.View`
  padding: 10px;
  flex-direction: column;
`;

export const FavouriteWrapper = styled.View`
  flex-direction: row;
`;

export const FavouritesList = styled(FlatList).attrs({})``;
