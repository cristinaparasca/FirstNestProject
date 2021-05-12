import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'
import { CreatedUserDto } from "./DTO/create.user.dto";
import { UpdatedUserDto } from "src/users/DTO/update.user.dto";
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private usersRepository:Repository<User>
    ){}
    async create(user:CreatedUserDto){
        const hashedPasword=await bcrypt.hash(user.password,10);
        user.password=hashedPasword;
        this.usersRepository.save(user);
    }
    async findAll():Promise<User[]>{
        return await this.usersRepository.find();
    }
    async findOne(id:number):Promise<User>{
        const user=await this.usersRepository.findOne(id)
        if(!user){
            throw new NotFoundException(`No user with id=${id}`);
        }
        return user;
    }
    async update(id:number,user:UpdatedUserDto){
        const exist=await this.usersRepository.findOne(id)
        if(!exist){
            throw new NotFoundException(`No user with id=${id}`);
        }
        await this.usersRepository.update(id,user);
        return {message:"User updated succesfully!"}
    }
    async delete(id:number){
        const exist=await this.usersRepository.findOne(id)
        if(!exist){
            throw new NotFoundException(`No user with id=${id}`);
        }
        await this.usersRepository.delete(id);
        return {message:"User deleted succesfully!"}
    }
}