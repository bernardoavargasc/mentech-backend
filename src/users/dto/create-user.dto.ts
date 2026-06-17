import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail({}, { message: 'Debes proporcionar un correo válido' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password!: string;

  @IsOptional()
  @IsEnum(Role, { message: 'El rol no es válido' })
  role?: Role; // Este se queda con "?" porque es opcional
}