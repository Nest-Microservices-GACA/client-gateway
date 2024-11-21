import { Module } from '@nestjs/common';
import { RviaacController } from './rviaac.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, RVIAAC_SERVICE } from 'src/config';

@Module({
  controllers: [RviaacController],
  providers: [],
  imports:[
    ClientsModule.register([
      { 
        name: RVIAAC_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.RVIAAC_MicroserviceHost,
          port: envs.RVIAAC_MicroservicePort
        }
      },
    ]),
  ]
})
export class RviaacModule {}
