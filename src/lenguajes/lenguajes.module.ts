import { Module } from '@nestjs/common';
import { LenguajesController } from './lenguajes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, LENGUAJE_SERVICE } from 'src/config';

@Module({
  controllers: [LenguajesController],
  providers: [],
  imports:[
    ClientsModule.register([
      { 
        name: LENGUAJE_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.lenguajesMicroserviceHost,
          port: envs.lenguajesMicroservicePort
        }
      },
    ]),
  ]
})
export class LenguajesModule {}
