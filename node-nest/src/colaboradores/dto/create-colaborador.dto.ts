import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Colaborador } from '../entities/colaborador.entity';

export class CreateColaboradorDto implements Colaborador {
  @IsString()
  nome: string;

  @IsNumber()
  @IsOptional()
  idade?: number;
}
