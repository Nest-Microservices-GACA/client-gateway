import { Module } from '@nestjs/common';
import { RviacpController } from './rviacp.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIACP_SERVICE } from '../config';

@Module({
  controllers: [RviacpController],
  providers: [],
  imports: [
    ClientsModule.register([
      { 
        name: RVIACP_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIACP_MicroserviceHost,
          port: envs.RVIACP_MicroservicePort
        }
      },

    ]),
  ]
})
export class RviacpModule {}
