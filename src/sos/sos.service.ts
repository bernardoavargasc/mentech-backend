import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SosService {
  constructor(private prisma: PrismaService) {}

  async triggerAlert(userId: number) {
    // Aquí irá la lógica de envío de correos en el futuro
    console.log(`[ALERTA DE EMERGENCIA] El usuario con ID ${userId} ha presionado el botón S.O.S.`);
    
    return {
      success: true,
      message: 'Alerta enviada correctamente al especialista.',
      timestamp: new Date()
    };
  }
}