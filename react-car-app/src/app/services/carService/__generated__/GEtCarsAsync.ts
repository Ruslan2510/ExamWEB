/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCarsAsync
// ====================================================

export interface GetCarsAsync_carsAsync {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  thumbnailUrl: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export interface GetCarsAsync {
  carsAsync: GetCarsAsync_carsAsync[];
}
