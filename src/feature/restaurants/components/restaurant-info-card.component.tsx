import React from "react";
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
      <S.Info>
        <S.Title>{name}</S.Title>
        <S.Address>{address}</S.Address>
      </S.Info>
    </S.RestaurantCard>
  );
};
