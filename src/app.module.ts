import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MoodModule } from './mood/mood.module';
import { ActivityModule } from './activity/activity.module';
import { SosModule } from './sos/sos.module'; // 👈 El nuevo módulo de emergencias

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule,
    MoodModule,
    ActivityModule,
    SosModule // 👈 Registrado aquí para que NestJS lo reconozca
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}