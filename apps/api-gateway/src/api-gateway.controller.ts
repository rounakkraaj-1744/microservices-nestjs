import { Controller, Get } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { SharedService } from '@app/shared';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService, private readonly SharedService: SharedService) {}

  @Get()
  getApiGateway() {
    return this.SharedService.getSharedLibInfo();
  }

  @Get("/service-a")
  getInfoFromA(){
    return this.apiGatewayService.getInfoFromA();
  }
}
