import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Colaborador = {
  id: number;
  nome: string;
  idade: number | null;
};

@Injectable({
  providedIn: 'root',
})
export class ColaboradoresService {
  public colaboradores: Colaborador[] = [];

  constructor(private readonly httpClient: HttpClient) {
    this.loadColaboradores();
  }

  async loadColaboradores() {
    const urlApi = 'http://localhost:3000/colaboradores';

    //const promiseFetch = await fetch(urlApi).catch(console.warn);
    //console.log({ promiseFetch });

    // const observable = this.httpClient.get(urlApi);
    // console.log(observable);

    this.colaboradores = await this.httpClient
      .get<Colaborador[]>(urlApi)
      .toPromise();
  }
}
