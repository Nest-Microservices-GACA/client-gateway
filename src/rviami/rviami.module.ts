import { Module } from '@nestjs/common';
import { RviamiController } from './rviami.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, RVIAMI_SERVICE } from 'src/config';

@Module({
  controllers: [RviamiController],
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
export class RviamiModule {}
