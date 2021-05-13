import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Product } from "src/products/product.entity";

export class CreatedUserDto{
    @IsString()
    @IsNotEmpty()
    first_name:string;

    @IsString()
    @IsNotEmpty()
    last_name:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsOptional()
    gender:string

    productsId:number[]
    products:Product[]

}
