import { Component, Input } from '@angular/core';
import { Colaborador } from '../colaboradores/colaboradores.service';

@Component({
  selector: 'app-colaborador-card',
  templateUrl: './colaborador-card.component.html',
  styleUrls: ['./colaborador-card.component.sass'],
})
export class ColaboradorCardComponent {
  @Input()
  colaborador: Colaborador;
}
