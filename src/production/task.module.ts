import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.db';

@Module({
  providers: [TaskService],
  controllers: [TaskController],
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
})
export class TaskModule {}
