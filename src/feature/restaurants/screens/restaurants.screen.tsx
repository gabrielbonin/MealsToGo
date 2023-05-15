import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import RestaurantInfo from "../components/restaurant-info-card/restaurant-info-card.component";
import * as S from "./restaurants.styles";
import { Spacer } from "../../components/typography/spacer-components";
import { SafeArea } from "../../components/util/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favourites/favourites.context";
import { colors } from "../../../infrastructure/theme/colors";
import SearchComponent from "../components/search/search";
import { FavouritesBar } from "../../favourites/favourites-bar";

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [toggle, setToggle] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <S.Loading animating={true} color={colors.brand.primary} size="large" />
      )}
      <SearchComponent
        isFavouritesToggled={toggle}
        onFavouritesToggle={() => {
          setToggle(!toggle);
        }}
      />
      {toggle && (
        <FavouritesBar favourites={favorites} navigation={navigation} />
      )}
      <S.RestaurantsList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetailScreen", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
