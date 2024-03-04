import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LogModule } from './log/log.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BullModule } from '@nestjs/bull';
import { HttpModule } from '@nestjs/axios';
import { TimerModule } from './timer/timer.module';
import { ConfigModule } from '@nestjs/config';
/***************************************
 * ### Remember:
 * * We use env everywhere in the application right?. so we need to load the Config module before importing anything. so it will be loaded before the import of other modules.
 **************************************/
@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    LogModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
    }),
    HttpModule,
    TimerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
