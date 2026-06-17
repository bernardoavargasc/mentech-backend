import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // Por defecto NestJS devuelve 201 (Created) en los POST, para Login lo correcto es 200 (OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    // Le pasamos el correo y la contraseña a nuestro "cadenero"
    return this.authService.login(signInDto.email, signInDto.password);
  }
}