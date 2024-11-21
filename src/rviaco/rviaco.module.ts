import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RviacoController } from './rviaco.controller';
import { envs, RVIACO_SERVICE } from '../config';

@Module({
  controllers: [RviacoController],
  providers: [],
  imports: [
    ClientsModule.register([
      { 
        name: RVIACO_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIACO_MicroserviceHost,
          port: envs.RVIACO_MicroservicePort
        }
      },

    ]),
  ]
})
export class RviacoModule {}
