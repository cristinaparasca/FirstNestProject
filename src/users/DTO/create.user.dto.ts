import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
}
