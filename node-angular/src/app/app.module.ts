import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { EmpresasModule } from './empresas/empresas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColaboradoresModule,
    EmpresasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
