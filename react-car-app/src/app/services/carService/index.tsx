import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { GetCarsAsync_carsAsync } from "./__generated__/GEtCarsAsync";

class CarService {
    public async getCarsAsync(): Promise<GetCarsAsync_carsAsync[]> {
      const response = await apolloClient
        .query({ query: GET_ALL_CARS })
        .catch((err) => {
          throw err;
        });

        console.log("response", response);
  
      if (response && response.data && response.data.carsAsync)
        return response.data.carsAsync as GetCarsAsync_carsAsync[];
  
      return [];
    };
  }

export default new CarService();