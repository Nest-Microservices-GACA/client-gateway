import { Controller, Get, Post, Body, Patch, Param, Inject, ParseIntPipe, UseFilters, Res } from '@nestjs/common';
import { UseInterceptors, ValidationPipe, UploadedFiles, BadRequestException, UploadedFile } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { catchError, lastValueFrom } from 'rxjs';
import { diskStorage } from 'multer';
import * as fs from 'fs';

import { envs, NATS_SERVICE } from '../config';
import { filesFilter, fileTempName } from './helper';
import { CreateAplicacionDto, CreateAplicacionUrlDto } from './dto';
import { Auth, User } from '../auth/decorators';
import { CurrentUser, ValidRoles } from '../auth/interfaces';
import { RpcCustomExceptionFilter } from '../common';
import { Response } from 'express';

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

  @Get(':id')
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  findOne(@Param('id', ParseIntPipe) idu_proyecto: number,) {
    return this.client.send(
      'aplicaciones.findOne', 
      { idu_proyecto } 
    ).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('zip/:id')
  // @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  async download(@Param('id', ParseIntPipe) idu_proyecto: number,@Res() response: Response,) {


    const res = await lastValueFrom(this.client.send('aplicaciones.download7z', { idu_proyecto } ));    

    if( res.status ){

      response.setHeader('Content-Disposition', `attachment; filename=${res.fileName}`);
      response.setHeader('Content-Type', 'application/octet-stream');

      const fileStream = fs.createReadStream(res.filePath);
      fileStream.pipe(response);


      return;
    }

    throw new RpcException(res.message);

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
    storage: diskStorage({
      destination: (req, file, cb) => {
        const dir = envs.pathProjects;
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
      },
      filename: fileTempName
    })
  }))
  createAppZip(
    @Body(new ValidationPipe({ transform: true, whitelist: false })) createAplicacionDto: CreateAplicacionDto,
    @UploadedFiles() files: Express.Multer.File[],
    @User() user: CurrentUser
  ) {

    if (!files || files.length === 0) {
      throw new BadRequestException('Solicitud sin archivos');
    }

    const zipOr7zFile = files.find(file => 
      file.mimetype.includes('zip') || file.mimetype.includes('x-7z-compressed') || file.mimetype.includes('x-zip-compressed')
    );

    const pdfFile = files.find(file => file.mimetype.includes('pdf'));  

    if (!zipOr7zFile) {
      throw new BadRequestException('Debes enviar un ZIP/7z y un PDF*');
    }

    const payload = {
      createAplicacionDto,
      appName: zipOr7zFile.originalname,
      zipName: zipOr7zFile.filename,
      fileType: zipOr7zFile.mimetype,
      pdfName: pdfFile ? pdfFile.filename : null,
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

  @Post('new-app-github')
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: filesFilter,
    storage: diskStorage({
      destination: (req, file, cb) => {
        const dir = envs.pathProjects;
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
      },
      filename: fileTempName
    })
  }))
  createAppGitHub(
    @Body(new ValidationPipe({ transform: true, whitelist: true })) createAplicacionDto: CreateAplicacionUrlDto,
    @UploadedFile() file: Express.Multer.File,
    @User() user: CurrentUser
  ) {

    const payload = {
      createAplicacionDto,
      pdfName: file ? file.filename : null,
      user
    };

    return this.client.send(
        'aplicaciones.createAppGitHub', 
        payload
      ).pipe(
          catchError((err) => {
            throw new RpcException(err);
          }),
        );
  }

  @Post('new-app-gitlab')
  @Auth(ValidRoles.admin, ValidRoles.autorizador, ValidRoles.user)
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: filesFilter,
    storage: diskStorage({
      destination: (req, file, cb) => {
        const dir = envs.pathProjects;
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
      },
      filename: fileTempName
    })
  }))
  createAppGiLab(
    @Body(new ValidationPipe({ transform: true, whitelist: true })) createAplicacionDto: CreateAplicacionUrlDto,
    @UploadedFile() file: Express.Multer.File,
    @User() user: CurrentUser
  ) {
    
    const payload = {
      createAplicacionDto,
      pdfName: file ? file.filename : null,
      user
    };

    return this.client.send(
        'aplicaciones.createAppGitLab', 
        payload
      ).pipe(
          catchError((err) => {
            throw new RpcException(err);
          }),
      );
  }

}
