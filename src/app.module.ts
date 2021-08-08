import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module'

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [TaskModule,UserModule,
    MongooseModule.forRoot('mongodb://localhost/production-assistant',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }),
    ],
  controllers: [],
  providers: [],
})
export class AppModule { }
