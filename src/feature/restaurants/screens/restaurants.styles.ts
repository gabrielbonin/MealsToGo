import styled from "styled-components/native";
import { View, StatusBar, SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const SearchContainer = styled(View)`
  padding: 20px;
`;

export const ListContainer = styled(View)`
  padding: 20px;
  background-color: blue;
  flex: 1;
`;
