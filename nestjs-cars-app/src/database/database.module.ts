import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
 
@Module({
    imports: [TypeOrmModule.forRoot()],
    exports: [TypeOrmModule]
})

export class DatabaseModule {
    constructor(coonnection: Connection) {
        if (coonnection.isConnected) {
            console.log("db success");
        }
    }
}