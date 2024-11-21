import { Controller, Get, Post, Body, Param, Delete, Inject, Put, ParseIntPipe } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

import { RVIACO_SERVICE } from '../config';
import { CreateRviacoDto, UpdateRviacoDto } from './dto';

@Controller('rviaco')
export class RviacoController {
  constructor(
    @Inject(RVIACO_SERVICE) private readonly rviacoClient: ClientProxy,
  ) {}

  @Get()
  findAll() {
    return this.rviacoClient.send(
      'costo.findAll',{})
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }
  
  @Get(':id_proyecto')
  findOne(@Param('id_proyecto') id: string) {
    return this.rviacoClient.send(
        'costo.findOne', 
        id 
      ).pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Post()
  create(@Body() createRviacoDto: CreateRviacoDto) {
    return this.rviacoClient.send(
      'costo.create',
      createRviacoDto
    ).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRviacoDto: UpdateRviacoDto) {
    return this.rviacoClient.send(
        'costo.update',
        {
          id, 
        ...updateRviacoDto 
        }
      ).pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.rviacoClient.send(
        'costo.remove', 
        id 
      ).pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

}
