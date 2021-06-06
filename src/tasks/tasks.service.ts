import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const {title, decription }  = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      decription,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task)
    return task;
  }
}


