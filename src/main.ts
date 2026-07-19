import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Voeja Task Management API')
    .setDescription('Api para gerenciamento de tarefas desenvolvida com NestJS.')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
