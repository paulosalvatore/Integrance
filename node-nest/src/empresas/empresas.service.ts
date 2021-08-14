import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { EntityNotFoundError } from 'src/errors/entity-not-found.error';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEmpresaDto: CreateEmpresaDto) {
    const colaboradores = createEmpresaDto.colaboradores;
    // (também é possível fazer via desconstrução de objeto):
    // const { colaboradores } = createEmpresaDto;

    type CreateColaboradores =
      Prisma.ColaboradoresCreateNestedManyWithoutEmpresasInput;

    const createColaboradores: CreateColaboradores = colaboradores
      ? { createMany: { data: colaboradores } }
      : undefined;

    const data: Prisma.EmpresasCreateInput = {
      ...createEmpresaDto,
      colaboradores: createColaboradores,
    };

    return this.prisma.empresas.create({
      data,
      include: {
        colaboradores: true,
      },
    });
  }

  findAll() {
    return this.prisma.empresas.findMany({
      include: {
        colaboradores: {
          select: { nome: true },
        },
      },
    });
  }

  async findOne(id: number) {
    const data = await this.prisma.empresas
      .findUnique({
        where: { id },
        rejectOnNotFound: true,
      })
      .catch(this.handleDatabaseErrors);

    return data;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    /*const data: Prisma.EmpresasUpdateInput = {
      ...updateEmpresaDto,
    };

    return this.prisma.empresas
      .update({
        where: { id },
        data,
      })
      .catch(this.handleDatabaseErrors);*/
  }

  remove(id: number) {
    return this.prisma.empresas
      .delete({
        where: { id },
      })
      .catch(this.handleDatabaseErrors);
  }

  private handleDatabaseErrors(error: PrismaClientKnownRequestError): Error {
    if (error.code === 'P2025' || error.name === 'NotFoundError') {
      throw new EntityNotFoundError('Empresa não encontrado.');
    }

    throw error;
  }
}
