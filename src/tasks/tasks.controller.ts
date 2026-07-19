import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam
} from '@nestjs/swagger'

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: 201,
    description: 'Task created successfully',
    type: String,
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all tasks' })
  @ApiResponse({
    status: 200,
    description: 'Tasks found',
    type: String,
  })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one task by id' })
  @ApiParam({ name: 'id', type: 'string', description: 'MongoDB ObjectId of the task' })
  @ApiResponse({
    status: 200,
    description: 'Task found',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found',
    type: String,
  })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task by id' })
  @ApiParam({ name: 'id', type: 'string', description: 'MongoDB ObjectId of the task' })
  @ApiResponse({
    status: 200,
    description: 'Task updated successfully',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found',
    type: String,
  })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by id' })
  @ApiParam({ name: 'id', type: 'string', description: 'MongoDB ObjectId of the task' })
  @ApiResponse({
    status: 200,
    description: 'Task deleted successfully',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found',
    type: String,
  })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
