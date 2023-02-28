import styled from "styled-components/native";
import { View, StatusBar, SafeAreaView, FlatList } from "react-native";

import { space } from "../../../infrastructure/theme/spacing";

export const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled(View)`
  padding: ${space[3]};
`;

export const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
