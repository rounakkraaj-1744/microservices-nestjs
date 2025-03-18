/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { MsAService } from './ms-a.service';

@Controller()
export class MsAController {
  constructor(private readonly msAService: MsAService) {}

  @Get()
  getHello() {
    return this.msAService.getInfoFromA();
  }
}