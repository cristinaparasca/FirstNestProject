import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { User } from "./user.entity";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
import { ProductsService } from "src/products/products.service";
import { Product } from "src/products/product.entity";

@Module({
    imports:[TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Product])],
    controllers:[UserController],
    providers:[UserService,ProductsService]
})
export class UserModule{}