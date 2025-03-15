import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { SharedModule } from '@app/shared';
import { MsAModule } from 'apps/ms-a/src/ms-a.module';
import { MsBModule } from 'apps/ms-b/src/ms-b.module';

@Module({
  imports: [SharedModule, MsAModule, MsBModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
