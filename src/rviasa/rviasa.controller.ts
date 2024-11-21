import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateRviasaDto } from './dto/create-rviasa.dto';
import { UpdateRviasaDto } from './dto/update-rviasa.dto';
import { RVIASA_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('rviasa')
export class RviasaController {
  constructor(
    @Inject(RVIASA_SERVICE) private readonly rviasaClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createRviasaDto: CreateRviasaDto) {
    // return this.rviasaService.create(createRviasaDto);
  }

  @Get()
  findAll() {
    // return this.rviasaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.rviasaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRviasaDto: UpdateRviasaDto) {
    // return this.rviasaService.update(+id, updateRviasaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.rviasaService.remove(+id);
  }
}
