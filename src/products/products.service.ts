import { Injectable,NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { timeStamp } from "console";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreatedProductDto } from "./DTO/create.product.dto";
import { UpdateProductDto } from "./DTO/update.product.dto";
import {Product} from "./product.entity"
@Injectable()
export class ProductsService{
    constructor(
        @InjectRepository(Product)
        private productRepository:Repository<Product>
    ){}
    async createProduct(product :CreatedProductDto){
        this.productRepository.save(product);
    }
    async getProducts():Promise<Product[]>{
        return await this.productRepository.find();
    }
    async getProduct(id:number):Promise<Product>{
        const product=await this.productRepository.findOne(id);
        if(!product)
            throw new NotFoundException(`No product whith id=${id}!`);
        return product;
    }
    async updateProduct(id:number,product:UpdateProductDto){
        const updateResult=await this.productRepository.update(id,product);
        if(!updateResult.affected){
            throw new NotFoundException(`No product whith id=${id}!`)
        }
        return ({message:"Product updated succesfully"})
    }
    async delete(id:number){
        const deleteresult=await this.productRepository.delete(id);
        if(!deleteresult.affected){
            throw new NotFoundException(`No product whith id=${id}!`);
        }
        return ({message:"Product deleted succesfully"})
    }
    
}