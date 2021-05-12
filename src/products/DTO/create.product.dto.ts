import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatedProductDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    description:string;

    @IsNotEmpty()
    @IsNumber()
    price:number;
}