import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRviadocDto {

    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10))
    idu_proyecto: number;

    @IsNumber()
    @Transform(({ value }) => parseInt(value, 10))
    idu_aplicacion: number;

    @IsString()
    nom_aplicacion: string;

    @IsString()
    @IsOptional()
    pdfFile: string;

}
