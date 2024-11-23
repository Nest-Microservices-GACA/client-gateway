import { Controller, Post, Body, Inject, BadRequestException } from '@nestjs/common';
import { RVIASA_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';
import { CreateRviasaDto } from './dto/create-rviasa.dto';
import { lastValueFrom } from 'rxjs';

@Controller('rviasa')
export class RviasaController {
  constructor(@Inject(RVIASA_SERVICE) private readonly rviasaClient: ClientProxy) {}

  @Post()
  async create(@Body() createRviasaDto: CreateRviasaDto) {
    const { iduProject, zipFileName, pdfFileName, csvFileName } = createRviasaDto;

    if (!iduProject || !zipFileName || !pdfFileName || !csvFileName) {
      throw new BadRequestException(
        'Todos los campos (iduProject, zipFileName, pdfFileName, csvFileName) son obligatorios.',
      );
    }

    const message = {
      iduProject,
      zipFileName,
      pdfFileName,
      csvFileName,
    };

    // Cambiando el patrón al correcto
    const result = this.rviasaClient.send('verifySanitizacion', message);
    return await lastValueFrom(result);
  }
}
