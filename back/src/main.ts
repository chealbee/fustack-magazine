import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/pipes.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //   app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.DATABASE_PORT);
}
bootstrap();