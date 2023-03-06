import React from "react";
import * as S from "./restaurant-info-card.component.styles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../components/typography/text-component";
import { Spacer } from "../../components/typography/spacer-components";
import { Restaurant } from "../../../services/restaurants/model";

export const RestaurantInfo = ({
  business_status,
  geometry,
  icon,
  name,
  opening_hours,
  photos,
  place_id,
  plus_code,
  price_level,
  rating,
  reference,
  scope,
  types,
  user_ratings_total,
  vicinity,
}: Restaurant) => {
  // const ratingArray = Array.from(new Array(Math.floor(rating)));
  const ratingArray = [0, 0, 0, 0, 0];

  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover
        key={name}
        source={{
          uri: photos,
        }}
      />
      <S.Info>
        <Text variant="label">{name}</Text>
        <S.Section>
          <S.Rating>
            {ratingArray.map((_, i) => (
              <S.StarIcon key={i} xml={star} width={20} height={20} />
            ))}
          </S.Rating>
          <S.SectionEnd>
            {business_status && <Text variant="error">TEMPORARILY CLOSED</Text>}
            {opening_hours && (
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
        <S.Address>{"address"}</S.Address>
      </S.Info>
    </S.RestaurantCard>
  );
};
