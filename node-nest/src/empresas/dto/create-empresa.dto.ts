import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateColaboradorDto } from 'src/colaboradores/dto/create-colaborador.dto';
import { Empresa } from '../entities/empresa.entity';

export class CreateEmpresaDto implements Empresa {
  @IsString()
  razaoSocial: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CreateColaboradorDto)
  @IsOptional()
  colaboradores?: CreateColaboradorDto[];
}
