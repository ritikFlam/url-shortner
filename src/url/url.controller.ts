import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('url')
@Controller('')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get(':shortUrl')
  findOne(@Param('shortUrl') shortUrl: string) {
    return this.urlService.findOne(shortUrl);
  }

  @Get('/recent')
  findAll() {
    return this.urlService.findAll();
  }
}
