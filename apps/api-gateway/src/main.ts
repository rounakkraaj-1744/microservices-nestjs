import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  console.log("API-GATEWAY: 3000");  
  await app.listen(3000);
}
bootstrap();
