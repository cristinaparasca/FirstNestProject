import { BaseEntity } from "src/base.entity";
import { Product } from "src/products/product.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity('users')
export class User extends BaseEntity{
    @Column({nullable:false})
    first_name:string;

    @Column({nullable:false})
    last_name:string;

    @Column({nullable:false})
    password:string;

    @Column({nullable:false})
    email:string;

    @Column({nullable:true})
    gender:string
    @ManyToMany(()=>Product,{onUpdate:'CASCADE',onDelete:'CASCADE'})
    @JoinTable()
    products:Product[];
}