import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  private validateObjectId(id: string) {
  if (!Types.ObjectId.isValid(id)) {
    throw new BadRequestException('Invalid task id');
  }
}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskModel.create(createTaskDto);
  }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  async findOne(id: string) {
    this.validateObjectId(id);
    const task = await this.taskModel.findById(id).exec();

    if (!task) {
      throw new NotFoundException(`Task not found`)
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    this.validateObjectId(id);
    const task = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, {
        returnDocument: 'after',
        runValidators: true,
      })
      .exec();

      if (!task) {
        throw new NotFoundException(`Task not found`)
      }

    return task;
  }

  async remove(id: string) {
    this.validateObjectId(id);
    const task = await this.taskModel.findByIdAndDelete(id).exec();

    if (!task) {
      throw new NotFoundException(`Task not found`)
    }

    return task;
  }
}
