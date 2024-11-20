import { Controller } from '@nestjs/common';
import { LenguajesService } from './lenguajes.service';

@Controller('lenguajes')
export class LenguajesController {
  constructor(private readonly lenguajesService: LenguajesService) {}
}
