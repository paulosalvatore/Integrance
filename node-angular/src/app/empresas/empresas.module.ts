import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasViewComponent } from './empresas-view/empresas-view.component';
import { EmpresasSectionComponent } from './empresas-section/empresas-section.component';

@NgModule({
  declarations: [EmpresasViewComponent, EmpresasSectionComponent],
  imports: [CommonModule],
})
export class EmpresasModule {}
