import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task, TaskDocument } from '../../_db/db';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly model: Model<TaskDocument>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return await this.model.findById(id).exec();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await new this.model({
      ...createTaskDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.model.findByIdAndUpdate(id, updateTaskDto).exec();
  }

  async delete(id: string): Promise<Task> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}