import { Component } from '@angular/core';
import { ColaboradoresService } from './colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.sass'],
})
export class ColaboradoresComponent {
  constructor(public readonly service: ColaboradoresService) {
    console.log(service);
  }
}
