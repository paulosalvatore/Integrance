import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresSectionComponent } from './colaboradores-section/colaboradores-section.component';
import { ColaboradoresViewComponent } from './colaboradores-view/colaboradores-view.component';
import { ColaboradorCardComponent } from './colaborador-card/colaborador-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ColaboradoresViewComponent,
    ColaboradoresSectionComponent,
    ColaboradorCardComponent,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class ColaboradoresModule {}
