import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_SERVICE, NATS_SERVICE } from 'src/config';
import { RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy,) {}

  @Post()
  createLenguaje(@Body() registerUserDto:RegisterUserDto){
    return this.authClient.send(
      'auth.register.user',
      registerUserDto,
    );
  }
  
}
