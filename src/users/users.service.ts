import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'
import { CreatedUserDto } from "./DTO/create.user.dto";
import { UpdatedUserDto } from "src/users/DTO/update.user.dto";
import { ProductsService } from "src/products/products.service";
import { Product } from "src/products/product.entity";
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>,
        private productsRepository:ProductsService
    ){}
    async create(user:CreatedUserDto){
        const hashedPasword=await bcrypt.hash(user.password,10);
    
        console.log(user);
        user.products=[];
        for(let i=0;i<user.productsId.length;i++)
            {
                let product=await this.productsRepository.getProduct(user.productsId[i]);
                console.log(product)
                user.products.push(product);
            }
        user.password=hashedPasword;
        this.usersRepository.save(user);
    }
    async findAll():Promise<User[]>{
        return await this.usersRepository.find();
    }
    async findOne(id:number):Promise<User>{
        const user=await this.usersRepository.findOne(id,{relations:['products']})
        if(!user){
            throw new NotFoundException(`No user with id=${id}`);
        }
        return user;
    }
    async update(id:number,user:UpdatedUserDto){
        console.log(user);
        const exist=await this.usersRepository.findOne(id)
        if(!exist){
            throw new NotFoundException(`No user with id=${id}`);
        }
        if(user.productsId){
            user.products=[];
            for(let i=0;i<user.productsId.length;i++)
            {
                let product=await this.productsRepository.getProduct(user.productsId[i]);
                user.products.push(product);
            }
        }
        delete user.productsId;
        await this.usersRepository.update(id,user);
        return {message:"User updated succesfully!"}
    }
    async delete(id:number){
        const deleteResult=await this.usersRepository.delete(id);
        if(!deleteResult.affected){
            throw new NotFoundException(`No user with id=${id}`);
        }
        return {message:"User deleted succesfully!"}
    }
}