import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateRviaacDto } from './dto/create-rviaac.dto';
import { UpdateRviaacDto } from './dto/update-rviaac.dto';

@Controller('rviaac')
export class RviaacController {
  constructor(@Inject('RVIAAC_SERVICE') private readonly rviaacClient: ClientProxy) {}

  @Post()
  async create(@Body() createRviaacDto: CreateRviaacDto) {
    const result = this.rviaacClient.send('createActualizacion', createRviaacDto);
    return await lastValueFrom(result);
  }

  @Get()
  async findAll() {
    const result = this.rviaacClient.send('findAllActualizacion', {});
    return await lastValueFrom(result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = this.rviaacClient.send('findOneActualizacion', +id);
    return await lastValueFrom(result);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRviaacDto: UpdateRviaacDto) {
    const payload = { id: +id, ...updateRviaacDto };
    const result = this.rviaacClient.send('updateActualizacion', payload);
    return await lastValueFrom(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = this.rviaacClient.send('removeActualizacion', +id);
    return await lastValueFrom(result);
  }
}
