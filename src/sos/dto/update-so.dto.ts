import { PartialType } from '@nestjs/mapped-types';
import { CreateSoDto } from './create-so.dto';

export class UpdateSoDto extends PartialType(CreateSoDto) {}
