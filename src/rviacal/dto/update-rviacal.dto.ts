import { PartialType } from "@nestjs/mapped-types";
import { CreateRviacalDto } from "./create-rviacal.dto";

export class UpdateRviacalDto extends PartialType (CreateRviacalDto){}
