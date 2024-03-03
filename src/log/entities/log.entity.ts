import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
import { RequestMethod, ResType } from '../log.type';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop({ required: true, type: Boolean })
  success: boolean;
  @Prop({ required: true, type: String })
  requestTime: string;
  @Prop({ required: true, type: String })
  requestUrl: string;
  @Prop({ required: true, type: String })
  method: RequestMethod;
  @Prop({ required: true, type: Object })
  response: ResType;
  @Prop({ required: false, type: Number })
  status?: number;
  @Prop({ required: false, type: String })
  statusText?: string;

  /******
   * _*type: number*_\
   * Response time in millisecond
   */
  @Prop({ required: true, type: String })
  responseTime: string;
  @Prop({ required: true, type: Number })
  responseDelay: number;
}

export const LogSchema = SchemaFactory.createForClass(Log);
