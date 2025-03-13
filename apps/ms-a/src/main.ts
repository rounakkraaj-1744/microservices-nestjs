import { NestFactory } from '@nestjs/core';
import { MsAModule } from './ms-a.module';

async function bootstrap() {
  const app = await NestFactory.create(MsAModule);
  console.log("MS-A: 3001");  
  await app.listen(3001);
}
bootstrap();
