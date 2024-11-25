import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RviaacModule } from './rviaac/rviaac.module';
import { RviasaModule } from './rviasa/rviasa.module';
import { RviacoModule } from './rviaco/rviaco.module';
import { RviacpModule } from './rviacp/rviacp.module';
<<<<<<< HEAD
import { RviacalModule } from './rviacal/rviacal.module';
import { RviadocModule } from './rviadoc/rviadoc.module';
import { RviaprodocModule } from './rviaprodoc/rviaprodoc.module';
=======
import { RviamiModule } from './rviami/rviami.module';
>>>>>>> a24dfff4f7605f177f22ceab84e585bbcfa4bf10

@Module({
  imports: [
    LenguajesModule, 
    UsuariosModule, 
    RviaacModule, 
    RviasaModule, 
    RviacoModule,
    AuthModule,
    RviacpModule,
<<<<<<< HEAD
    RviacalModule,
    RviadocModule,
    RviaprodocModule
=======
    RviamiModule
>>>>>>> a24dfff4f7605f177f22ceab84e585bbcfa4bf10
  ],
})
export class AppModule {}
