import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE, envs } from 'src/config';
// import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [AuthController],
  imports:[
    ClientsModule.register([
      { 
        name: AUTH_SERVICE, 
        transport: Transport.TCP,
        options: {
          host: envs.AuthMicroserviceHost,
          port: envs.AuthMicroservicePort
        }
      },
    ]),
  ]
})
export class AuthModule {}