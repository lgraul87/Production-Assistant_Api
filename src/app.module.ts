import { Module } from '@nestjs/common';
import { TaskModule } from './production/task.module'

import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [TaskModule,MongooseModule.forRoot('mongodb://localhost/task')],
  controllers: [],
  providers: [],
})
export class AppModule {}
