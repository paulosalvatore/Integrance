import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorCardComponent } from '../colaborador-card/colaborador-card.component';
import { ColaboradoresSectionComponent } from './colaboradores-section/colaboradores-section.component';
import { ColaboradoresViewComponent } from './colaboradores-view/colaboradores-view.component';

@NgModule({
  declarations: [ColaboradoresSectionComponent, ColaboradorCardComponent, ColaboradoresViewComponent],
  imports: [CommonModule],
})
export class ColaboradoresModule {}
