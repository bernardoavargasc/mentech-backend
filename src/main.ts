import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 AGREGA ESTO PARA PERMITIR CONEXIONES
  app.enableCors({
    origin: '*', // Permite que cualquier página se conecte (ideal para pruebas)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Asegúrate de que el puerto siga siendo el 3000 (o el que estés usando)
  await app.listen(3000);
}
bootstrap();