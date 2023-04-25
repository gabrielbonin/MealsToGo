import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, View, Image } from "react-native";
import { SvgXml } from "react-native-svg";

import { space } from "../../../../infrastructure/theme/spacing";
import { fonts, fontSizes } from "../../../../infrastructure/theme/fonts";

export const Title = styled(Text)`
  font-size: ${fontSizes.body};
  font-family: ${fonts.heading};
`;

export const Address = styled(Text)`
  font-size: ${fontSizes.caption};
  font-family: ${fonts.body};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)``;

export const StarIcon = styled(SvgXml)`
  margin-right: ${space[2]};
`;

export const OpenIcon = styled(SvgXml)`
  flex-direction: row;
`;

export const Info = styled(View)`
  padding: ${space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-vertical: ${space[2]};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
