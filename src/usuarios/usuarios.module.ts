import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, USUARIOS_SERVICE } from 'src/config';

@Module({
  controllers: [UsuariosController],
  imports: [
    ClientsModule.register([
      {
        name: USUARIOS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.usuariosMicroserviceHost,
          port: envs.usuariosMicroservicePort, 
        },
      },
    ]),
  ],
})
export class UsuariosModule {}
