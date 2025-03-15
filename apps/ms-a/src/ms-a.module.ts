import { Module } from '@nestjs/common';
import { MsAController } from './ms-a.controller';
import { MsAService } from './ms-a.service';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [MsAController],
  providers: [MsAService],
  exports: [MsAService]
})
export class MsAModule {}
