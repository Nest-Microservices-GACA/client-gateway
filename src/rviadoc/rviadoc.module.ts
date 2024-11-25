import { Module } from '@nestjs/common';
import { RviadocController } from './rviadoc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIADOC_SERVICE } from 'src/config';

@Module({
  controllers: [RviadocController],
  imports:[
    ClientsModule.register([
      { 
        name: RVIADOC_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIADOC_MicroserviceHost,
          port: envs.RVIADOC_MicroservicePort
        }
      },
    ]),
  ]
})
export class RviadocModule {}
