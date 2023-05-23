import { locations } from "./locations";
import { Location } from "../../models/model";

export const locationRequest = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: Location) => {
  const formattedResponse = result;

  return { formattedResponse };
};
