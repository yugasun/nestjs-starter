import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PhotoModule } from './photo/photo.module';
import config from './config';

const host = config.host || '0.0.0.0';
const port = config.port || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // create photo api document: http://0.0.0.0:3000/api/photo
  const options = new DocumentBuilder()
    .setTitle('Swagger Example')
    .setDescription('The nestjs API example')
    .setVersion('1.0.0')
    .addTag('photo')
    .build();
  const photoDocument = SwaggerModule.createDocument(app, options, {
    include: [PhotoModule],
  });
  SwaggerModule.setup('api/photo', app, photoDocument);

  await app.listen(port, host, () => {
    Logger.log(`Server is started on http://${host}:${port}`, 'Bootstrap');
    Logger.log(`Photo apis document is started on http://${host}:${port}/api/photo`, 'Swagger');
  });
}

bootstrap();
