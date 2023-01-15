import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";
interface RestaurantInfoProps {
  restaurant: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    openingHours: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
}

export const RestaurantInfo = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
