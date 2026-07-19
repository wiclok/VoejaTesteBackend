import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task 1',
    description: 'Título da tarefa',
    minLength: 3,
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title!: string;

  @ApiProperty({
    example: 'Task description',
    description: 'Descrição da tarefa',
    minLength: 3,
    maxLength: 500,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description!: string;

  @ApiProperty({
    example: TaskStatus.PENDING,
    enum: TaskStatus,
    description: 'Status da tarefa',
  })
  @IsEnum(TaskStatus)
  status!: TaskStatus;
}
