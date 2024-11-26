import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RviaacController } from './rviaac.controller';
import { envs } from '../config/envs';
import { NATS_SERVICE } from 'src/config';

// console.log(`Conectando a RVIAAC_SERVICE en ${envs.RVIAAC_MicroserviceHost}:${envs.RVIAAC_MicroservicePort}`);

@Module({
  controllers: [RviaacController],
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
  ],
})
export class RviaacModule {}
