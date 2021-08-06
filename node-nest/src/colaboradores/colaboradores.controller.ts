import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Post()
  create(@Body() createColaboradorDto: CreateColaboradorDto) {
    return this.colaboradoresService.create(createColaboradorDto);
  }

  @Get()
  findAll() {
    return this.colaboradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.colaboradoresService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateColaboradorDto: UpdateColaboradorDto,
  ) {
    return this.colaboradoresService.update(id, updateColaboradorDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.colaboradoresService.remove(id);
  }
}
