import { Module } from '@nestjs/common';
import { RviacalController } from './rviacal.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, RVIACAL_SERVICE } from 'src/config';

@Module({
  controllers: [RviacalController],
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
export class RviacalModule {}
