import styled from "styled-components/native";
import { View, StatusBar, SafeAreaView } from "react-native";

import { colors } from "../../../infrastructure/theme/colors";
import { space } from "../../../infrastructure/theme/spacing";

export const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled(View)`
  padding: ${space[3]};
`;

export const ListContainer = styled(View)`
  padding: ${space[4]};
  background-color: ${colors.bg.primary};
  flex: 1;
`;
