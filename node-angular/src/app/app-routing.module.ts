import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresViewComponent } from './colaboradores/colaboradores-view/colaboradores-view.component';
import { EmpresasViewComponent } from './empresas/empresas-view/empresas-view.component';

const routes: Routes = [
  { path: '', component: ColaboradoresViewComponent },
  { path: 'empresas', component: EmpresasViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
