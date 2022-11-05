import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
    collection: 'shortUrl',
})
export class Url {
    @Prop({required:true})
    long_url:string;
    @Prop({required:true,indexes:true})
    short_url:string;
    @Prop({required:true,indexes:true})
    code:string;
}

export const urlCollection = 'url';
export type UrlDocument = Url & Document;
export const UrlSchema = SchemaFactory.createForClass(Url);
