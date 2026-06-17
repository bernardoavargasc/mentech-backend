import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client'; // Importamos los roles de tu schema

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: any) {
    // 1. Verificamos si el correo ya existe
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // 2. Encriptamos la contraseña (nadie debe ver contraseñas en texto plano)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    // 3. Guardamos el usuario en MariaDB
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        role: data.role || Role.PATIENT, // Por defecto será paciente si no se especifica
      },
      // Esto evita que devolvamos la contraseña en la respuesta JSON
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      }
    });
  }

  // Esta función la usaremos más adelante para el Login
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}