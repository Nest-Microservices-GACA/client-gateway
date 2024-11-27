import { Controller, Get, Body, Patch, Param, Inject, UseFilters } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

import { NATS_SERVICE } from '../config/services';
import { CreateRviacpDto } from './dto';
import { RpcCustomExceptionFilter } from '../common';
import { Auth } from '../auth/decorators';
import { ValidRoles } from '../auth/interfaces';

@Controller('rviacp')
@Auth(ValidRoles.admin)
@UseFilters(RpcCustomExceptionFilter)
export class RviacpController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy  
  ) {}

  @Patch(':id')
  addApptestCases(@Param('id') id: string, @Body() createTestCases: CreateRviacpDto) {
    return this.client.send(
        'testCases.addAppTestCases',
        {
          idu_proyecto: id,
          ...createTestCases
        }
      ).pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Get()
  findAll() {
    return this.client.send(
      'testCases.findAll',
      {}
    ).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }
}
