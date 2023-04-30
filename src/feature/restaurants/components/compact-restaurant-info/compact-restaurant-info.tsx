import React from "react";

import * as S from "./compact-restaurant.style";
import { Restaurant } from "../../../../services/restaurants/model";

interface CompactRestaurantInfoProps {
  restaurant: Restaurant;
}

export const CompactRestaurantInfo = ({
  restaurant,
}: CompactRestaurantInfoProps) => {
  return (
    <S.Item>
      <S.CompactImage
        source={{
          uri: restaurant.photos,
        }}
      />
      <S.TextTitle>{restaurant.name}</S.TextTitle>
    </S.Item>
  );
};

export default CompactRestaurantInfo;
