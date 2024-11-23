import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RviasaController } from './rviasa.controller';
import { envs, RVIASA_SERVICE } from 'src/config';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { resolve, extname } from 'path';
import { v4 as uuid } from 'uuid';

@Module({
  controllers: [RviasaController],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: resolve('/sysx/bito/projects'),
        filename: (req, file, callback) => {
          const iduProject = uuid();
          const nameWithoutExtension = file.originalname.split('.').slice(0, -1).join('');
          const extension = extname(file.originalname);
          const filename = `${iduProject}_${nameWithoutExtension}${extension}`;
          callback(null, filename);
        },
      }),
    }),
    ClientsModule.register([
      {
        name: RVIASA_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.RVIASA_MicroserviceHost,
          port: envs.RVIASA_MicroservicePort,
        },
      },
    ]),
  ],
})
export class RviasaModule {}
