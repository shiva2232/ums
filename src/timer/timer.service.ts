import { HttpService } from '@nestjs/axios';
import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';
import Bull, { Queue } from 'bull';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { logJob, userJob } from './timer.type';
import { CreateLogDto } from 'src/log/dto/create-log.dto';
import { ResType } from 'src/log/log.type';

@Injectable()
export class TimerService {
  constructor(
    @InjectQueue('userQueue') private userQueue: Queue,
    private readonly http: HttpService,
  ) {
    this.insertQueue = this.insertQueue.bind(this);
    this.insertLogQueue = this.insertLogQueue.bind(this);
  }

  async insertQueue(results: CreateUserDto[], info: CreateLogDto) {
    const jobs: userJob[] = results.map((result, i) => ({
      name: 'user',
      data: result,
      opt: {
        removeOnComplete: true,
      },
    }));

    try {
      await this.userQueue.add('logging', info, {
        removeOnComplete: true,
      });
    } catch (error) {
      console.log(error, 'is the error');
    }

    try {
      await this.userQueue.addBulk(jobs);
    } catch (error) {
      console.log(error, 'is the first error');
    }
  }

  async insertLogQueue(errInfo: CreateLogDto) {
    await this.userQueue.add('logging', errInfo, {
      removeOnComplete: true,
    });
  }

  /**************Warning************\
   * *This function will execute start of every minute*
   *************************/
  @Cron('0 * * * * *')
  async fetchUsers() {
    /************************************************
     * **Logic behind the condition**\
     * ### _information:_
     * * we know that _The getTime() function, when called on a JavaScript Date object, returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (also known as the Unix epoch time)._
     * * Every day we have 6.85714285714 time 3 hours 30 minutes, which exactly means that the floor value 6 [times] only executed on every day
     * * For next day it will be executed before 3 hours 30 minutes. 0.85714285714 remaining means it will be executed in 3 hour on between every days.
     * * _We can extend this by getMinutes()+60*getHours()+24*60*getDate()+.... and so on., but this will lag at extended period of time._
     * * Alternatively, to restrict this just moved to alternative standards.
     ************************************************/
    const unblock: boolean = Math.floor(new Date().getTime() / 60000) % 210 == 0;
    if (unblock || process.env.MINUTE_MODE == 'true') {
      // restriction
      const { insertQueue, insertLogQueue, userQueue } = this;
      const requestTime = new Date().getTime(),
        requestUrl =
          process.env.USER_LIST_URL ?? 'https://randomuser.me/api/?results=10';
      this.http.get(requestUrl).subscribe({
        next: (res: AxiosResponse<ResType>) => {
          const responseTime = new Date().getTime();
          var delay: number = responseTime - requestTime;
          insertQueue(res.data.results, {
            success: true,
            method: 'GET',
            requestTime: new Date(requestTime).toString(),
            requestUrl: requestUrl,
            response: res.data,
            status: res.status,
            statusText: res.statusText,
            responseTime: new Date(responseTime).toString(),
            responseDelay: delay,
          });
        },
        error: (err) => {
          const responseTime = new Date().getTime();
          var delay: number = responseTime - requestTime;
          insertLogQueue({
            success: false,
            method: 'GET',
            requestTime: new Date(requestTime).toString(),
            requestUrl: requestUrl,
            response: err,
            responseDelay: delay,
            responseTime: new Date(responseTime).toString(),
          });
        },
        complete() {
          Logger.log('fetch success', new Date().toString());
        },
      });
    }
  }
}
