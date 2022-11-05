import { ApiProperty } from "@nestjs/swagger";
import { URL } from "url";
const JOI = require('joi');


export class CreateUrlDto {
    @ApiProperty({
        description: 'Long Url that needs a shortner.',
        type: String,
      })
    longUrl:string
}

export const CreateUrlDtoValidation = JOI.object({
    longUrl: JOI.string().max(2000).required().strict(),
  });
  