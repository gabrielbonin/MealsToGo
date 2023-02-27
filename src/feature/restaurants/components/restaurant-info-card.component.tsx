import React from "react";
import * as S from "./restaurant-info-card.component.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../components/typography/text-component";
import { Spacer } from "../components/typography/spacer-components";
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
    openingHours = true,
    rating = 3,
    isClosedTemporarily = true,
    isOpenNow = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <S.Info>
        <Text variant="label">{name}</Text>
        <S.Section>
          <S.Rating>
            {ratingArray.map((_, i) => (
              <S.StarIcon key={i} xml={star} width={20} height={20} />
            ))}
          </S.Rating>
          <S.SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">TEMPORARILY CLOSED</Text>
            )}
            {isOpenNow && (
              <Spacer
                position="left"
                size="large"
                children={
                  <>
                    <S.OpenIcon xml={open} width={20} height={20} />
                  </>
                }
              />
            )}
            <Spacer
              position="left"
              size="large"
              children={
                <>
                  <S.Icon
                    source={{
                      uri: icon,
                    }}
                  />
                </>
              }
            />
          </S.SectionEnd>
        </S.Section>
        <S.Address>{address}</S.Address>
      </S.Info>
    </S.RestaurantCard>
  );
};
