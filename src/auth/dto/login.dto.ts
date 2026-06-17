import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Debes proporcionar un correo válido' })
  email!: string;

  @IsString()
  password!: string;
}