import{Column, Entity, PrimaryGeneratedColumn}from 'typeorm';
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