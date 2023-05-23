import React from "react";

import * as S from "./map-callout.style";
import { Restaurant } from "../../../../models/model";
import { CompactRestaurantInfo } from "../../../restaurants/components/compact-restaurant-info/compact-restaurant-info";

interface MapCalloutProps {
  restaurant: Restaurant;
  onPress: () => void;
}

export const MapCalloutComponent = ({
  restaurant,
  onPress,
}: MapCalloutProps) => {
  return (
    <S.MapCalloutView onPress={onPress}>
      <CompactRestaurantInfo restaurant={restaurant} isMap />
    </S.MapCalloutView>
  );
};
