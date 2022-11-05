import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://a:a@cluster0.h3yoxuv.mongodb.net/url',{
      dbName:'url'
    }),
    UrlModule,
    HealthModule
  ],
})
export class AppModule {}
