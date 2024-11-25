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
<<<<<<< HEAD
<<<<<<< HEAD
import { RviamiModule } from './rviami/rviami.module';

=======
>>>>>>> parent of f309c6c (RVIACAL, RVIADOC, RVIAPRODOC)
=======
>>>>>>> parent of bddb525 (RVIACAL, RVIADOC, RVIAPRODOC)
=======
=======
import { RviamiModule } from './rviami/rviami.module';
>>>>>>> a24dfff4f7605f177f22ceab84e585bbcfa4bf10
>>>>>>> parent of 405a4e7 (RVIACAL, RVIADOC, RVIAPRODOC)

@Module({
  imports: [
    LenguajesModule, 
    UsuariosModule, 
    RviaacModule, 
    RviasaModule, 
    RviacoModule,
    AuthModule,
<<<<<<< HEAD
<<<<<<< HEAD
    RviacpModule,
<<<<<<< HEAD
    RviacalModule,
    RviadocModule,
    RviaprodocModule
=======
    RviamiModule
<<<<<<< HEAD
=======
    RviacpModule
>>>>>>> parent of f309c6c (RVIACAL, RVIADOC, RVIAPRODOC)
=======
    RviacpModule,
    RviacalModule,
    RviadocModule,
    RviaprodocModule
>>>>>>> parent of bddb525 (RVIACAL, RVIADOC, RVIAPRODOC)
=======
>>>>>>> a24dfff4f7605f177f22ceab84e585bbcfa4bf10
>>>>>>> parent of 405a4e7 (RVIACAL, RVIADOC, RVIAPRODOC)
  ],
})
export class AppModule {}
