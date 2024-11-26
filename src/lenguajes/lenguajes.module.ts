import { Module } from '@nestjs/common';
import { LenguajesController } from './lenguajes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, LENGUAJE_SERVICE, NATS_SERVICE } from 'src/config';

@Module({
  controllers: [LenguajesController],
  providers: [],
  imports:[
    ClientsModule.register([
      { 
        name: NATS_SERVICE, 
        transport: Transport.NATS,
        options: {
          servers:envs.natsServes
        }
      },
    ]),
  ]
})
export class LenguajesModule {}
