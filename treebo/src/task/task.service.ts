import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>
  ){}
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll(): Promise<Task[]>{
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({id:id});
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({id:id}, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete({id:id});
  }
}
