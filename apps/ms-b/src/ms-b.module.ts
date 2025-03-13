import { Module } from '@nestjs/common';
import { MsBController } from './ms-b.controller';
import { MsBService } from './ms-b.service';

@Module({
  imports: [],
  controllers: [MsBController],
  providers: [MsBService],
})
export class MsBModule {}
