import { Field, InputType, Int } from "@nestjs/graphql";
import { Min } from "class-validator";

@InputType()
export class NewCarInput {

    @Field()
    name: string;

    @Field(type => Int)
    @Min(1) 
    dailyPrice: number;

    @Field(type => Int)
    @Min(1)
    monthlyPrice: number;

    @Field()
    mileage: string;

    @Field()
    gas: string;

    @Field()
    gearType: string;

    @Field()
    thumbnailUrl: string
}