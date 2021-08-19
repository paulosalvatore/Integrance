import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Empresa } from '../_domain/Empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  private apiPrefix = 'empresas';

  public empresas: Empresa[] = [];

  constructor(
    private readonly httpClient: HttpClient,
    private readonly apiService: ApiService
  ) {
    this.loadEmpresas();
  }

  async loadEmpresas() {
    const urlApi = this.apiService.findAll(this.apiPrefix);

    this.empresas = await this.httpClient.get<Empresa[]>(urlApi).toPromise();
  }
}
