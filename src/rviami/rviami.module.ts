import { Module } from '@nestjs/common';
import { RviamiService } from './rviami.service';
import { RviamiController } from './rviami.controller';

@Module({
  controllers: [RviamiController],
  providers: [RviamiService],
})
export class RviamiModule {}
