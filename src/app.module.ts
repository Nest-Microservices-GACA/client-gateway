import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';

@Module({
  imports: [LenguajesModule],
})
export class AppModule {}
