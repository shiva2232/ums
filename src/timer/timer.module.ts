import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TimerService } from './timer.service';
import { UserService } from 'src/user/user.service';
import { LogService } from 'src/log/log.service';
import { UserModule } from '../user/user.module';
import { BullModule } from '@nestjs/bull';
import { TimerProcessor } from './timer.processor';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/entities/user.entity';
import { LogSchema } from '../log/entities/log.entity';
import { LogModule } from '../log/log.module';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    UserModule,
    LogModule,
    BullModule.registerQueue({
      name: 'userQueue',
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Log', schema: LogSchema },
    ]),
  ],
  providers: [TimerService, TimerProcessor],
})
export class TimerModule {}
