import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";

import { space } from "../../../infrastructure/theme/spacing";
import { fonts, fontSizes } from "../../../infrastructure/theme/fonts";

export const Title = styled(Text)`
  font-size: ${fontSizes.body};
  font-family: ${fonts.heading};
`;

export const Address = styled(Text)`
  font-size: ${fontSizes.caption};
  font-family: ${fonts.body};
`;

export const RestaurantCard = styled(Card)``;

export const RestaurantCardCover = styled(Card.Cover)``;

export const Info = styled(View)`
  padding: ${space[3]};
`;
