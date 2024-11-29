import { PartialType } from '@nestjs/mapped-types';
import { CreateRviaprodocDto } from './create-rviaprodoc.dto';

export class UpdateRviaprodocDto extends PartialType(CreateRviaprodocDto) {}
