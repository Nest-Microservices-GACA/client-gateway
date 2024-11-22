import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RviaacModule } from './rviaac/rviaac.module';
import { RviasaModule } from './rviasa/rviasa.module';
import { RviacoModule } from './rviaco/rviaco.module';
import { RviacpModule } from './rviacp/rviacp.module';

@Module({
  imports: [
    LenguajesModule, 
    UsuariosModule, 
    RviaacModule, 
    RviasaModule, 
    RviacoModule,
    AuthModule,
    RviacpModule
  ],
})
export class AppModule {}
