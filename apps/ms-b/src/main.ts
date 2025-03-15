import { NestFactory } from '@nestjs/core';
import { MsBModule } from './ms-b.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      MsBModule,
      {
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3002,
        },
      },
    );   
  await app.listen();
}
bootstrap();
