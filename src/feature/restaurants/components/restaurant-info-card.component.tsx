import React from "react";
import * as S from "./restaurant-info-card.component.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "react-native";
interface RestaurantInfoProps {
  restaurant: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    openingHours: boolean;
    rating: number;
    isClosedTemporarily: boolean;
    isOpenNow: boolean;
  };
}

export const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating = 3,
    isClosedTemporarily = true,
    isOpenNow = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <S.Info>
        <S.Title>{name}</S.Title>
        <S.Section>
          <S.Rating>
            {ratingArray.map((_, i) => (
              <S.StarIcon key={i} xml={star} width={20} height={20} />
            ))}
          </S.Rating>
          <S.SectionEnd>
            {isClosedTemporarily && <Text>Temporarily Closed</Text>}
            {isOpenNow && <S.OpenIcon xml={open} width={20} height={20} />}
          </S.SectionEnd>
        </S.Section>
        <S.Address>{address}</S.Address>
      </S.Info>
    </S.RestaurantCard>
  );
};
