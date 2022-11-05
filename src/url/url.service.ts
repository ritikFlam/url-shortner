import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url, UrlDocument } from './entities/url.entity';
import {encode as encodeToB62} from 'base62';

@Injectable()
export class UrlService {
  constructor(@InjectModel('url') private UrlModel: Model<UrlDocument>) {
    
  }
  counter=100000
  async create(createUrlDto: CreateUrlDto) {
    console.log(this.counter,this.getEncoded(this.counter),'ssss')
    const code=this.getEncoded(this.counter)
    const UrlObject:Url={
      long_url:createUrlDto.longUrl,
      short_url:`domain/${code}`,
      code:code,
    }
    this.counter+=1
    const newUrl = new this.UrlModel(UrlObject);
    return newUrl.save()
  }

  findAll() {
    return `This action returns all url`;
  }

  findOne(id: string) {
    return `This action returns a #${id} url`;
  }

  getEncoded(deci:number){
    let code=encodeToB62(deci).toString()
    if(code.length<7){
      code=code.concat('='.repeat(7-code.length))
    }
    return code
  }
}

