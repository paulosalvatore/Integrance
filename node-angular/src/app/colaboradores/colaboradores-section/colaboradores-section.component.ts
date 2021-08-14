import { Component } from '@angular/core';
import { ColaboradoresService } from '../colaboradores.service';

@Component({
  selector: 'app-colaboradores-section',
  templateUrl: './colaboradores-section.component.html',
  styleUrls: ['./colaboradores-section.component.sass'],
})
export class ColaboradoresSectionComponent {
  constructor(public readonly service: ColaboradoresService) {}
}
