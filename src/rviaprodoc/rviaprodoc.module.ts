import { Module } from '@nestjs/common';
import { RviaprodocController } from './rviaprodoc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIAPRODOC_SERVICE } from 'src/config';

@Module({
  controllers: [RviaprodocController],
  imports:[
    ClientsModule.register([
      { 
        name: RVIAPRODOC_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIAPRODOC_MicroserviceHost,
          port: envs.RVIAPRODOC_MicroservicePort
        }
      },
    ]),
  ]
})
export class RviaprodocModule {}
