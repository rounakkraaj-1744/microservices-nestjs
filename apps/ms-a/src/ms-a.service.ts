/* eslint-disable prettier/prettier */
import { SharedService } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MsAService {
  constructor (private readonly SharedService: SharedService){}

  getInfoFromA(){
    const sharedMessage = this.SharedService.getSharedLibInfo();
    return({
      "message" : sharedMessage.message,
      "service-message": "MS-A"
    });
  }
}
