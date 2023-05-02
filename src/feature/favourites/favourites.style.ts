import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 9;
  width: 50px;
  height: 50px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const FavoriteIcon = styled(AntDesign)``;
