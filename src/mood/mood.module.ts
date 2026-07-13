import { Module } from '@nestjs/common';
import { MoodController } from './mood.controller';
import { MoodService } from './mood.service';
import { PrismaModule } from '../prisma/prisma.module'; // Importamos el módulo de Prisma

@Module({
  imports: [PrismaModule],
  controllers: [MoodController],
  providers: [MoodService],
})
export class MoodModule {}