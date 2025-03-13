import { Module } from '@nestjs/common';
import { MsAController } from './ms-a.controller';
import { MsAService } from './ms-a.service';

@Module({
  imports: [],
  controllers: [MsAController],
  providers: [MsAService],
})
export class MsAModule {}
