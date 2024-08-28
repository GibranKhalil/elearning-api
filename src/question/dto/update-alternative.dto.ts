import { PartialType } from '@nestjs/mapped-types';
import { CreateAlternativeDto } from './create-alternative.dto';

export class UpdateAlternativeDto extends PartialType(CreateAlternativeDto) {}
