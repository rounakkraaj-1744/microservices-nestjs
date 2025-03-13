import { Controller, Get } from '@nestjs/common';
import { MsAService } from './ms-a.service';

@Controller()
export class MsAController {
  constructor(private readonly msAService: MsAService) {}

  @Get()
  getHello(): string {
    return this.msAService.getHello();
  }
}
