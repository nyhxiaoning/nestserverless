import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启 CORS
  debugger
  app.enableCors({
    origin: '*', // 或者指定具体域名，如 'http://localhost:5173'
    credentials: true,
  });
  await app.init();
}
bootstrap();
