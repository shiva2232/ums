import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { userJob } from './timer.type';
import { User } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from 'src/log/entities/log.entity';

// import { UserService } from 'src/user/user.service';

@Processor('userQueue')
export class TimerProcessor {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Log') private logModel: Model<Log>,
  ) {}
  private readonly logger = new Logger(TimerProcessor.name);

  @Process('user')
  async transcode(job: Job<unknown>) {
    try {
      const userDocument = await this.userModel.create(
        this.mapToUserCreateEntity(job.data),
      );
    } catch (e) {
      console.log(e);
    }
  }

  @Process('logging')
  async LogEvent(job: Job<unknown>) {
    try {
      const logDocument = await this.logModel.create(job.data);
    } catch (e) {
      console.log(e);
    }
  }

  mapToUserCreateEntity<User>(user: any) {
    const { location, ...userModel } = user;
    var ret = { ...userModel, loc: location };
    return ret;
  }
}
