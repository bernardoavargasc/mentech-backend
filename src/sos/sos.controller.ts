import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SosService } from './sos.service';

@Controller('sos')
@UseGuards(AuthGuard('jwt')) // Solo usuarios logueados pueden pedir ayuda
export class SosController {
  constructor(private readonly sosService: SosService) {}

  @Post('alert')
  sendAlert(@Request() req) {
    // Extraemos el ID del usuario directamente del token
    return this.sosService.triggerAlert(req.user.id);
  }
}