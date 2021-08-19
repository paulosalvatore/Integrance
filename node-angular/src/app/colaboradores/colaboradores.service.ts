import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Colaborador } from '../_domain/Colaborador';

@Injectable({
  providedIn: 'root',
})
export class ColaboradoresService {
  private apiPrefix = 'colaboradores';

  public colaboradores: Colaborador[] = [];

  constructor(
    private readonly httpClient: HttpClient,
    private readonly apiService: ApiService
  ) {
    this.loadColaboradores();
  }

  async loadColaboradores() {
    const urlApi = this.apiService.findAll(this.apiPrefix);

    this.colaboradores = await this.httpClient
      .get<Colaborador[]>(urlApi)
      .toPromise();
  }
}
