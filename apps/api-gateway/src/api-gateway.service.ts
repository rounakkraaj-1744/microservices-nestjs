import { Injectable } from '@nestjs/common';
import { MsAService } from 'apps/ms-a/src/ms-a.service';

@Injectable()
export class ApiGatewayService {
  constructor (private readonly MSAService: MsAService){}
  getInfoFromA(){
    this.MSAService.getInfoFromA();
  }
}
