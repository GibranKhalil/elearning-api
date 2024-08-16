import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlternativeService } from './alternative.service';
import { CreateAlternativeDto } from './dto/create-alternative.dto';
import { UpdateAlternativeDto } from './dto/update-alternative.dto';

@Controller('alternative')
export class AlternativeController {
  constructor(private readonly alternativeService: AlternativeService) {}

  @Post()
  create(@Body() createAlternativeDto: CreateAlternativeDto) {
    return this.alternativeService.create(createAlternativeDto);
  }

  @Get()
  findAll() {
    return this.alternativeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alternativeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlternativeDto: UpdateAlternativeDto) {
    return this.alternativeService.update(+id, updateAlternativeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alternativeService.remove(+id);
  }
}
