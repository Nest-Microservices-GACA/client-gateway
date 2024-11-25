import { Module } from '@nestjs/common';
import { RviamiController } from './rviami.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIAMI_SERVICE } from 'src/config';

@Module({
  controllers: [RviamiController],
  providers: [],
  imports:[
    ClientsModule.register([
      { 
        name: RVIAMI_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RviaMicroserviceHost,
          port: envs.RviaMIMicroservicePort
        }
      },
    ]),
  ]
})
export class RviamiModule {}
