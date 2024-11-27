import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RviaacModule } from './rviaac/rviaac.module';
import { RviasaModule } from './rviasa/rviasa.module';
import { RviacoModule } from './rviaco/rviaco.module';
import { RviacpModule } from './rviacp/rviacp.module';
import { RviamiModule } from './rviami/rviami.module';
import { RviacalModule } from './rviacal/rviacal.module';
import { RviadocModule } from './rviadoc/rviadoc.module';
import { RviaprodocModule } from './rviaprodoc/rviaprodoc.module';
import { NatsModule } from './transports/nats.module';
import { AplicacionesModule } from './aplicaciones/aplicaciones.module';

@Module({
  imports: [
    LenguajesModule, 
    UsuariosModule, 
    RviaacModule, 
    RviasaModule, 
    RviacoModule,
    AuthModule,
    RviacpModule,
    RviamiModule,
    RviacalModule,
    RviadocModule,
    RviaprodocModule,
    NatsModule,
    AplicacionesModule
  ],
})
export class AppModule {}
