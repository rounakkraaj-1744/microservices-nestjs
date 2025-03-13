import { NestFactory } from '@nestjs/core';
import { MsBModule } from './ms-b.module';

async function bootstrap() {
  const app = await NestFactory.create(MsBModule);
  console.log("MS-B: 3002");  
  await app.listen(3002);
}
bootstrap();
