import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private colaboradoresPrefix = 'colaboradores';

  private empresasPrefix = 'empresas';

  findAllColaboradores = () => `${environment.api}/${this.colaboradoresPrefix}`;

  findByIdColaboradores = (id: string) =>
    `${environment.api}/${this.colaboradoresPrefix}/${id}`;

  findAllEmpresas = () => `${environment.api}/${this.empresasPrefix}`;
}
