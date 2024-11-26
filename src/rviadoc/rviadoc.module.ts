import { Module } from '@nestjs/common';
import { RviadocController } from './rviadoc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, RVIADOC_SERVICE } from 'src/config';

@Module({
  controllers: [RviadocController],
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
export class RviadocModule {}
