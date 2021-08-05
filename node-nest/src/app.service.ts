import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  nome = 'Paulo';

  createHello() {
    this.nome = 'Salvatore';
  }

  getHello(): string {
    return this.nome;
  }
}
