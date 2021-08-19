import { Component } from '@angular/core';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas-section',
  templateUrl: './empresas-section.component.html',
  styleUrls: ['./empresas-section.component.sass'],
})
export class EmpresasSectionComponent {
  constructor(public readonly service: EmpresasService) {}
}
