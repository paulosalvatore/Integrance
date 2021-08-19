import { Colaborador } from './Colaborador';

export interface Empresa {
  id: number;
  razaoSocial: string;
  colaboradores: Colaborador[];
}
