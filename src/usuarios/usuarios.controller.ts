import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { USUARIOS_SERVICE } from 'src/config';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    @Inject(USUARIOS_SERVICE) private readonly usuariosClient: ClientProxy,
  ) {}

  @Post()
  createUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    console.log('Enviando mensaje create_users_application:', createUsuarioDto);
    return this.usuariosClient.send('create_users_application', createUsuarioDto).pipe(
      catchError((err) => {
        console.error('Error al enviar mensaje create_users_application:', err);
        throw new RpcException(err);
      }),
    );
  }  

  @Get()
  findAllUsuarios() {
    return this.usuariosClient.send('get_all_users_applications', {}).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get(':id')
  findOneUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosClient.send('get_users_application', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Patch(':id')
  updateUsuario(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosClient.send('update_users_application', { id, updateDto: updateUsuarioDto }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Delete(':id')
  deleteUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosClient.send('delete_users_application', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('user/:id/role')
  findUsuarioWithRole(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosClient.send('get_user_with_role', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('role/:id/users')
  findRoleWithUsuarios(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosClient.send('get_role_with_users', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }
}
