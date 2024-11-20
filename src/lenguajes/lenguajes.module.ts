import { Module } from '@nestjs/common';
import { LenguajesService } from './lenguajes.service';
import { LenguajesController } from './lenguajes.controller';

@Module({
  controllers: [LenguajesController],
  providers: [LenguajesService],
})
export class LenguajesModule {}
