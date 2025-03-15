import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
    getSharedLibInfo(){
        return { message:"Shared Library from Lib Folder"}
    }
}
