import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LENGUAJE_SERVICE } from 'src/config';

@Controller('lenguajes')
export class LenguajesController {
  constructor(
    @Inject(LENGUAJE_SERVICE) private readonly lenguajeClient: ClientProxy,
  ) {}

  @Post()
  createLenguaje(){
    return "crea un lenguaje";
  }

  @Get()
  findAllLenguajes(){
    return this.lenguajeClient.send('lenguaje.findAll',{});
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return "crea un lenguaje";
  }


  @Delete(':id')
  delete(@Param('id') id:string){
    return "crea un lenguaje";
  }


  @Patch(':id')
  patch(
    @Param('id') id:string,
    @Body() body:any
  ){
    return "crea un lenguaje";
  }


}
