import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasSectionComponent } from './empresas-section/empresas-section.component';
import { SharedModule } from '../shared/shared.module';
import { EmpresasCardComponent } from './empresas-card/empresas-card.component';

@NgModule({
  declarations: [
    EmpresasViewComponent,
    EmpresasSectionComponent,
    EmpresasCardComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class EmpresasModule {}
