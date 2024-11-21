import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateRviaacDto } from './dto/create-rviaac.dto';
import { UpdateRviaacDto } from './dto/update-rviaac.dto';
import { RVIAAC_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('rviaac')
export class RviaacController {
  constructor(
    @Inject(RVIAAC_SERVICE) private readonly rviaacClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createRviaacDto: CreateRviaacDto) {
    // return this.rviaacService.create(createRviaacDto);
  }

  @Get()
  findAll() {
    // return this.rviaacService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.rviaacService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRviaacDto: UpdateRviaacDto) {
    // return this.rviaacService.update(+id, updateRviaacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.rviaacService.remove(+id);
  }
}
