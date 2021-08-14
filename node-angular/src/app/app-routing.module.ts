import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresViewComponent } from './colaboradores/colaboradores-view/colaboradores-view.component';

const routes: Routes = [{ path: '', component: ColaboradoresViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
