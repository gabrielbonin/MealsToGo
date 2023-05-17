import React from "react";
import * as S from "./restaurant-info-card.component.styles";
import star from "../../../../../assets/star";
import open from "../../../../../assets/open";
import { Text } from "../../../components/typography/text-component";
import { Spacer } from "../../../components/typography/spacer-components";
import { Restaurant } from "../../../../services/restaurants/model";
import { FavoriteComponent } from "../../../favourites/favourites";
import { View } from "react-native";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo = (data: RestaurantInfoProps) => {
  const ratingArray = new Array(Math.floor(data.restaurant.rating ?? 2)).fill(
    0
  );

  return (
    <S.RestaurantCard elevation={5}>
      <FavoriteComponent restaurant={data.restaurant} />
      <View>
        <S.RestaurantCardCover
          key={data.restaurant.name}
          source={{
            uri: data.restaurant.photos,
          }}
        />
      </View>

      <S.Info>
        <Text variant="label">{data.restaurant.name}</Text>
        <S.Section>
          <S.Rating>
            {ratingArray.map((_, i) => (
              <S.StarIcon
                key={`star-${data.restaurant.place_id}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </S.Rating>
          <S.SectionEnd>
            {data.restaurant.isClosedTemporarily && (
              <Text variant="error">TEMPORARILY CLOSED</Text>
            )}
            {data.restaurant.isOpenNow && (
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
                      uri: data.restaurant.icon,
                    }}
                  />
                </>
              }
            />
          </S.SectionEnd>
        </S.Section>
        <S.Address>{data.restaurant.address}</S.Address>
      </S.Info>
    </S.RestaurantCard>
  );
};

export default RestaurantInfo;
