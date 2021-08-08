import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../task/dto/create-task.dto';
import { UpdateTaskDto } from '../task/dto/update-task.dto';
import { Task, TaskDocument } from '../_db/db';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly model: Model<TaskDocument>,
  ) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await new this.model({
      ...createTaskDto,
    }).save();
  }

  async findAll(): Promise<Task[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return await this.model.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.model.findOneAndUpdate(updateTaskDto);
  }

  async delete(id: string): Promise<Task> {
    return await this.model.findOneAndDelete();
  }
}