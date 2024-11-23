import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RviaacController } from './rviaac.controller';
import { envs } from '../config/envs';

console.log(`Conectando a RVIAAC_SERVICE en ${envs.RVIAAC_MicroserviceHost}:${envs.RVIAAC_MicroservicePort}`);

@Module({
  controllers: [RviaacController],
  imports: [
    ClientsModule.register([
      {
        name: 'RVIAAC_SERVICE',
        transport: Transport.TCP,
        options: {
          host: envs.RVIAAC_MicroserviceHost, 
          port: envs.RVIAAC_MicroservicePort,
        },
      },
    ]),
  ],
})
export class RviaacModule {}
