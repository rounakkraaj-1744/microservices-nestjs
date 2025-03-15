import { SharedService } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MsBService {
  constructor (private readonly SharedService: SharedService){}
  getInfoFromB(){
    const sharedMessage = this.SharedService.getSharedLibInfo();
    return({
      "message" : sharedMessage.message,
      "service-message": "MS-B"
    });
  }
}
