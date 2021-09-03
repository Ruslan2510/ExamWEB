import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { NewCarInput } from "./dto/new-car.input";
import { Car } from "./entities/car";

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async carsAsync(): Promise<Car[]> {
    const result =  await this.carsService.getAllCarsAsync().catch((err) => {
      throw err;
    });
    return result;
  }

  @Mutation((returns) => Car)
  public async addNewCarAsync(
    @Args('newCarData') newCarData: NewCarInput): Promise<Car> {
        console.log(newCarData);
    return await this.carsService.addCarAsync(newCarData).catch((err) => {
      throw err;
    });
  }
}