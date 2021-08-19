import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresSectionComponent } from './colaboradores-section/colaboradores-section.component';
import { ColaboradoresViewComponent } from './colaboradores-view/colaboradores-view.component';
import { ColaboradorCardComponent } from './colaborador-card/colaborador-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ColaboradoresViewComponent,
    ColaboradoresSectionComponent,
    ColaboradorCardComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule],
})
export class ColaboradoresModule {}
