import { Injectable } from '@nestjs/common';
import { MsAService } from 'apps/ms-a/src/ms-a.service';
import { MsBService } from 'apps/ms-b/src/ms-b.service';

@Injectable()
export class ApiGatewayService {
  constructor (private readonly MSAService: MsAService, private readonly MsBService: MsBService){}
  getInfoFromA(){
    this.MSAService.getInfoFromA();
  }

  getInfoFromB(){
    this.MsBService.getInfoFromB();
  }
}
