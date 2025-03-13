import { Injectable } from '@nestjs/common';

@Injectable()
export class MsAService {
  getHello(): string {
    return 'Hello World!';
  }
}
