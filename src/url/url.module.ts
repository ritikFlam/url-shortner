import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlSchema } from './entities/url.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: 'url', schema: UrlSchema },
    ]),
  ],
  controllers: [UrlController],
  providers: [UrlService]
})
export class UrlModule {}
