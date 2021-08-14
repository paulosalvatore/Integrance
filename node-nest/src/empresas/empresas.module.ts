import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService, PrismaService],
})
export class EmpresasModule {}
