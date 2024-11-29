import { Body, Controller, Inject, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { envs, NATS_SERVICE, RVIADOC_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { UpdateRviadocDto } from './dto/update-rviadoc.dto';
import { catchError } from 'rxjs';
import { CreateRviadocDto } from './dto/create-rviadoc.dto';
import { ValidRoles } from 'src/auth/interfaces';
import { Auth } from 'src/auth/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { filesFilter, fileName } from './helper';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller('rviadoc')
export class RviadocController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: filesFilter,
    storage: diskStorage({
      destination: (req, file, cb) => {
        const dir = envs.pathProjects;
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
      },
      filename: fileName
    })
  }))
  uploadScan(@Body() createRviadocDto: CreateRviadocDto, @UploadedFile() file: Express.Multer.File) {

    createRviadocDto.pdfFile = file.filename;
    createRviadocDto.optionUpload = 1;

    return this.client.send(
      'rviadoc.upload_pdf',
      {
        ...createRviadocDto,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  } 

  @Patch('documentation/:id')
  addAppDocumentation(@Param('id', ParseIntPipe) id: number, @Body() updateRviadocDto: UpdateRviadocDto) {
    
    return this.client.send(
      'rviadoc.update',
      {
        ...updateRviadocDto,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  } 
  
  @Patch('documentation/:id')
  addAppDocumentationCode(@Param('id', ParseIntPipe) id: number, @Body() updateRviadocDto: UpdateRviadocDto) {
    
    return this.client.send(
      'rviadoc.update',
      {
        ...updateRviadocDto,
      },
    )
    .pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  } 
}
