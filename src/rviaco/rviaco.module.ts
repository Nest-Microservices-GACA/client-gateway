import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RviacoController } from './rviaco.controller';
import { envs, NATS_SERVICE, RVIACO_SERVICE } from '../config';

@Module({
  controllers: [RviacoController],
  providers: [],
  imports: [
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
export class RviacoModule {}
