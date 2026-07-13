import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      // Le decimos que busque el token en el Header de la petición
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // Usamos tu misma clave secreta
      secretOrKey: process.env.JWT_SECRET || 'clave_secreta_temporal_mentech_2026',
    });
  }

  // Esta función recibe el token ya desencriptado y extrae los datos del usuario
  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}