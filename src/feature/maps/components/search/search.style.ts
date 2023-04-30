import styled from "styled-components/native";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { space } from "../../../../infrastructure/theme/spacing";

export const SearchContainer = styled(View)`
  padding: ${space[3]};
  z-index: 999;
  position: absolute;
  width: 100%;
  elevation: 5;
  top: 25px;
  shadow-color: "#000";
  shadow-offset: 0px 0.5px;
  shadow-opacity: 0.8;
  shadow-radius: 1px;
`;

export const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
`;
