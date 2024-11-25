import { Injectable } from '@nestjs/common';
import { CreateRviamiDto } from './dto/create-rviami.dto';
import { UpdateRviamiDto } from './dto/update-rviami.dto';

@Injectable()
export class RviamiService {
  create(createRviamiDto: CreateRviamiDto) {
    return 'This action adds a new rviami';
  }

  findAll() {
    return `This action returns all rviami`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rviami`;
  }

  update(id: number, updateRviamiDto: UpdateRviamiDto) {
    return `This action updates a #${id} rviami`;
  }

  remove(id: number) {
    return `This action removes a #${id} rviami`;
  }
}
