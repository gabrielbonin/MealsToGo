import styled from "styled-components/native";
import { View, FlatList } from "react-native";

import { space } from "../../../infrastructure/theme/spacing";

export const SearchContainer = styled(View)`
  padding: ${space[3]};
`;

export const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
