import { Module } from '@nestjs/common';
import { RviacpController } from './rviacp.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, RVIACP_SERVICE } from '../config';

@Module({
  controllers: [RviacpController],
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
export class RviacpModule {}
