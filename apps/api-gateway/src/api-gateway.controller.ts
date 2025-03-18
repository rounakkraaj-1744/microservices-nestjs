/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { SharedService } from '@app/shared';

@Controller()
export class ApiGatewayController {
  constructor(private readonly sharedLibary: SharedService, private readonly apiGateway: ApiGatewayService) {}

  @Get()
  getApiGateway() {
    return this.sharedLibary.getSharedLibInfo();
  }

  @Get("/service-a")
  getInfoFromA(){
    return this.apiGateway.getInfoFromA();
  }

  @Get("/service-b")
  getInfoFromB(){
    return this.apiGateway.getInfoFromB();
  }
}