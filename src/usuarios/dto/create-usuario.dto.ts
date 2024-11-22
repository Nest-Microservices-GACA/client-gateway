import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsInt()
  idu_aplicacion: number;

  @IsInt()
  idu_usuario: number;

  @IsString()
  @IsNotEmpty()
  user_name: string; 
}
