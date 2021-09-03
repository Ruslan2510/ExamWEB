import gql from "graphql-tag";

export const GET_ALL_CARS = gql`
    query GetCarsAsync {
        carsAsync {
            id
            name
            mileage
            gearType
            gas
            thumbnailUrl
            dailyPrice
            monthlyPrice
        }
    }
`;