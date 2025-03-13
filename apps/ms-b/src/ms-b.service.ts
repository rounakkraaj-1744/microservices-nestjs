import { Injectable } from '@nestjs/common';

@Injectable()
export class MsBService {
  getHello(): string {
    return 'Hello World!';
  }
}
