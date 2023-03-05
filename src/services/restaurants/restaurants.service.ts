import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location?: string) => {
  location = location || "37.7749295,-122.4194155";
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
  console.log("mocks: ", mocks);
};

const restaurantsTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log("transformedResponse: ", transformedResponse);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
