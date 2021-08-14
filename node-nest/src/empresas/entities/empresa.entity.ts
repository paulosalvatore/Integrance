import { Colaborador } from 'src/colaboradores/entities/colaborador.entity';

export class Empresa {
  id?: number;

  razaoSocial: string;

  colaboradores?: Colaborador[];
}
