import { Controller, Body, Patch, Param, Inject } from '@nestjs/common';
import { UpdateRviacalDto } from './dto/update-rviacal.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('rviacal')
export class RviacalController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}
  
  @Patch(':id')
  patchAppRateProject(@Param('id') id: string, @Body() updateRviacal: UpdateRviacalDto) {

    //console.log(id);
    //console.log(updateRviacal);
 
    return this.client.send(
      'rate-project', 
      {
        idu_proyecto: id,
        ...updateRviacal,
      },
    )
    .pipe(
      catchError((error) => {
          console.error('Error en la comunicación con el microservicio:', error); 
          throw new RpcException(error || 'Error comunicándose con el microservicio');
      }),
    );

  }  
}
