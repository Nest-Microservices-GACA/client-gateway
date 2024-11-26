import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, envs, NATS_SERVICE } from 'src/config';
// import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [AuthController],
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
export class AuthModule {}