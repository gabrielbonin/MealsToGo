import React, { useState } from "react";
import { List } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info-card/restaurant-info-card.component";
import { SafeArea } from "../../components/util/safe-area";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setStateBreakfastExpanded] = useState(false);
  const [lunchExpanded, setStateLunchExpanded] = useState(false);
  const [dinnerExpanded, setStateDinnerExpanded] = useState(false);
  const [drinksExpanded, setStateDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => {
            setStateBreakfastExpanded(!breakfastExpanded);
          }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => {
            setStateLunchExpanded(!lunchExpanded);
          }}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => {
            setStateDinnerExpanded(!dinnerExpanded);
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => {
            setStateDrinksExpanded(!drinksExpanded);
          }}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
