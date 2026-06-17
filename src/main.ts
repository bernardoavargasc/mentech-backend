import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ¡Esta es la llave mágica que deja pasar a Ionic!
  app.enableCors(); 
  
  await app.listen(3000);
}
bootstrap();