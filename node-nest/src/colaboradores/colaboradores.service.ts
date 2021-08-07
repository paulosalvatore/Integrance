import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { EntityNotFoundError } from 'src/errors/entity-not-found.error';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
// import { Colaborador } from './entities/colaborador.entity';

@Injectable()
export class ColaboradoresService {
  // Modificador de acesso: private/public
  // Private: só quem está na classe acessa
  // Public: qualquer código externo também acessa

  constructor(private readonly prisma: PrismaService) {}

  /*private readonly data: Colaborador[] = [
    {
      id: 1,
      nome: 'Paulo Salvatore - Local',
      idade: 10,
    },
  ];*/

  create(createColaboradorDto: CreateColaboradorDto) {
    const data: Prisma.ColaboradoresCreateInput = {
      ...createColaboradorDto,
    };

    return this.prisma.colaboradores.create({ data });

    /*const item: Colaborador = {
      id: this.data.length + 1,
      ...createColaboradorDto,
    };

    this.data.push(item);

    return item;*/
  }

  findAll() {
    return this.prisma.colaboradores.findMany();

    // return this.data.filter(Boolean);
  }

  async findOne(id: number) {
    const data = await this.prisma.colaboradores
      .findUnique({
        where: { id },
        rejectOnNotFound: true,
      })
      .catch(this.handleDatabaseErrors);

    /*if (!data) {
      throw new EntityNotFoundError('Colaborador não encontrado.');
    }*/

    return data;

    // const index = this.findIndexById(id);

    // return this.data[index];
  }

  update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
    const data: Prisma.ColaboradoresUpdateInput = {
      ...updateColaboradorDto,
    };

    return this.prisma.colaboradores
      .update({
        where: { id },
        data,
      })
      .catch(this.handleDatabaseErrors);

    /*const index = this.findIndexById(id);

    this.data[index] = {
      ...this.data[index],
      ...updateColaboradorDto,
    };

    return this.data[index];*/
  }

  remove(id: number) {
    return this.prisma.colaboradores
      .delete({
        where: { id },
      })
      .catch(this.handleDatabaseErrors);

    /*const index = this.findIndexById(id);

    delete this.data[index];*/
  }

  private handleDatabaseErrors(error: PrismaClientKnownRequestError): Error {
    if (error.code === 'P2025' || error.name === 'NotFoundError') {
      throw new EntityNotFoundError('Colaborador não encontrado.');
    }

    throw error;
  }

  /*private findIndexById(id: number) {
    const index = this.data.findIndex((item) => item?.id == id);

    if (!this.data[index]) {
      throw new EntityNotFoundError('Colaborador não encontrado.');
    }

    return index;
  }*/
}
