import { Module } from '@nestjs/common';
import { RviasaController } from './rviasa.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIASA_SERVICE } from 'src/config';

@Module({
  controllers: [RviasaController],
  providers: [],
  imports:[
    ClientsModule.register([
      { 
        name: RVIASA_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIASA_MicroserviceHost,
          port: envs.RVIASA_MicroservicePort
        }
      },
    ]),
  ]
})
export class RviasaModule {}
