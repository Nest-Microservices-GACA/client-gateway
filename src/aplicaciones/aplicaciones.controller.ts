import { Controller, Get, Post, Body, Patch, Param, Inject, ParseIntPipe, UseFilters,  } from '@nestjs/common';
import { UseInterceptors, ValidationPipe, UploadedFiles, BadRequestException, UploadedFile } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { catchError } from 'rxjs';

import { NATS_SERVICE } from '../config';
import { filesFilter } from './helper';
import { CreateAplicacionDto, CreateAplicacionUrlDto } from './dto';
import { Auth, User } from '../auth/decorators';
import { CurrentUser, ValidRoles } from '../auth/interfaces';
import { RpcCustomExceptionFilter } from '../common';

@Controller('aplicaciones')
@UseFilters(RpcCustomExceptionFilter)
export class AplicacionesController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Get()
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  findAll(@User() user: CurrentUser) {
    return this.client.send(
      'aplicaciones.findAll', 
      { user } 
    ).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.autorizador)
  updateStatus(@Param('id', ParseIntPipe) id: number, @Body('estatusId') estatusId: number) {
    return this.client.send(
      'aplicaciones.updateStatus', 
      { id, estatusId }
    ).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  } 

  @Post('new-app')
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  @UseInterceptors(FilesInterceptor('files', 2, {
    fileFilter: filesFilter,
  }))
  createAppZip(
    @Body(new ValidationPipe({ transform: true, whitelist: false })) createAplicacionDto: CreateAplicacionDto,
    @UploadedFiles() files: Express.Multer.File[],
    @User() user: CurrentUser
  ) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded');
    }

    const zipOr7zFile = files.find(file => 
      file.mimetype.includes('zip') || file.mimetype.includes('x-7z-compressed') || file.mimetype.includes('x-zip-compressed')
    );

    const pdfFile = files.find(file => file.mimetype.includes('pdf'));  

    if (!zipOr7zFile) {
      throw new BadRequestException('You must upload one ZIP file and one PDF file');
    }

    const payload = {
      createAplicacionDto,
      zipOr7zFile,
      pdfFile,
      user
    };

    return this.client.send(
      'aplicaciones.createAppZip', 
      payload).pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
     );
  }

  @Post('new-app-git')
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: filesFilter,
  }))
  create(
    @Body(new ValidationPipe({ transform: true, whitelist: true })) createAplicacionDto: CreateAplicacionUrlDto,
    @UploadedFile() file: Express.Multer.File,
    @User() user: CurrentUser
  ) {
    
    const payload = {
      createAplicacionDto,
      pdfFile: file ? file : null,
      user
    };

    return this.client.send(
        'aplicaciones.createAppGit', 
        payload
      ).pipe(
          catchError((err) => {
            throw new RpcException(err);
          }),
       );
  }

}
