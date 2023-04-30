import React, { useEffect, useState } from "react";

import Search from "../components/search/search";
import { LocationsContext } from "../../../services/locations/locations.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import * as S from "./map.screen.style";
import { MapCalloutComponent } from "../components/map-callout/map-callout";
import { MapCallout } from "react-native-maps";
import CompactRestaurantInfo from "../../restaurants/components/compact-restaurant-info/compact-restaurant-info";

export const Map = () => {
  const [latDelta, setLatDelta] = useState(0);
  const { coordinate, viewport } = React.useContext(LocationsContext);
  const { restaurants } = React.useContext(RestaurantsContext);
  useEffect(() => {
    const northeastLat = viewport?.northeast.lat;
    const southwestLat = viewport?.southwest.lat;
    if (northeastLat && southwestLat) {
      setLatDelta(northeastLat - southwestLat);
    }
  }, [viewport]);

  return (
    <>
      <Search />
      <S.Map
        region={{
          latitude: coordinate?.lat ?? 0,
          longitude: coordinate?.lng ?? 0,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <>
              <S.MarkerPoint
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <MapCalloutComponent
                  key={restaurant.name}
                  restaurant={restaurant}
                />
              </S.MarkerPoint>
            </>
          );
        })}
      </S.Map>
    </>
  );
};
