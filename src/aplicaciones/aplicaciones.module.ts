import { Module } from '@nestjs/common';

import { AplicacionesController } from './aplicaciones.controller';
import { NatsModule } from '../transports/nats.module';

@Module({
  controllers: [AplicacionesController],
  providers: [],
  imports: [
    NatsModule
  ]
})
export class AplicacionesModule {}
