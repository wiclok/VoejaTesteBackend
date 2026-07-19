import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskModel.create(createTaskDto);
  }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  async findOne(id: string) {
    const task = await this.taskModel.findById(id).exec();
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, {
        returnDocument: 'after',
        runValidators: true,
      })
      .exec();
    return task;
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
