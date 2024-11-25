import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RviamiService } from './rviami.service';
import { CreateRviamiDto } from './dto/create-rviami.dto';
import { UpdateRviamiDto } from './dto/update-rviami.dto';

@Controller('rviami')
export class RviamiController {
  constructor(private readonly rviamiService: RviamiService) {}

  @Post()
  create(@Body() createRviamiDto: CreateRviamiDto) {
    return this.rviamiService.create(createRviamiDto);
  }

  @Get()
  findAll() {
    return this.rviamiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rviamiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRviamiDto: UpdateRviamiDto) {
    return this.rviamiService.update(+id, updateRviamiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rviamiService.remove(+id);
  }
}
