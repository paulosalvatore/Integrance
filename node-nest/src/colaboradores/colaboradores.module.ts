import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService, PrismaService],
})
export class ColaboradoresModule {}
