import { Module } from '@nestjs/common';
import { RviacalController } from './rviacal.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIACAL_SERVICE } from 'src/config';

@Module({
  controllers: [RviacalController],
  imports:[
    ClientsModule.register([
      { 
        name: RVIACAL_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIACAL_MicroserviceHost,
          port: envs.RVIACAL_MicroservicePort
        }
      },
    ]),
  ]
})
export class RviacalModule {}
