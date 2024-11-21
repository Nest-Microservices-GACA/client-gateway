import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { LENGUAJE_SERVICE } from 'src/config';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { CreateLanguageDto } from './dto/create-language.dto';

@Controller('lenguajes')
export class LenguajesController {
  constructor(
    @Inject(LENGUAJE_SERVICE) private readonly lenguajeClient: ClientProxy,
  ) {}

  @Post()
  createLenguaje(@Body() createLanguageDto:CreateLanguageDto){

    return this.lenguajeClient.send(
      'lenguaje.create',
      createLanguageDto,
    );
  }

  @Get()
  findAllLenguajes(){
    return this.lenguajeClient.send('lenguaje.findAll',{});
  }

  @Get(':id')
  findOne(@Param('id') id:string){

    return this.lenguajeClient.send('lenguaje.findOne', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }


  @Delete(':id')
  delete(@Param('id') id:string){
    return this.lenguajeClient.send('lenguaje.remove', { id }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }


  @Patch(':id')
  patchLenguaje(
    @Param('id', ParseIntPipe) idu_lenguaje: number,
    @Body() updateLanguageDto:UpdateLanguageDto
  ){

    return this.lenguajeClient.send(
      'lenguaje.update',
      {
        idu_lenguaje,
        ...updateLanguageDto,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );

  }


}
