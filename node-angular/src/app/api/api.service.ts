import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  findAll = (prefix: string) => `${environment.api}/${prefix}`;

  findById = (prefix: string, id: string) =>
    `${environment.api}/${prefix}/${id}`;
}
