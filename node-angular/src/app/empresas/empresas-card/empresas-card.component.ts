import { Component, Input } from '@angular/core';
import { Empresa } from 'src/app/_domain/Empresa';

@Component({
  selector: 'app-empresas-card',
  templateUrl: './empresas-card.component.html',
  styleUrls: ['./empresas-card.component.sass'],
})
export class EmpresasCardComponent {
  @Input()
  empresa: Empresa;
}
