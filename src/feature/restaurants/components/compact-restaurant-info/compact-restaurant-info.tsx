import React from "react";
import { Platform } from "react-native";

import * as S from "./compact-restaurant.style";
import { Restaurant } from "../../../../models/model";

interface CompactRestaurantInfoProps {
  restaurant: Restaurant;
  isMap?: boolean;
}

export const CompactRestaurantInfo = ({
  restaurant,
  isMap,
}: CompactRestaurantInfoProps) => {
  const isAndroid = Platform.OS === "android" && isMap;
  return (
    <S.Item>
      {isAndroid ? (
        <S.CompactWebview source={{ uri: restaurant.photos }} />
      ) : (
        <S.CompactImage
          source={{
            uri: restaurant.photos,
          }}
        />
      )}
      <S.TextTitle>{restaurant.name}</S.TextTitle>
    </S.Item>
  );
};

export default CompactRestaurantInfo;
