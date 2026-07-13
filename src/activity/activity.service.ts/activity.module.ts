import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { ActivityController } from './activity.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}