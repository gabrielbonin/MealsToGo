import React from "react";
import { Card } from "react-native-paper";
import * as S from "./restaurant-info-card.component.styles";
interface RestaurantInfoProps {
  restaurant: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    openingHours: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
}

export const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <S.Title>{name}</S.Title>
      </Card.Content>
    </S.RestaurantCard>
  );
};
