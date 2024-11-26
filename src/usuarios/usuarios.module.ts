import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE, USUARIOS_SERVICE } from 'src/config';

@Module({
  controllers: [UsuariosController],
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
export class UsuariosModule {}
