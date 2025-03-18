/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { MsBService } from './ms-b.service';
import { SharedService } from '@app/shared';

@Controller()
export class MsBController {
  constructor(private readonly msBService: MsBService, private readonly SharedService: SharedService) {}

  @Get()
  getHello() {
    return this.msBService.getInfoFromB();
  }
}
