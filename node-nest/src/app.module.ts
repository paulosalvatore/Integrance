import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ColaboradoresModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
