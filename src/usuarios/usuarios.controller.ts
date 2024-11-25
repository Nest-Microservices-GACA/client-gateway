import { Body, Controller, Delete, Get, Param, Patch, ParseIntPipe } from '@nestjs/common';
import { catchError } from 'rxjs';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { USUARIOS_SERVICE } from 'src/config';

@Controller('usuarios')
export class UsuariosController {
  constructor(@Inject(USUARIOS_SERVICE) private readonly usuariosClient: ClientProxy) {}

  @Patch(':id')
  async updateUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosClient
      .send('update_users_application', { id, updateDto: updateUsuarioDto })
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Get()
  async findAllUsuarios() {
    return this.usuariosClient.send('get_all_users_applications', {}).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get(':id')
  async findOneUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosClient.send('get_users_application', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }
}
