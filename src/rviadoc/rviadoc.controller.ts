import { Body, Controller, Inject, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { RVIADOC_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { UpdateRviadocDto } from './dto/update-rviadoc.dto';
import { catchError } from 'rxjs';

@Controller('rviadoc')
export class RviadocController {
  constructor(
    @Inject(RVIADOC_SERVICE) private readonly rviadocClient: ClientProxy,
  ) {}

  @Patch('documentation/:id')
  addAppDocumentation(@Param('id', ParseIntPipe) id: number, @Body() updateRviadocDto: UpdateRviadocDto) {
    
    return this.rviadocClient.send(
      'rviadoc.update',
      {
        ...updateRviadocDto,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  } 
  
  @Patch('documentation/:id')
  addAppDocumentationCode(@Param('id', ParseIntPipe) id: number, @Body() updateRviadocDto: UpdateRviadocDto) {
    
    return this.rviadocClient.send(
      'rviadoc.update',
      {
        ...updateRviadocDto,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  } 
}
