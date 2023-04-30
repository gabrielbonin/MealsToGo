import { mockImages, mocks } from "./mock";
import camelize from "camelize-ts";
import { Restaurant } from "./model";

export const restaurantsRequest = (location: string) => {
  location = location ? location : "37.7749295,-122.4194155";
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = (data: any) => {
  const mappedResults = data.results.map((restaurant: Restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      photos: mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return mappedResults;
};
