import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
import {User} from "./user.entity"
import { CreatedUserDto } from "./DTO/create.user.dto";
import { UpdatedUserDto } from "./DTO/update.user.dto";

@Controller('users')
export class UserController{
    constructor(private readonly userService:UserService){};
    @Post()
    create(@Body() user:CreatedUserDto){
        return this.userService.create(user);
    }
    @Get()
    findAll(){
        return this.userService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:number){
        return this.userService.findOne(id);
    }
    @Put(':id')
    update(
        @Param('id') id:number,
        @Body() user:UpdatedUserDto
    ){
        return this.userService.update(id,user);
    }
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.userService.delete(id);
    }
}