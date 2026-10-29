import { Module, Controller, Get } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
@Controller("salud")
class SaludController { @Get() get(){return {estado:"ok",entorno:"local"};} }
@Module({
 imports:[TypeOrmModule.forRoot({type:"postgres",host:"localhost",port:5432,username:"postgres",password:"TU_CLAVE_LOCAL",database:"control_databridge",autoLoadEntities:true,synchronize:true})],
 controllers:[SaludController],
})
export class AppModule {}
