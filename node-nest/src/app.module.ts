import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [ColaboradoresModule, EmpresasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
