import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, // Conectamos con el módulo de usuarios
    JwtModule.register({
      global: true, // Esto nos permitirá usar el gafete en toda la plataforma
      secret: process.env.JWT_SECRET || 'clave_secreta_temporal_mentech_2026', 
      signOptions: { expiresIn: '12h' }, // La sesión del usuario durará 12 horas
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}