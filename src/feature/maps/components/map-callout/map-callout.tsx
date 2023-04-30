import React from "react";

import * as S from "./map-callout.style";
import { Restaurant } from "../../../../services/restaurants/model";
import { CompactRestaurantInfo } from "../../../restaurants/components/compact-restaurant-info/compact-restaurant-info";

interface MapCalloutProps {
  restaurant: Restaurant;
}

export const MapCalloutComponent = ({ restaurant }: MapCalloutProps) => {
  return (
    <S.MapCalloutView>
      <CompactRestaurantInfo restaurant={restaurant} />
    </S.MapCalloutView>
  );
};
