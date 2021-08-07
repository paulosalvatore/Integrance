import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';

@Module({
  imports: [ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
