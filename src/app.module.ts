import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoodModule } from './mood/mood.module';
import { ActivityModule } from './activity/activity.service.ts/activity.module';

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule,
    MoodModule,
    ActivityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}