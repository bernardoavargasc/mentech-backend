import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 1. Extraemos los datos directamente de tu URL en el archivo .env
    const dbUrl = new URL(process.env.DATABASE_URL!);

    // 2. Configuramos el adaptador nativo de MariaDB
    const adapter = new PrismaMariaDb({
      host: dbUrl.hostname,
      port: Number(dbUrl.port) || 3306,
      user: dbUrl.username,
      password: dbUrl.password,
      database: dbUrl.pathname.substring(1), // Quitamos la diagonal inicial
    });

    // 3. Le entregamos el adaptador a Prisma (tal como nos pidió IntelliSense)
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}