import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import config from './config';

const host = config.host || '0.0.0.0';
const port = config.port || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, host, () => {
    Logger.log(`Server is started on http://${host}:${port}`, 'Bootstrap');
  });
}

bootstrap();
