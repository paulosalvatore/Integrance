import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private colaboradoresPrefix = 'colaboradores';

  findAllColaboradores = () => `${environment.api}/${this.colaboradoresPrefix}`;

  findByIdColaboradores = (id: string) =>
    `${environment.api}/${this.colaboradoresPrefix}/${id}`;
}
