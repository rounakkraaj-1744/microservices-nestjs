/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MsBController } from './ms-b.controller';
import { MsBService } from './ms-b.service';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [MsBController],
  providers: [MsBService],
  exports: [MsBService],
})
export class MsBModule {}
