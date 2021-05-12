import { Controller, Post,Body, Get,Param, Put, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";
import {Product} from "./product.entity";
import { CreatedProductDto } from "./DTO/create.product.dto";
import { UpdateProductDto } from "./DTO/update.product.dto";
@Controller('products')
export class ProductsController{
    constructor(private readonly productsService:ProductsService){};
    @Post()
    create(@Body() product:CreatedProductDto){
        this.productsService.createProduct(product);
    }
    
    @Get()
    getAll(){
        return this.productsService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId:number){
        return this.productsService.getProduct(prodId)
    }
    @Put(':id')
    updateProduct(
        @Param('id') prodId:number,
        @Body() product:UpdateProductDto
    ){
        return this.productsService.updateProduct(prodId,product);
    }
    @Delete(':id')
    deleteProduct(
        @Param('id') prodId:number
    ){
        return this.productsService.delete(prodId);
    }
}