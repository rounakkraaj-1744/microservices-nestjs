import { Controller, Get } from '@nestjs/common';
import { MsBService } from './ms-b.service';

@Controller()
export class MsBController {
  constructor(private readonly msBService: MsBService) {}

  @Get()
  getHello(): string {
    return this.msBService.getHello();
  }
}
