import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(email: string, pass: string) {
    // 1. Buscamos al usuario en MariaDB por su correo
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('El correo o la contraseña son incorrectos');
    }

    // 2. Comparamos la contraseña escrita con la encriptada
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('El correo o la contraseña son incorrectos');
    }

    // 3. Si todo coincide, armamos la información pública del gafete (Payload)
    const payload = { sub: user.id, email: user.email, role: user.role };
    
    // 4. Firmamos y devolvemos el Token digital
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: { id: user.id, name: user.name, role: user.role }
    };
  }
}