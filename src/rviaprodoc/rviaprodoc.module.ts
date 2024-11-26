import { Module } from '@nestjs/common';
import { RviaprodocController } from './rviaprodoc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, RVIAPRODOC_SERVICE } from 'src/config';

@Module({
  controllers: [RviaprodocController],
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
export class RviaprodocModule {}
