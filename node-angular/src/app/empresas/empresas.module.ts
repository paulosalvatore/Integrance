import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasSectionComponent } from './empresas-section/empresas-section.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmpresasViewComponent, EmpresasSectionComponent],
  imports: [CommonModule, SharedModule],
})
export class EmpresasModule {}
