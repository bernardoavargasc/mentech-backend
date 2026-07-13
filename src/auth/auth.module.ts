import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; // 👈 Importamos Passport
import { JwtStrategy } from './jwt.strategy'; // 👈 Importamos la estrategia

@Module({
  imports: [
    UsersModule, 
    PassportModule, // 👈 Lo agregamos a los imports
    JwtModule.register({
      global: true, 
      secret: process.env.JWT_SECRET || 'clave_secreta_temporal_mentech_2026', 
      signOptions: { expiresIn: '12h' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // 👈 Registramos JwtStrategy como proveedor
})
export class AuthModule {}