import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from '../service/task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Get()
    async index() {
        return await this.taskService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.taskService.findOne(id);
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return await this.taskService.create(createTaskDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return await this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.taskService.delete(id);
    }
}