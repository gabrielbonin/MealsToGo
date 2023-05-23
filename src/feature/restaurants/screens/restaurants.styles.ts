import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { space } from "../../../infrastructure/theme/spacing";
import { Restaurant } from "../../../models/model";

export const SearchContainer = styled(View)`
  padding: ${space[3]};
`;

export const RestaurantsList = styled(FlatList<Restaurant>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;
