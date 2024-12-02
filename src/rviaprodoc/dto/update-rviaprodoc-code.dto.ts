import { PartialType } from '@nestjs/mapped-types';
import { CreateRviaprodocCodeDto } from './create-rviaprodoc-code.dto';

export class UpdateRviaprodocCodeDto extends PartialType(CreateRviaprodocCodeDto) {}
