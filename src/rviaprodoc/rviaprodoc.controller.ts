import { Controller, Body, Patch, Param, Inject, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { UpdateRviaprodocDto } from './dto/update-rviaprodoc.dto';
import { NATS_SERVICE, RVIAPRODOC_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { UpdateRviaprodocCodeDto } from './dto/update-rviaprodoc-code.dto';

@Controller('rviaprodoc')
export class RviaprodocController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Patch(':id')
  addAppDocumentation(@Param('id') id: string, @Body() updateRviaprodoc: UpdateRviaprodocDto) {
    return this.client.send(
      'rviaprodoc.addAppDocumentation',
      {
        idu_proyecto: id,
        ...updateRviaprodoc,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );    
  }

  @Patch('codigo/:id')
  addAppDocumentationCod(@Param('id') id: string, @Body() updateRviaprodocCode: UpdateRviaprodocCodeDto) {
    
    return this.client.send(
      'rviaprodoc.addAppDocumentationCode',
      {
        idu_proyecto: id,
        ...updateRviaprodocCode,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );

  }  
}
