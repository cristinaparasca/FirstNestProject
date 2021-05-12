import {TypeOrmModuleOptions} from '@nestjs/typeorm'
export const config:TypeOrmModuleOptions={
    type:'postgres',
    username:'postgres',
    password:'123456',
    port:5432,
    host:'localhost',
    database:'storemanagement',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}']

}