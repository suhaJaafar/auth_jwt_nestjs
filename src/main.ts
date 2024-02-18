import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
const options = new DocumentBuilder()
.setTitle('Auth JWT')
.setDescription('Auth Jwt')
.setVersion('1.0')
.build();
const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { docExpansion: 'none' }
  });
  await app.listen(3000);

}
bootstrap();
