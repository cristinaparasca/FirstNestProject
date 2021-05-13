import { User } from 'src/users/user.entity';
import{Column, Entity, PrimaryGeneratedColumn,ManyToOne, ManyToMany, JoinTable}from 'typeorm';
import{BaseEntity}from '../base.entity'
@Entity('products')
export class Product extends BaseEntity{
    @Column({nullable:false})
    title:string;
    @Column({nullable:false})
    description:string;
    @Column({nullable:false})
    price:number;
}